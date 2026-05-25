/**
 * Phoneme Audio Synthesizer
 *
 * Generates authentic letter SOUNDS (not letter names) using Web Audio API.
 * Each phoneme is carefully crafted:
 *   - Fricatives (s, f, sh, z) → filtered white noise
 *   - Plosives (p, b, t, d, k, g) → short noise burst + pitch
 *   - Nasals (m, n) → low oscillator through bandpass
 *   - Vowels (a, e, i, o, u) → formant-shaped oscillators
 *   - Approximants (w, y, l, r) → gliding oscillators
 */

let ctx: AudioContext | null = null;

function getCtx(): AudioContext {
  if (!ctx) ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}


/** White noise buffer */
function noiseBuffer(durationSec: number): AudioBuffer {
  const ac = getCtx();
  const buf = ac.createBuffer(1, ac.sampleRate * durationSec, ac.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  return buf;
}

function playNoise(
  durationSec: number,
  filterType: BiquadFilterType,
  frequency: number,
  Q: number,
  gainVal: number,
  at = 0,
): void {
  const ac = getCtx();
  const t = ac.currentTime + at;
  const src = ac.createBufferSource();
  src.buffer = noiseBuffer(durationSec + 0.1);

  const filt = ac.createBiquadFilter();
  filt.type = filterType;
  filt.frequency.setValueAtTime(frequency, t);
  filt.Q.setValueAtTime(Q, t);

  const g = ac.createGain();
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(gainVal, t + 0.01);
  g.gain.setValueAtTime(gainVal, t + durationSec - 0.04);
  g.gain.linearRampToValueAtTime(0, t + durationSec);

  src.connect(filt);
  filt.connect(g);
  g.connect(ac.destination);
  src.start(t);
  src.stop(t + durationSec + 0.05);
}

function playTone(
  freq: number,
  durationSec: number,
  type: OscillatorType = 'sine',
  gainVal = 0.3,
  at = 0,
  freqEnd?: number,
): void {
  const ac = getCtx();
  const t = ac.currentTime + at;
  const osc = ac.createOscillator();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (freqEnd !== undefined) osc.frequency.linearRampToValueAtTime(freqEnd, t + durationSec);

  const g = ac.createGain();
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(gainVal, t + 0.02);
  g.gain.setValueAtTime(gainVal, t + durationSec - 0.05);
  g.gain.linearRampToValueAtTime(0, t + durationSec);

  osc.connect(g);
  g.connect(ac.destination);
  osc.start(t);
  osc.stop(t + durationSec + 0.05);
}

// ─── Individual phoneme sounds ─────────────────────────────────────────────────

const PHONEME_SOUNDS: Record<string, () => void> = {
  // ── Short vowels ──────────────────────────────────────────────────────────
  'a': () => {
    // Short /æ/ like in "cat" — low, open formant ~800Hz
    playTone(800, 0.4, 'sine', 0.25);
    playTone(1200, 0.4, 'sine', 0.1);
  },
  'e': () => {
    // Short /ɛ/ like in "egg" — mid formant ~600Hz
    playTone(600, 0.4, 'sine', 0.25);
    playTone(1800, 0.4, 'sine', 0.08);
  },
  'i': () => {
    // Short /ɪ/ like in "igloo" — high formant ~300Hz F1, 2200Hz F2
    playTone(300, 0.35, 'sine', 0.2);
    playTone(2200, 0.35, 'sine', 0.1);
  },
  'o': () => {
    // Short /ɒ/ like in "ox" — rounded ~500Hz
    playTone(500, 0.4, 'sine', 0.25);
    playTone(900, 0.4, 'sine', 0.1);
  },
  'u': () => {
    // Short /ʌ/ like in "umbrella" — mid-low ~600Hz
    playTone(600, 0.4, 'sine', 0.22);
    playTone(1000, 0.4, 'sine', 0.08);
  },

  // ── Fricatives ────────────────────────────────────────────────────────────
  's': () => {
    // Voiceless alveolar fricative — high-frequency hiss ~7000Hz
    playNoise(0.5, 'highpass', 5000, 3, 0.4);
    playNoise(0.5, 'bandpass', 7500, 5, 0.25);
  },
  'z': () => {
    // Voiced alveolar fricative — buzz + hiss
    playNoise(0.4, 'highpass', 4000, 2, 0.3);
    playTone(180, 0.4, 'sawtooth', 0.15); // voiced component
  },
  'f': () => {
    // Labiodental fricative — broadband noise, slightly lower
    playNoise(0.5, 'highpass', 3500, 2, 0.35);
  },
  'v': () => {
    // Voiced labiodental — noise + low buzz
    playNoise(0.4, 'highpass', 2500, 2, 0.25);
    playTone(200, 0.4, 'sawtooth', 0.18);
  },
  'sh': () => {
    // Postalveolar — lower than S, ~3500Hz centre
    playNoise(0.5, 'bandpass', 3500, 2, 0.4);
  },
  'th': () => {
    // Dental fricative — very broadband, low level
    playNoise(0.45, 'highpass', 2000, 1, 0.25);
  },
  'h': () => {
    // Glottal fricative — broadband breath
    playNoise(0.35, 'lowpass', 3000, 0.5, 0.3);
  },

  // ── Plosives ──────────────────────────────────────────────────────────────
  'p': () => {
    // Voiceless bilabial — noise burst
    playNoise(0.08, 'highpass', 1000, 1, 0.5);
    // small schwa after
    playTone(500, 0.1, 'sine', 0.1, 0.08);
  },
  'b': () => {
    // Voiced bilabial — low burst + tone
    playNoise(0.06, 'lowpass', 800, 2, 0.45);
    playTone(150, 0.12, 'sine', 0.2, 0.04);
  },
  't': () => {
    // Voiceless alveolar — higher burst
    playNoise(0.07, 'bandpass', 4000, 3, 0.5);
    playTone(600, 0.08, 'sine', 0.08, 0.07);
  },
  'd': () => {
    // Voiced alveolar — burst + low voice
    playNoise(0.06, 'bandpass', 2500, 3, 0.4);
    playTone(180, 0.12, 'sine', 0.2, 0.04);
  },
  'k': () => {
    // Voiceless velar — back-of-mouth burst
    playNoise(0.08, 'bandpass', 1500, 4, 0.5);
    playNoise(0.06, 'highpass', 3000, 2, 0.2, 0.04);
  },
  'g': () => {
    // Voiced velar
    playNoise(0.07, 'bandpass', 1200, 3, 0.4);
    playTone(130, 0.14, 'sine', 0.22, 0.04);
  },

  // ── Nasals ────────────────────────────────────────────────────────────────
  'm': () => {
    // Bilabial nasal — low hum, closed mouth
    playTone(220, 0.5, 'sine', 0.3);
    playTone(440, 0.5, 'sine', 0.08);
  },
  'n': () => {
    // Alveolar nasal — slightly higher hum
    playTone(280, 0.5, 'sine', 0.28);
    playTone(560, 0.5, 'sine', 0.07);
  },
  'ng': () => {
    // Velar nasal — deeper hum
    playTone(180, 0.5, 'sine', 0.3);
    playTone(380, 0.5, 'sine', 0.1);
  },

  // ── Approximants / Liquids ────────────────────────────────────────────────
  'l': () => {
    // Lateral approximant — smooth, mid freq
    playTone(400, 0.12, 'sine', 0.1);
    playTone(700, 0.4, 'sine', 0.25, 0.05);
  },
  'r': () => {
    // Rhotic — glide from ~800Hz to 1200Hz
    playTone(800, 0.4, 'sine', 0.25, 0, 1200);
    playTone(1800, 0.4, 'sine', 0.08, 0, 2000);
  },
  'w': () => {
    // Bilabial approximant — /u/ glide to open
    playTone(300, 0.1, 'sine', 0.25);
    playTone(300, 0.35, 'sine', 0.25, 0.08, 800);
    playTone(700, 0.35, 'sine', 0.1, 0.08, 1400);
  },
  'y': () => {
    // Palatal approximant — high glide
    playTone(2000, 0.1, 'sine', 0.2);
    playTone(2000, 0.35, 'sine', 0.2, 0.08, 600);
    playTone(2500, 0.35, 'sine', 0.08, 0.08, 1200);
  },
  'j': () => {
    // /dʒ/ affricate — burst then fricative
    playNoise(0.06, 'bandpass', 2000, 3, 0.35);
    playTone(150, 0.1, 'sine', 0.2, 0.04);
    playNoise(0.2, 'bandpass', 3500, 3, 0.25, 0.1);
  },
  'ch': () => {
    // /tʃ/ affricate
    playNoise(0.07, 'bandpass', 3000, 3, 0.45);
    playNoise(0.2, 'bandpass', 3500, 2, 0.3, 0.07);
  },
  'x': () => {
    // /ks/ cluster — k then s
    playNoise(0.07, 'bandpass', 1500, 4, 0.45);
    playNoise(0.35, 'highpass', 5000, 3, 0.35, 0.1);
  },
  'qu': () => {
    // /kw/
    playNoise(0.07, 'bandpass', 1500, 4, 0.4);
    playTone(300, 0.1, 'sine', 0.2, 0.06);
    playTone(300, 0.3, 'sine', 0.2, 0.14, 700);
  },
};

/**
 * Play the phoneme sound for a given letter/digraph.
 * letterKey should match the phonicsData item's letter field (uppercase or lowercase).
 */
export function playPhonemeSound(letterKey: string): boolean {
  const key = letterKey.toLowerCase().replace('qu', 'qu');
  const fn = PHONEME_SOUNDS[key];
  if (!fn) return false;
  try { fn(); return true; } catch { return false; }
}

export function isPhonemeSupported(letterKey: string): boolean {
  return letterKey.toLowerCase() in PHONEME_SOUNDS;
}

export function isWebAudioSupported(): boolean {
  return !!(window.AudioContext || (window as any).webkitAudioContext);
}

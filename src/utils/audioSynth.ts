// Web Audio API melody synthesizer
// Produces real musical notes and melodies - not speech

export interface Note {
  freq: number | null; // null = rest
  dur: number;         // duration in seconds
  vol?: number;        // 0-1, default 0.3
}

// Note frequencies (Hz)
const NOTES: Record<string, number> = {
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23,
  G4: 392.00, A4: 440.00, B4: 493.88,
  C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46,
  G5: 783.99, A5: 880.00, B5: 987.77,
  C3: 130.81, D3: 146.83, E3: 164.81, G3: 196.00, A3: 220.00,
};

// Song melodies encoded as [noteName, durationBeats][]
// BPM is set per song
export interface SongMelody {
  id: string;
  bpm: number;
  notes: Array<[string, number]>; // [noteName | 'R' for rest, beats]
}

export const MELODIES: SongMelody[] = [
  {
    id: 'twinkle',
    bpm: 100,
    notes: [
      ['C4',1],['C4',1],['G4',1],['G4',1],['A4',1],['A4',1],['G4',2],
      ['F4',1],['F4',1],['E4',1],['E4',1],['D4',1],['D4',1],['C4',2],
      ['G4',1],['G4',1],['F4',1],['F4',1],['E4',1],['E4',1],['D4',2],
      ['G4',1],['G4',1],['F4',1],['F4',1],['E4',1],['E4',1],['D4',2],
      ['C4',1],['C4',1],['G4',1],['G4',1],['A4',1],['A4',1],['G4',2],
      ['F4',1],['F4',1],['E4',1],['E4',1],['D4',1],['D4',1],['C4',2],
    ],
  },
  {
    id: 'abc-song',
    bpm: 104,
    notes: [
      ['C4',1],['C4',1],['G4',1],['G4',1],['A4',1],['A4',1],['G4',2],
      ['F4',1],['F4',1],['E4',1],['E4',1],['D4',1],['D4',1],['C4',2],
      ['G4',1],['G4',1],['F4',1],['F4',1],['E4',1],['E4',1],['D4',2],
      ['G4',1],['G4',1],['F4',1],['F4',1],['E4',1],['E4',1],['D4',2],
      ['C4',1],['C4',1],['G4',1],['G4',1],['A4',1],['A4',1],['G4',2],
      ['F4',1],['F4',1],['E4',1],['E4',1],['D4',1],['D4',1],['C4',3],
    ],
  },
  {
    id: 'happy-birthday',
    bpm: 90,
    notes: [
      ['G4',0.75],['G4',0.25],['A4',1],['G4',1],['C5',1],['B4',2],
      ['G4',0.75],['G4',0.25],['A4',1],['G4',1],['D5',1],['C5',2],
      ['G4',0.75],['G4',0.25],['G5',1],['E5',1],['C5',1],['B4',1],['A4',1],
      ['F5',0.75],['F5',0.25],['E5',1],['C5',1],['D5',1],['C5',2],
    ],
  },
  {
    id: 'mary-lamb',
    bpm: 108,
    notes: [
      ['E4',1],['D4',1],['C4',1],['D4',1],['E4',1],['E4',1],['E4',2],
      ['D4',1],['D4',1],['D4',2],['E4',1],['G4',1],['G4',2],
      ['E4',1],['D4',1],['C4',1],['D4',1],['E4',1],['E4',1],['E4',1],['E4',1],
      ['D4',1],['D4',1],['E4',1],['D4',1],['C4',3],
    ],
  },
  {
    id: 'old-macdonald',
    bpm: 116,
    notes: [
      ['G4',1],['G4',1],['G4',1],['D4',1],['E4',1],['E4',1],['D4',2],
      ['B4',1],['B4',1],['A4',1],['A4',1],['G4',3],
      ['D4',1],['G4',1],['G4',1],['G4',1],['D4',1],['E4',1],['E4',1],['D4',2],
      ['B4',1],['B4',1],['A4',1],['A4',1],['G4',3],
    ],
  },
  {
    id: 'baa-baa',
    bpm: 100,
    notes: [
      ['G4',1],['G4',1],['D5',1],['D5',1],['E5',1],['E5',1],['D5',2],
      ['C5',1],['C5',1],['B4',1],['B4',1],['A4',1],['A4',1],['G4',2],
      ['D5',1],['D5',1],['C5',1],['C5',1],['B4',1],['B4',1],['A4',2],
      ['D5',1],['D5',1],['C5',1],['C5',1],['B4',1],['B4',1],['A4',2],
      ['G4',1],['G4',1],['D5',1],['D5',1],['E5',1],['E5',1],['D5',2],
      ['C5',1],['C5',1],['B4',1],['B4',1],['A4',1],['A4',1],['G4',2],
    ],
  },
  {
    id: 'wheels-bus',
    bpm: 118,
    notes: [
      ['G4',1],['G4',1],['G4',1],['A4',1],['G4',1],['E4',1],['G4',2],
      ['G4',1],['G4',1],['G4',1],['A4',1],['G4',1],['E4',1],['G4',2],
      ['D5',1],['D5',1],['D5',1],['E5',1],['D5',1],['B4',1],['D5',2],
      ['G4',1],['G4',1],['G4',1],['A4',1],['G4',1],['E4',1],['G4',2],
    ],
  },
  {
    id: 'row-boat',
    bpm: 104,
    notes: [
      ['C4',2],['D4',1],['E4',2],['D4',1],
      ['E4',1],['F4',1],['G4',3],
      ['G4',1],['G4',1],['G4',1],['A4',1],['A4',1],['A4',1],
      ['G4',1],['G4',1],['G4',1],['F4',1],['F4',1],['F4',1],
      ['E4',2],['C5',1],['C5',2],['C5',1],
      ['G4',1],['G4',1],['G4',1],['E4',1],['C4',2],
    ],
  },
  {
    id: 'humpty',
    bpm: 92,
    notes: [
      ['E4',1],['G4',1],['G4',1],['G4',1],['E4',1],['G4',1],['A4',2],
      ['A4',1],['G4',1],['A4',1],['B4',1],['C5',3],
      ['E4',1],['G4',1],['G4',1],['G4',1],['E4',1],['F4',1],['G4',2],
      ['A4',1],['G4',1],['F4',1],['E4',1],['D4',3],
    ],
  },
  {
    id: 'itsy-spider',
    bpm: 108,
    notes: [
      ['G4',1],['C5',1],['C5',1],['C5',1],['D5',1],['E5',2],
      ['E5',1],['D5',1],['E5',1],['F5',1],['G5',2],
      ['G5',1],['G5',1],['F5',1],['E5',1],['F5',1],['D5',2],
      ['G4',1],['C5',1],['C5',1],['C5',1],['B4',1],['C5',2],
    ],
  },
  {
    id: 'hickory-dickory',
    bpm: 96,
    notes: [
      ['C4',1],['C4',1],['G4',1],['E4',1],['C5',2],
      ['B4',1],['A4',1],['G4',2],['R',1],
      ['G4',1],['A4',1],['B4',1],['C5',1],['D5',2],
      ['E5',1],['D5',1],['C5',1],['B4',1],['C5',2],
      ['C4',1],['C4',1],['G4',1],['E4',1],['C5',2],
    ],
  },
  {
    id: 'five-speckled-frogs',
    bpm: 110,
    notes: [
      ['G4',1],['A4',1],['B4',1],['C5',1],['C5',1],['C5',1],['B4',1],['A4',1],
      ['G4',1],['G4',1],['G4',1],['E4',1],['D4',2],
      ['G4',1],['A4',1],['B4',1],['C5',1],['C5',1],['C5',1],['B4',1],['A4',1],
      ['G4',1],['G4',1],['G4',1],['G4',1],['G4',2],
    ],
  },
];

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioCtx;
}

let stopFn: (() => void) | null = null;

export function playSong(songId: string, onEnd?: () => void): () => void {
  const melody = MELODIES.find(m => m.id === songId);
  if (!melody) return () => {};

  // Stop any currently playing song
  if (stopFn) { stopFn(); stopFn = null; }

  const ctx = getAudioContext();
  if (ctx.state === 'suspended') ctx.resume();

  const beatDur = 60 / melody.bpm;
  let t = ctx.currentTime + 0.05;
  const gainNode = ctx.createGain();
  gainNode.gain.setValueAtTime(0.25, ctx.currentTime);
  gainNode.connect(ctx.destination);

  const oscillators: OscillatorNode[] = [];
  let totalDur = 0;

  for (const [noteName, beats] of melody.notes) {
    const dur = beats * beatDur;
    if (noteName !== 'R' && NOTES[noteName]) {
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(NOTES[noteName], t);
      noteGain.gain.setValueAtTime(0, t);
      noteGain.gain.linearRampToValueAtTime(0.4, t + 0.02);
      noteGain.gain.setValueAtTime(0.35, t + dur - 0.06);
      noteGain.gain.linearRampToValueAtTime(0, t + dur - 0.01);
      osc.connect(noteGain);
      noteGain.connect(gainNode);
      osc.start(t);
      osc.stop(t + dur);
      oscillators.push(osc);
    }
    t += dur;
    totalDur += dur;
  }

  const endTimer = setTimeout(() => {
    onEnd?.();
    stopFn = null;
  }, (totalDur + 0.2) * 1000);

  stopFn = () => {
    clearTimeout(endTimer);
    gainNode.gain.setValueAtTime(gainNode.gain.value, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.1);
    oscillators.forEach(o => { try { o.stop(ctx.currentTime + 0.15); } catch {} });
    onEnd?.();
    stopFn = null;
  };

  return stopFn;
}

export function stopSong() {
  if (stopFn) { stopFn(); stopFn = null; }
}

export function isAudioSupported(): boolean {
  return !!(window.AudioContext || (window as any).webkitAudioContext);
}


let lastText = '';

export function speak(text: string, rate = 0.85, pitch = 1.1): void {
  if (!('speechSynthesis' in window)) return;

  stopSpeaking();
  lastText = text;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = rate;
  utterance.pitch = pitch;
  utterance.volume = 1;

  // Prefer a friendly English voice
  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find(
    (v) =>
      v.lang.startsWith('en') &&
      (v.name.includes('Samantha') ||
        v.name.includes('Google') ||
        v.name.includes('Karen') ||
        v.name.includes('Moira'))
  );
  if (preferred) utterance.voice = preferred;

  
  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking(): void {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  
}

export function repeatCurrentVoice(): void {
  if (lastText) {
    speak(lastText);
  }
}

export function isSpeechSupported(): boolean {
  return 'speechSynthesis' in window;
}

// Some browsers need voices to load asynchronously
export function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      resolve(voices);
    } else {
      window.speechSynthesis.onvoiceschanged = () => {
        resolve(window.speechSynthesis.getVoices());
      };
    }
  });
}

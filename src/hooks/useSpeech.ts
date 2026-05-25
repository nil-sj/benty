import { useCallback, useEffect, useRef, useState } from 'react';
import { speak, stopSpeaking, repeatCurrentVoice, isSpeechSupported } from '../utils/speech';

export function useSpeech(voiceEnabled = true) {
  const [isEnabled, setIsEnabled] = useState(voiceEnabled);
  const [supported] = useState(isSpeechSupported);
  const lastTextRef = useRef('');

  const sayText = useCallback(
    (text: string) => {
      if (!isEnabled || !supported) return;
      lastTextRef.current = text;
      speak(text);
    },
    [isEnabled, supported]
  );

  const repeat = useCallback(() => {
    if (!isEnabled || !supported) return;
    repeatCurrentVoice();
  }, [isEnabled, supported]);

  const stop = useCallback(() => {
    stopSpeaking();
  }, []);

  const toggle = useCallback(() => {
    setIsEnabled((prev) => {
      if (prev) stopSpeaking();
      return !prev;
    });
  }, []);

  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  return { sayText, repeat, stop, toggle, isEnabled, supported };
}

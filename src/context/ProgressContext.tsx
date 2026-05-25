import { createContext, useCallback, useContext, useEffect, useState } from 'react';

export interface ActivityStat {
  id: string;
  totalPlays: number;
  correctAnswers: number;
  totalAnswers: number;
  lastPlayed: number; // timestamp
  starred: boolean;
}

export interface AppSettings {
  voiceEnabled: boolean;
  autoRead: boolean;
  speechRate: number; // 0.5 – 1.5
  theme: 'light' | 'dark';
}

interface ProgressState {
  stats: Record<string, ActivityStat>;
  settings: AppSettings;
  recentIds: string[]; // last 8 activity IDs played
}

interface ProgressContextValue extends ProgressState {
  recordActivity: (id: string, correct?: boolean) => void;
  toggleFavorite: (id: string) => void;
  updateSettings: (patch: Partial<AppSettings>) => void;
  getStatFor: (id: string) => ActivityStat | undefined;
  clearProgress: () => void;
}

const DEFAULT_SETTINGS: AppSettings = {
  voiceEnabled: true,
  autoRead: true,
  speechRate: 0.85,
  theme: 'light',
};

const STORAGE_KEY = 'mishka_progress_v1';

function load(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as ProgressState;
  } catch { /* ignore */ }
  return { stats: {}, settings: DEFAULT_SETTINGS, recentIds: [] };
}

function save(state: ProgressState) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* ignore */ }
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ProgressState>(load);

  useEffect(() => { save(state); }, [state]);

  const recordActivity = useCallback((id: string, correct?: boolean) => {
    setState(prev => {
      const existing = prev.stats[id] ?? {
        id, totalPlays: 0, correctAnswers: 0, totalAnswers: 0, lastPlayed: 0, starred: false,
      };
      const updated: ActivityStat = {
        ...existing,
        totalPlays: existing.totalPlays + (correct === undefined ? 1 : 0),
        correctAnswers: correct === true ? existing.correctAnswers + 1 : existing.correctAnswers,
        totalAnswers: correct !== undefined ? existing.totalAnswers + 1 : existing.totalAnswers,
        lastPlayed: Date.now(),
      };
      const recentIds = [id, ...prev.recentIds.filter(r => r !== id)].slice(0, 8);
      return { ...prev, stats: { ...prev.stats, [id]: updated }, recentIds };
    });
  }, []);

  const toggleFavorite = useCallback((id: string) => {
    setState(prev => {
      const existing = prev.stats[id] ?? {
        id, totalPlays: 0, correctAnswers: 0, totalAnswers: 0, lastPlayed: 0, starred: false,
      };
      return { ...prev, stats: { ...prev.stats, [id]: { ...existing, starred: !existing.starred } } };
    });
  }, []);

  const updateSettings = useCallback((patch: Partial<AppSettings>) => {
    setState(prev => ({ ...prev, settings: { ...prev.settings, ...patch } }));
  }, []);

  const getStatFor = useCallback((id: string) => state.stats[id], [state.stats]);

  const clearProgress = useCallback(() => {
    setState({ stats: {}, settings: DEFAULT_SETTINGS, recentIds: [] });
  }, []);

  return (
    <ProgressContext.Provider value={{ ...state, recordActivity, toggleFavorite, updateSettings, getStatFor, clearProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}

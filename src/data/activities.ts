export type ComponentType =
  | 'flashcard-sequential'
  | 'flashcard-random'
  | 'counting'
  | 'progressive-list'
  | 'music-album'
  | 'drawing-canvas'
  | 'matching'
  | 'missing-letter'
  | 'odd-man-out'
  | 'multiple-choice-quiz'
  | 'open-quiz'
  | 'sight-word'
  | 'word-spinner';

export type NavigationMode = 'sequential' | 'random';
export type LayoutMode = 'single-column' | 'two-column' | 'grid' | 'canvas' | 'quiz' | 'matching' | 'music-album';

export interface ActivityConfig {
  id: string;
  title: string;
  category: string;
  icon: string;
  description: string;
  route: string;
  componentType: ComponentType;
  dataSource: string;
  navigationMode: NavigationMode;
  layout: LayoutMode;
  voiceEnabled: boolean;
  comingSoon?: boolean;
}

export const activities: ActivityConfig[] = [
  // Learn Basics
  {
    id: 'learn-alphabet',
    title: 'Learn Alphabet',
    category: 'Learn Basics',
    icon: '🔤',
    description: 'Learn A to Z with pictures and sounds.',
    route: '/activity/learn-alphabet',
    componentType: 'flashcard-sequential',
    dataSource: 'alphabet',
    navigationMode: 'sequential',
    layout: 'two-column',
    voiceEnabled: true,
  },
  {
    id: 'learn-numbers',
    title: 'Learn Numbers',
    category: 'Learn Basics',
    icon: '🔢',
    description: 'Count from 1 to 10 with fun objects!',
    route: '/activity/learn-numbers',
    componentType: 'flashcard-sequential',
    dataSource: 'numbers',
    navigationMode: 'sequential',
    layout: 'two-column',
    voiceEnabled: true,
  },
  {
    id: 'learn-shapes',
    title: 'Learn Shapes',
    category: 'Learn Basics',
    icon: '🔷',
    description: 'Circles, squares, triangles and more!',
    route: '/activity/learn-shapes',
    componentType: 'flashcard-sequential',
    dataSource: 'shapes',
    navigationMode: 'sequential',
    layout: 'two-column',
    voiceEnabled: true,
  },
  {
    id: 'learn-colors',
    title: 'Learn Colors',
    category: 'Learn Basics',
    icon: '🌈',
    description: 'Discover all the beautiful colors!',
    route: '/activity/learn-colors',
    componentType: 'flashcard-sequential',
    dataSource: 'colors',
    navigationMode: 'sequential',
    layout: 'two-column',
    voiceEnabled: true,
  },
  {
    id: 'days-of-week',
    title: 'Days of the Week',
    category: 'Learn Basics',
    icon: '📅',
    description: 'Monday through Sunday, let\'s learn them all!',
    route: '/activity/days-of-week',
    componentType: 'progressive-list',
    dataSource: 'daysOfWeek',
    navigationMode: 'sequential',
    layout: 'single-column',
    voiceEnabled: true,
  },
  {
    id: 'months-of-year',
    title: 'Months of the Year',
    category: 'Learn Basics',
    icon: '🗓️',
    description: 'January to December, all 12 months!',
    route: '/activity/months-of-year',
    componentType: 'progressive-list',
    dataSource: 'monthsOfYear',
    navigationMode: 'sequential',
    layout: 'single-column',
    voiceEnabled: true,
  },
  {
    id: 'learn-seasons',
    title: 'Seasons',
    category: 'Learn Basics',
    icon: '🍂',
    description: 'Spring, Summer, Fall, and Winter!',
    route: '/activity/learn-seasons',
    componentType: 'progressive-list',
    dataSource: 'seasons',
    navigationMode: 'sequential',
    layout: 'single-column',
    voiceEnabled: true,
  },

  // Learn Things Around Us
  {
    id: 'learn-fruits',
    title: 'Learn Fruits',
    category: 'Learn Things Around Us',
    icon: '🍎',
    description: 'Tasty fruits from around the world!',
    route: '/activity/learn-fruits',
    componentType: 'flashcard-random',
    dataSource: 'fruits',
    navigationMode: 'random',
    layout: 'two-column',
    voiceEnabled: true,
  },
  {
    id: 'learn-vegetables',
    title: 'Learn Vegetables',
    category: 'Learn Things Around Us',
    icon: '🥦',
    description: 'Yummy veggies that keep you strong!',
    route: '/activity/learn-vegetables',
    componentType: 'flashcard-random',
    dataSource: 'vegetables',
    navigationMode: 'random',
    layout: 'two-column',
    voiceEnabled: true,
  },
  {
    id: 'learn-animals',
    title: 'Learn Animals',
    category: 'Learn Things Around Us',
    icon: '🦁',
    description: 'Meet amazing animals from everywhere!',
    route: '/activity/learn-animals',
    componentType: 'flashcard-random',
    dataSource: 'animals',
    navigationMode: 'random',
    layout: 'two-column',
    voiceEnabled: true,
  },
  {
    id: 'learn-vehicles',
    title: 'Learn Vehicles',
    category: 'Learn Things Around Us',
    icon: '🚗',
    description: 'Cars, planes, boats and more!',
    route: '/activity/learn-vehicles',
    componentType: 'flashcard-random',
    dataSource: 'vehicles',
    navigationMode: 'random',
    layout: 'two-column',
    voiceEnabled: true,
  },

  // Games & Puzzles
  {
    id: 'count-objects',
    title: 'Count Objects',
    category: 'Games & Puzzles',
    icon: '🔢',
    description: 'Count the objects and press the right number!',
    route: '/activity/count-objects',
    componentType: 'counting',
    dataSource: 'countable',
    navigationMode: 'random',
    layout: 'single-column',
    voiceEnabled: true,
  },
  {
    id: 'missing-letter',
    title: 'Missing Letter',
    category: 'Games & Puzzles',
    icon: '🔍',
    description: 'Can you find the missing letter?',
    route: '/activity/missing-letter',
    componentType: 'missing-letter',
    dataSource: 'alphabet',
    navigationMode: 'random',
    layout: 'quiz',
    voiceEnabled: true,
  },
  {
    id: 'odd-man-out',
    title: 'Odd One Out',
    category: 'Games & Puzzles',
    icon: '🤔',
    description: 'Which one doesn\'t belong with the others?',
    route: '/activity/odd-man-out',
    componentType: 'odd-man-out',
    dataSource: 'mixed',
    navigationMode: 'random',
    layout: 'quiz',
    voiceEnabled: true,
  },
  {
    id: 'matching-game',
    title: 'Matching Game',
    category: 'Games & Puzzles',
    icon: '🔗',
    description: 'Match the pictures to their names!',
    route: '/activity/matching-game',
    componentType: 'matching',
    dataSource: 'mixed',
    navigationMode: 'random',
    layout: 'matching',
    voiceEnabled: true,
  },
  {
    id: 'multiple-choice',
    title: 'Quiz Time!',
    category: 'Games & Puzzles',
    icon: '❓',
    description: 'Fun questions with four choices!',
    route: '/activity/multiple-choice',
    componentType: 'multiple-choice-quiz',
    dataSource: 'quizzes',
    navigationMode: 'random',
    layout: 'quiz',
    voiceEnabled: true,
  },

  // Music & Rhymes
  {
    id: 'music-rhymes',
    title: 'Music & Rhymes',
    category: 'Music & Rhymes',
    icon: '🎵',
    description: 'Sing along to your favorite nursery rhymes!',
    route: '/activity/music-rhymes',
    componentType: 'music-album',
    dataSource: 'songs',
    navigationMode: 'random',
    layout: 'music-album',
    voiceEnabled: false,
  },

  // Drawing & Creativity
  {
    id: 'drawing-canvas',
    title: 'Draw & Create',
    category: 'Drawing & Creativity',
    icon: '🎨',
    description: 'Draw anything you can imagine!',
    route: '/activity/drawing-canvas',
    componentType: 'drawing-canvas',
    dataSource: '',
    navigationMode: 'random',
    layout: 'canvas',
    voiceEnabled: false,
  },

  // Words & Reading
  {
    id: 'sight-words',
    title: 'Sight Words',
    category: 'Words & Reading',
    icon: '👁️',
    description: 'Learn common words by sight!',
    route: '/activity/sight-words',
    componentType: 'sight-word',
    dataSource: 'sightWords',
    navigationMode: 'sequential',
    layout: 'single-column',
    voiceEnabled: true,
  },
  {
    id: 'word-spinner',
    title: 'Word Spinner',
    category: 'Words & Reading',
    icon: '🌀',
    description: 'Spin and build new words!',
    route: '/activity/word-spinner',
    componentType: 'word-spinner',
    dataSource: 'wordFamilies',
    navigationMode: 'random',
    layout: 'single-column',
    voiceEnabled: true,
  },
];

export const categories = [
  { name: 'Learn Basics', icon: '⭐', color: 'var(--cat-basics)' },
  { name: 'Learn Things Around Us', icon: '🌍', color: 'var(--cat-around)' },
  { name: 'Games & Puzzles', icon: '🎮', color: 'var(--cat-games)' },
  { name: 'Music & Rhymes', icon: '🎶', color: 'var(--cat-music)' },
  { name: 'Drawing & Creativity', icon: '🎨', color: 'var(--cat-drawing)' },
  { name: 'Words & Reading', icon: '📖', color: 'var(--cat-words)' },
];

export function getActivityById(id: string): ActivityConfig | undefined {
  return activities.find((a) => a.id === id);
}

export function getActivitiesByCategory(category: string): ActivityConfig[] {
  return activities.filter((a) => a.category === category);
}

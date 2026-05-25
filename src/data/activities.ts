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
  | 'word-spinner'
  | 'animal-sounds'
  | 'memory-card'
  | 'rhyme-finder'
  | 'first-letter'
  | 'opposites'
  | 'addition'
  | 'subtraction'
  | 'compare'
  | 'pattern'
  | 'tell-time'
  | 'phonics'
  | 'cvc-words'
  | 'sentence-reader'
  | 'story-time'
  | 'emotions'
  | 'weather'
  | 'family'
  | 'routines'
  | 'nature-colors'
  | 'senses'
  | 'directions'
  | 'sizes'
  | 'healthy-eating';

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

  // Phase 2 games
  {
    id: 'animal-sounds',
    title: 'Animal Sounds',
    category: 'Games & Puzzles',
    icon: '🔊',
    description: 'What does the cow say? Find out!',
    route: '/activity/animal-sounds',
    componentType: 'animal-sounds' as const,
    dataSource: '',
    navigationMode: 'random' as const,
    layout: 'quiz' as const,
    voiceEnabled: true,
  },
  {
    id: 'memory-card',
    title: 'Memory Card Game',
    category: 'Games & Puzzles',
    icon: '🃏',
    description: 'Flip and match the pairs!',
    route: '/activity/memory-card',
    componentType: 'memory-card' as const,
    dataSource: '',
    navigationMode: 'random' as const,
    layout: 'grid' as const,
    voiceEnabled: true,
  },
  // Phase 3 reading
  {
    id: 'rhyme-finder',
    title: 'Rhyme Finder',
    category: 'Words & Reading',
    icon: '🎵',
    description: 'Which word rhymes with cat?',
    route: '/activity/rhyme-finder',
    componentType: 'rhyme-finder' as const,
    dataSource: '',
    navigationMode: 'random' as const,
    layout: 'quiz' as const,
    voiceEnabled: true,
  },
  {
    id: 'first-letter',
    title: 'First Letter',
    category: 'Words & Reading',
    icon: '🔡',
    description: 'What letter does it start with?',
    route: '/activity/first-letter',
    componentType: 'first-letter' as const,
    dataSource: '',
    navigationMode: 'random' as const,
    layout: 'quiz' as const,
    voiceEnabled: true,
  },
  // New "Learn Things Around Us" activities
  {
    id: 'body-parts',
    title: 'Body Parts',
    category: 'Learn Things Around Us',
    icon: '🫀',
    description: 'Learn all about your amazing body!',
    route: '/activity/body-parts',
    componentType: 'flashcard-random' as const,
    dataSource: 'bodyParts',
    navigationMode: 'random' as const,
    layout: 'two-column' as const,
    voiceEnabled: true,
  },
  {
    id: 'professions',
    title: 'Professions',
    category: 'Learn Things Around Us',
    icon: '👨‍⚕️',
    description: 'Doctors, teachers, pilots and more!',
    route: '/activity/professions',
    componentType: 'flashcard-random' as const,
    dataSource: 'professions',
    navigationMode: 'random' as const,
    layout: 'two-column' as const,
    voiceEnabled: true,
  },
  {
    id: 'household-items',
    title: 'Objects at Home',
    category: 'Learn Things Around Us',
    icon: '🏠',
    description: 'Things you see every day at home!',
    route: '/activity/household-items',
    componentType: 'flashcard-random' as const,
    dataSource: 'householdItems',
    navigationMode: 'random' as const,
    layout: 'two-column' as const,
    voiceEnabled: true,
  },
  {
    id: 'school-items',
    title: 'Objects at School',
    category: 'Learn Things Around Us',
    icon: '🎒',
    description: 'Things you use at school every day!',
    route: '/activity/school-items',
    componentType: 'flashcard-random' as const,
    dataSource: 'schoolItems',
    navigationMode: 'random' as const,
    layout: 'two-column' as const,
    voiceEnabled: true,
  },
  {
    id: 'sports',
    title: 'Sports & Games',
    category: 'Learn Things Around Us',
    icon: '⚽',
    description: 'Football, swimming, tennis and more!',
    route: '/activity/sports',
    componentType: 'flashcard-random' as const,
    dataSource: 'sports',
    navigationMode: 'random' as const,
    layout: 'two-column' as const,
    voiceEnabled: true,
  },
  {
    id: 'learn-numbers-20',
    title: 'Numbers to 20',
    category: 'Learn Basics',
    icon: '🔢',
    description: 'Count all the way up to 20!',
    route: '/activity/learn-numbers-20',
    componentType: 'flashcard-sequential' as const,
    dataSource: 'numbers20',
    navigationMode: 'sequential' as const,
    layout: 'two-column' as const,
    voiceEnabled: true,
  },

  // Opposites
  {
    id: 'opposites',
    title: 'Opposites',
    category: 'Learn Basics',
    icon: '↔️',
    description: 'Big and small, hot and cold — learn opposites!',
    route: '/activity/opposites',
    componentType: 'opposites' as const,
    dataSource: 'opposites',
    navigationMode: 'sequential' as const,
    layout: 'single-column' as const,
    voiceEnabled: true,
  },
  // Mathematics
  {
    id: 'addition',
    title: 'Addition',
    category: 'Mathematics',
    icon: '➕',
    description: 'Add numbers up to 10!',
    route: '/activity/addition',
    componentType: 'addition' as const,
    dataSource: 'addition',
    navigationMode: 'random' as const,
    layout: 'quiz' as const,
    voiceEnabled: true,
  },
  {
    id: 'subtraction',
    title: 'Subtraction',
    category: 'Mathematics',
    icon: '➖',
    description: 'Take away numbers and see what is left!',
    route: '/activity/subtraction',
    componentType: 'subtraction' as const,
    dataSource: 'subtraction',
    navigationMode: 'random' as const,
    layout: 'quiz' as const,
    voiceEnabled: true,
  },
  {
    id: 'more-or-fewer',
    title: 'More or Fewer?',
    category: 'Mathematics',
    icon: '⚖️',
    description: 'Which group has more? Which has fewer?',
    route: '/activity/more-or-fewer',
    componentType: 'compare' as const,
    dataSource: 'compare',
    navigationMode: 'random' as const,
    layout: 'quiz' as const,
    voiceEnabled: true,
  },
  {
    id: 'patterns',
    title: 'What Comes Next?',
    category: 'Mathematics',
    icon: '🔮',
    description: 'Spot the pattern and find what comes next!',
    route: '/activity/patterns',
    componentType: 'pattern' as const,
    dataSource: 'patterns',
    navigationMode: 'random' as const,
    layout: 'quiz' as const,
    voiceEnabled: true,
  },
  {
    id: 'tell-time',
    title: 'Tell the Time',
    category: 'Mathematics',
    icon: '🕐',
    description: 'What time does the clock show?',
    route: '/activity/tell-time',
    componentType: 'tell-time' as const,
    dataSource: 'time',
    navigationMode: 'random' as const,
    layout: 'quiz' as const,
    voiceEnabled: true,
  },
  // Early Reading
  {
    id: 'phonics',
    title: 'Letter Sounds',
    category: 'Early Reading',
    icon: '🔤',
    description: 'Every letter makes a sound — learn them all!',
    route: '/activity/phonics',
    componentType: 'phonics' as const,
    dataSource: 'phonics',
    navigationMode: 'sequential' as const,
    layout: 'single-column' as const,
    voiceEnabled: true,
  },
  {
    id: 'blend-words',
    title: 'Blend Words',
    category: 'Early Reading',
    icon: '🔗',
    description: 'Put letters together to build words — cat, dog, sun!',
    route: '/activity/blend-words',
    componentType: 'cvc-words' as const,
    dataSource: 'cvc',
    navigationMode: 'sequential' as const,
    layout: 'single-column' as const,
    voiceEnabled: true,
  },
  {
    id: 'read-sentences',
    title: 'Read Sentences',
    category: 'Early Reading',
    icon: '📖',
    description: 'Follow along as simple sentences are read aloud!',
    route: '/activity/read-sentences',
    componentType: 'sentence-reader' as const,
    dataSource: 'sentences',
    navigationMode: 'sequential' as const,
    layout: 'single-column' as const,
    voiceEnabled: true,
  },
  {
    id: 'story-time',
    title: 'Story Time',
    category: 'Early Reading',
    icon: '📚',
    description: 'Short illustrated stories to read and enjoy!',
    route: '/activity/story-time',
    componentType: 'story-time' as const,
    dataSource: 'stories',
    navigationMode: 'sequential' as const,
    layout: 'single-column' as const,
    voiceEnabled: true,
  },

  // ── New: Emotions & Feelings ──
  {
    id: 'emotions',
    title: 'Emotions & Feelings',
    category: 'Learn Basics',
    icon: '😄',
    description: 'Happy, sad, angry, scared — learn all your feelings!',
    route: '/activity/emotions',
    componentType: 'emotions' as const,
    dataSource: 'emotions',
    navigationMode: 'sequential' as const,
    layout: 'two-column' as const,
    voiceEnabled: true,
  },
  // ── New: Weather ──
  {
    id: 'weather',
    title: 'Weather',
    category: 'Learn Things Around Us',
    icon: '🌤️',
    description: 'Sunny, rainy, snowy — learn all about the weather!',
    route: '/activity/weather',
    componentType: 'weather' as const,
    dataSource: 'weather',
    navigationMode: 'sequential' as const,
    layout: 'two-column' as const,
    voiceEnabled: true,
  },
  // ── New: My Family ──
  {
    id: 'my-family',
    title: 'My Family',
    category: 'Learn Things Around Us',
    icon: '👨‍👩‍👧',
    description: 'Mum, dad, grandma, grandpa — meet the whole family!',
    route: '/activity/my-family',
    componentType: 'family' as const,
    dataSource: 'family',
    navigationMode: 'sequential' as const,
    layout: 'two-column' as const,
    voiceEnabled: true,
  },
  // ── New: Daily Routines ──
  {
    id: 'daily-routines',
    title: 'Daily Routines',
    category: 'Learn Basics',
    icon: '🌅',
    description: 'Brush teeth, eat breakfast, wash hands — daily habits!',
    route: '/activity/daily-routines',
    componentType: 'routines' as const,
    dataSource: 'routines',
    navigationMode: 'sequential' as const,
    layout: 'two-column' as const,
    voiceEnabled: true,
  },
  // ── New: Colours in Nature ──
  {
    id: 'nature-colors',
    title: 'Colours in Nature',
    category: 'Learn Things Around Us',
    icon: '🌈',
    description: 'Find every colour hiding in the natural world!',
    route: '/activity/nature-colors',
    componentType: 'nature-colors' as const,
    dataSource: 'nature',
    navigationMode: 'sequential' as const,
    layout: 'two-column' as const,
    voiceEnabled: true,
  },

  // ── Five Senses ──
  {
    id: 'five-senses',
    title: 'The Five Senses',
    category: 'Learn Basics',
    icon: '👁️',
    description: 'See, hear, touch, taste, smell — discover your five senses!',
    route: '/activity/five-senses',
    componentType: 'senses' as const,
    dataSource: 'senses',
    navigationMode: 'sequential' as const,
    layout: 'two-column' as const,
    voiceEnabled: true,
  },
  // ── Directions ──
  {
    id: 'directions',
    title: 'Directions & Positions',
    category: 'Learn Basics',
    icon: '🧭',
    description: 'Left, right, up, down, beside, between — find your way!',
    route: '/activity/directions',
    componentType: 'directions' as const,
    dataSource: 'directions',
    navigationMode: 'sequential' as const,
    layout: 'two-column' as const,
    voiceEnabled: true,
  },
  // ── Sizes & Comparisons ──
  {
    id: 'sizes',
    title: 'Big, Bigger, Biggest!',
    category: 'Learn Basics',
    icon: '📏',
    description: 'Compare sizes, heights, speeds, and more!',
    route: '/activity/sizes',
    componentType: 'sizes' as const,
    dataSource: 'sizes',
    navigationMode: 'sequential' as const,
    layout: 'two-column' as const,
    voiceEnabled: true,
  },
  // ── Healthy Eating ──
  {
    id: 'healthy-eating',
    title: 'Healthy Eating',
    category: 'Learn Basics',
    icon: '🥗',
    description: 'Learn about food groups and why healthy food keeps you strong!',
    route: '/activity/healthy-eating',
    componentType: 'healthy-eating' as const,
    dataSource: 'food',
    navigationMode: 'sequential' as const,
    layout: 'two-column' as const,
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
  { name: 'Mathematics', icon: '🔢', color: '#22C55E' },
  { name: 'Early Reading', icon: '📗', color: '#F59E0B' },
];

export function getActivityById(id: string): ActivityConfig | undefined {
  return activities.find((a) => a.id === id);
}

export function getActivitiesByCategory(category: string): ActivityConfig[] {
  return activities.filter((a) => a.category === category);
}

// ─── Opposites ───────────────────────────────────────────────────────────────
export interface OppositePair {
  id: string;
  word1: string;
  word2: string;
  emoji1: string;
  emoji2: string;
  example1: string;
  example2: string;
  audioText: string;
}

export const oppositesData: OppositePair[] = [
  { id: 'big-small', word1: 'Big', word2: 'Small', emoji1: '🐘', emoji2: '🐭', example1: 'An elephant is big', example2: 'A mouse is small', audioText: 'Big and Small are opposites!' },
  { id: 'hot-cold', word1: 'Hot', word2: 'Cold', emoji1: '🔥', emoji2: '🧊', example1: 'Fire is hot', example2: 'Ice is cold', audioText: 'Hot and Cold are opposites!' },
  { id: 'fast-slow', word1: 'Fast', word2: 'Slow', emoji1: '🐆', emoji2: '🐢', example1: 'A cheetah is fast', example2: 'A tortoise is slow', audioText: 'Fast and Slow are opposites!' },
  { id: 'up-down', word1: 'Up', word2: 'Down', emoji1: '⬆️', emoji2: '⬇️', example1: 'The bird flies up', example2: 'The ball falls down', audioText: 'Up and Down are opposites!' },
  { id: 'day-night', word1: 'Day', word2: 'Night', emoji1: '☀️', emoji2: '🌙', example1: 'The sun shines in the day', example2: 'Stars come out at night', audioText: 'Day and Night are opposites!' },
  { id: 'happy-sad', word1: 'Happy', word2: 'Sad', emoji1: '😄', emoji2: '😢', example1: 'Laughing makes you happy', example2: 'Crying means you feel sad', audioText: 'Happy and Sad are opposites!' },
  { id: 'open-closed', word1: 'Open', word2: 'Closed', emoji1: '🚪', emoji2: '🔒', example1: 'The door is open', example2: 'The door is closed', audioText: 'Open and Closed are opposites!' },
  { id: 'wet-dry', word1: 'Wet', word2: 'Dry', emoji1: '💧', emoji2: '🌵', example1: 'Rain makes things wet', example2: 'The desert is very dry', audioText: 'Wet and Dry are opposites!' },
  { id: 'tall-short', word1: 'Tall', word2: 'Short', emoji1: '🦒', emoji2: '🐓', example1: 'A giraffe is very tall', example2: 'A chicken is quite short', audioText: 'Tall and Short are opposites!' },
  { id: 'full-empty', word1: 'Full', word2: 'Empty', emoji1: '🍱', emoji2: '🫙', example1: 'A full lunchbox has food', example2: 'An empty jar has nothing', audioText: 'Full and Empty are opposites!' },
  { id: 'soft-hard', word1: 'Soft', word2: 'Hard', emoji1: '🧸', emoji2: '🪨', example1: 'A teddy bear is soft', example2: 'A rock is hard', audioText: 'Soft and Hard are opposites!' },
  { id: 'clean-dirty', word1: 'Clean', word2: 'Dirty', emoji1: '✨', emoji2: '🌫️', example1: 'A clean shirt is fresh', example2: 'Muddy boots are dirty', audioText: 'Clean and Dirty are opposites!' },
  { id: 'loud-quiet', word1: 'Loud', word2: 'Quiet', emoji1: '📢', emoji2: '🤫', example1: 'A drum is very loud', example2: 'A library is quiet', audioText: 'Loud and Quiet are opposites!' },
  { id: 'old-new', word1: 'Old', word2: 'New', emoji1: '📜', emoji2: '✨', example1: 'Ancient ruins are old', example2: 'A brand new toy is new', audioText: 'Old and New are opposites!' },
  { id: 'inside-outside', word1: 'Inside', word2: 'Outside', emoji1: '🏠', emoji2: '🌳', example1: 'You sleep inside', example2: 'You play outside', audioText: 'Inside and Outside are opposites!' },
  { id: 'light-dark', word1: 'Light', word2: 'Dark', emoji1: '💡', emoji2: '🌑', example1: 'A lamp makes things light', example2: 'A dark room has no light', audioText: 'Light and Dark are opposites!' },
  { id: 'heavy-light2', word1: 'Heavy', word2: 'Light', emoji1: '🏋️', emoji2: '🪶', example1: 'A dumbbell is heavy', example2: 'A feather is light', audioText: 'Heavy and Light are opposites!' },
  { id: 'start-stop', word1: 'Start', word2: 'Stop', emoji1: '🟢', emoji2: '🔴', example1: 'Green means start going', example2: 'Red means stop', audioText: 'Start and Stop are opposites!' },
];

// ─── Math: Addition ───────────────────────────────────────────────────────────
export interface MathQuestion {
  id: string;
  n1: number;
  n2: number;
  operator: '+' | '-' | '>' | '<' | '=';
  answer: number;
  emoji1: string;
  emoji2: string;
  audioText: string;
}

const MATH_EMOJIS = ['⭐', '🍎', '🎈', '🌸', '🐟', '🎾', '🍪', '🌙', '🦋', '❤️'];

export const additionData: MathQuestion[] = Array.from({ length: 36 }, (_, i) => {
  const n1 = Math.floor(i / 6) + 1;
  const n2 = (i % 6) + 1;
  return {
    id: `add-${n1}-${n2}`,
    n1, n2,
    operator: '+' as const,
    answer: n1 + n2,
    emoji1: MATH_EMOJIS[n1 % MATH_EMOJIS.length],
    emoji2: MATH_EMOJIS[(n2 + 3) % MATH_EMOJIS.length],
    audioText: `What is ${n1} plus ${n2}?`,
  };
}).filter(q => q.answer <= 10); // keep it to sums up to 10 for young learners

export const subtractionData: MathQuestion[] = [];
for (let total = 2; total <= 10; total++) {
  for (let take = 1; take < total; take++) {
    subtractionData.push({
      id: `sub-${total}-${take}`,
      n1: total, n2: take,
      operator: '-' as const,
      answer: total - take,
      emoji1: MATH_EMOJIS[total % MATH_EMOJIS.length],
      emoji2: MATH_EMOJIS[(take + 2) % MATH_EMOJIS.length],
      audioText: `What is ${total} minus ${take}?`,
    });
  }
}

// ─── Math: Compare (more/fewer) ───────────────────────────────────────────────
export interface CompareQuestion {
  id: string;
  left: number;
  right: number;
  leftEmoji: string;
  rightEmoji: string;
  correct: 'left' | 'right' | 'equal';
  audioText: string;
}

export const compareData: CompareQuestion[] = [
  { id: 'c1', left: 3, right: 5, leftEmoji: '🍎', rightEmoji: '🍊', correct: 'right', audioText: 'Which group has more?' },
  { id: 'c2', left: 7, right: 4, leftEmoji: '⭐', rightEmoji: '🌸', correct: 'left', audioText: 'Which group has more?' },
  { id: 'c3', left: 2, right: 2, leftEmoji: '🐟', rightEmoji: '🐟', correct: 'equal', audioText: 'Are these groups equal?' },
  { id: 'c4', left: 6, right: 3, leftEmoji: '🎈', rightEmoji: '🎾', correct: 'left', audioText: 'Which group has more?' },
  { id: 'c5', left: 1, right: 4, leftEmoji: '🍪', rightEmoji: '🌙', correct: 'right', audioText: 'Which group has more?' },
  { id: 'c6', left: 5, right: 8, leftEmoji: '🦋', rightEmoji: '❤️', correct: 'right', audioText: 'Which group has more?' },
  { id: 'c7', left: 9, right: 6, leftEmoji: '🍎', rightEmoji: '⭐', correct: 'left', audioText: 'Which group has more?' },
  { id: 'c8', left: 4, right: 4, leftEmoji: '🎈', rightEmoji: '🐟', correct: 'equal', audioText: 'Are these groups equal?' },
  { id: 'c9', left: 3, right: 7, leftEmoji: '🍪', rightEmoji: '🌸', correct: 'right', audioText: 'Which group has more?' },
  { id: 'c10', left: 8, right: 2, leftEmoji: '🎾', rightEmoji: '🌙', correct: 'left', audioText: 'Which group has more?' },
];

// ─── Math: Shapes in the Real World ──────────────────────────────────────────
export interface ShapeSpotQuestion {
  id: string;
  targetShape: string;
  targetEmoji: string;
  options: Array<{ name: string; emoji: string; isTarget: boolean }>;
  audioText: string;
}

export const shapeSpotData: ShapeSpotQuestion[] = [
  {
    id: 'ss1', targetShape: 'circle', targetEmoji: '⭕',
    options: [
      { name: 'Clock', emoji: '🕐', isTarget: true },
      { name: 'Door', emoji: '🚪', isTarget: false },
      { name: 'Book', emoji: '📚', isTarget: false },
      { name: 'Coin', emoji: '🪙', isTarget: true },
    ],
    audioText: 'Which of these is a circle shape?',
  },
  {
    id: 'ss2', targetShape: 'rectangle', targetEmoji: '▬',
    options: [
      { name: 'Ball', emoji: '⚽', isTarget: false },
      { name: 'Book', emoji: '📖', isTarget: true },
      { name: 'Orange', emoji: '🍊', isTarget: false },
      { name: 'Door', emoji: '🚪', isTarget: true },
    ],
    audioText: 'Which of these is a rectangle shape?',
  },
  {
    id: 'ss3', targetShape: 'triangle', targetEmoji: '🔺',
    options: [
      { name: 'Pizza slice', emoji: '🍕', isTarget: true },
      { name: 'Wheel', emoji: '🎡', isTarget: false },
      { name: 'Window', emoji: '🪟', isTarget: false },
      { name: 'Yield sign', emoji: '⚠️', isTarget: true },
    ],
    audioText: 'Which of these is a triangle shape?',
  },
  {
    id: 'ss4', targetShape: 'star', targetEmoji: '⭐',
    options: [
      { name: 'Badge', emoji: '🏅', isTarget: true },
      { name: 'Football', emoji: '⚽', isTarget: false },
      { name: 'Star shape', emoji: '⭐', isTarget: true },
      { name: 'Cube', emoji: '🎲', isTarget: false },
    ],
    audioText: 'Which of these is a star shape?',
  },
];

// ─── Math: Simple Patterns ────────────────────────────────────────────────────
export interface PatternQuestion {
  id: string;
  sequence: string[];    // emojis shown
  answer: string;        // the next one
  options: string[];     // all 4 choices
  audioText: string;
  hint: string;
}

export const patternData: PatternQuestion[] = [
  { id: 'p1', sequence: ['🍎','🍌','🍎','🍌','🍎'], answer: '🍌', options: ['🍌','🍊','🍇','🍓'], audioText: 'What comes next in the pattern?', hint: 'Apple, Banana, Apple, Banana...' },
  { id: 'p2', sequence: ['⭐','⭐','🌙','⭐','⭐'], answer: '🌙', options: ['⭐','🌙','☀️','❤️'], audioText: 'What comes next?', hint: 'Star, Star, Moon...' },
  { id: 'p3', sequence: ['🔴','🔵','🔴','🔵','🔴'], answer: '🔵', options: ['🔴','🔵','🟡','🟢'], audioText: 'What comes next?', hint: 'Red, Blue, Red, Blue...' },
  { id: 'p4', sequence: ['🐱','🐶','🐱','🐶','🐱'], answer: '🐶', options: ['🐱','🐶','🐸','🐰'], audioText: 'What comes next?', hint: 'Cat, Dog, Cat, Dog...' },
  { id: 'p5', sequence: ['1️⃣','2️⃣','3️⃣','1️⃣','2️⃣'], answer: '3️⃣', options: ['1️⃣','2️⃣','3️⃣','4️⃣'], audioText: 'What comes next?', hint: 'One, Two, Three, One, Two...' },
  { id: 'p6', sequence: ['🌸','🌸','🌻','🌸','🌸'], answer: '🌻', options: ['🌸','🌻','🌹','🌼'], audioText: 'What comes next?', hint: 'Blossom, Blossom, Sunflower...' },
  { id: 'p7', sequence: ['🔺','⬛','🔺','⬛','🔺'], answer: '⬛', options: ['🔺','⬛','⭕','🔷'], audioText: 'What comes next?', hint: 'Triangle, Square, Triangle, Square...' },
  { id: 'p8', sequence: ['🐸','🐸','🐸','🦋','🐸'], answer: '🐸', options: ['🐸','🦋','🐝','🐞'], audioText: 'What comes next?', hint: 'Three frogs then a butterfly...' },
  { id: 'p9', sequence: ['☀️','🌤️','⛅','🌧️','☀️'], answer: '🌤️', options: ['☀️','🌤️','⛅','🌧️'], audioText: 'What comes next?', hint: 'Watch the weather pattern!' },
  { id: 'p10', sequence: ['1️⃣','3️⃣','5️⃣','7️⃣'], answer: '9️⃣', options: ['8️⃣','9️⃣','6️⃣','🔟'], audioText: 'What comes next? Count by 2!', hint: 'Odd numbers: 1, 3, 5, 7...' },
];

// ─── Math: Telling Time ────────────────────────────────────────────────────────
export interface TimeQuestion {
  id: string;
  hours: number;
  minutes: 0 | 30;
  displayTime: string;
  question: string;
  options: string[];
  audioText: string;
}

export const timeData: TimeQuestion[] = [
  { id: 't1', hours: 1, minutes: 0, displayTime: '1:00', question: 'What time is it?', options: ['1 o\'clock', '2 o\'clock', '3 o\'clock', '6 o\'clock'], audioText: 'What time does the clock show?' },
  { id: 't2', hours: 3, minutes: 0, displayTime: '3:00', question: 'What time is it?', options: ['2 o\'clock', '3 o\'clock', '4 o\'clock', '9 o\'clock'], audioText: 'What time does the clock show?' },
  { id: 't3', hours: 6, minutes: 0, displayTime: '6:00', question: 'What time is it?', options: ['5 o\'clock', '6 o\'clock', '7 o\'clock', '12 o\'clock'], audioText: 'What time does the clock show?' },
  { id: 't4', hours: 12, minutes: 0, displayTime: '12:00', question: 'What time is it?', options: ['10 o\'clock', '11 o\'clock', '12 o\'clock', '1 o\'clock'], audioText: 'What time does the clock show?' },
  { id: 't5', hours: 2, minutes: 30, displayTime: '2:30', question: 'What time is it?', options: ['2 o\'clock', 'half past 2', 'half past 3', '3 o\'clock'], audioText: 'What time does the clock show?' },
  { id: 't6', hours: 5, minutes: 30, displayTime: '5:30', question: 'What time is it?', options: ['half past 4', 'half past 5', 'half past 6', '5 o\'clock'], audioText: 'What time does the clock show?' },
  { id: 't7', hours: 9, minutes: 0, displayTime: '9:00', question: 'What time is it?', options: ['8 o\'clock', '9 o\'clock', '10 o\'clock', '6 o\'clock'], audioText: 'What time does the clock show?' },
  { id: 't8', hours: 7, minutes: 30, displayTime: '7:30', question: 'What time is it?', options: ['half past 6', 'half past 7', 'half past 8', '7 o\'clock'], audioText: 'What time does the clock show?' },
];

// ─── Phonics: Letter Sounds ────────────────────────────────────────────────────
export interface PhonicsItem {
  id: string;
  letter: string;
  sound: string;        // how to describe the sound
  soundWord: string;    // e.g. "sss like snake"
  words: string[];      // 3 example words
  emojis: string[];
  audioText: string;
}

export const phonicsData: PhonicsItem[] = [
  { id: 'ph-s', letter: 'S', sound: 'sss', soundWord: 'like a snake hissing!', words: ['sun', 'sock', 'sea'], emojis: ['☀️','🧦','🌊'], audioText: 'S makes the hissing sound. Listen: sun, sock, sea — they all start with S!' },
  { id: 'ph-a', letter: 'A', sound: 'a', soundWord: 'short a, like in apple!', words: ['ant', 'apple', 'axe'], emojis: ['🐜','🍎','🪓'], audioText: 'A makes the short sound at the start of apple. Ant, apple, axe — all begin with A!' },
  { id: 'ph-t', letter: 'T', sound: 'ttt', soundWord: 'like a dripping tap!', words: ['top', 'tap', 'ten'], emojis: ['🎵','🚰','🔟'], audioText: 'T makes a sharp tapping sound. Top, tap, ten — they all begin with T!' },
  { id: 'ph-i', letter: 'I', sound: 'i', soundWord: 'short i, like in igloo!', words: ['itch', 'ink', 'ill'], emojis: ['🏠','✒️','🤒'], audioText: 'I makes the short sound at the start of igloo. Itch, ink, ill — all start with I!' },
  { id: 'ph-p', letter: 'P', sound: 'ppp', soundWord: 'like a popping sound!', words: ['pig', 'pen', 'pin'], emojis: ['🐷','🖊️','📌'], audioText: 'P makes a popping sound. Pig, pen, pin — they all start with P!' },
  { id: 'ph-n', letter: 'N', sound: 'nnn', soundWord: 'like a humming nose!', words: ['net', 'nap', 'nut'], emojis: ['🥅','😴','🥜'], audioText: 'N makes a humming nasal sound. Net, nap, nut — all begin with N!' },
  { id: 'ph-m', letter: 'M', sound: 'mmm', soundWord: 'like saying yummy!', words: ['map', 'mud', 'men'], emojis: ['🗺️','🪣','👨'], audioText: 'M makes a humming lip sound, like yummy. Map, mud, men — all begin with M!' },
  { id: 'ph-d', letter: 'D', sound: 'ddd', soundWord: 'like beating a drum!', words: ['dog', 'dig', 'dip'], emojis: ['🐶','⛏️','🍦'], audioText: 'D makes a drumming sound. Dog, dig, dip — they all start with D!' },
  { id: 'ph-g', letter: 'G', sound: 'ggg', soundWord: 'like a gentle growl!', words: ['get', 'gap', 'gum'], emojis: ['🎯','🕳️','🍬'], audioText: 'G makes a growling sound at the back of the throat. Get, gap, gum — all begin with G!' },
  { id: 'ph-o', letter: 'O', sound: 'o', soundWord: 'short o, like in octopus!', words: ['ox', 'off', 'odd'], emojis: ['🐂','💡','🔢'], audioText: 'O makes the short round sound at the start of octopus. Ox, off, odd — all begin with O!' },
  { id: 'ph-c', letter: 'C', sound: 'k', soundWord: 'like a clicking sound!', words: ['cat', 'cup', 'cod'], emojis: ['🐱','☕','🐟'], audioText: 'C makes a clicking sound at the back of the mouth. Cat, cup, cod — all begin with C!' },
  { id: 'ph-k', letter: 'K', sound: 'k', soundWord: 'like a kicking sound!', words: ['kit', 'kid', 'ken'], emojis: ['🧰','👦','🔑'], audioText: 'K makes the same clicking sound as C. Kit, kid, key — all begin with K!' },
  { id: 'ph-e', letter: 'E', sound: 'e', soundWord: 'short e, like in egg!', words: ['egg', 'end', 'elf'], emojis: ['🥚','🔚','🧝'], audioText: 'E makes the short sound at the start of egg. Egg, end, elf — all begin with E!' },
  { id: 'ph-u', letter: 'U', sound: 'u', soundWord: 'short u, like in umbrella!', words: ['up', 'us', 'urn'], emojis: ['⬆️','👥','🏺'], audioText: 'U makes the short sound at the start of umbrella. Up, us, urn — all begin with U!' },
  { id: 'ph-r', letter: 'R', sound: 'rrr', soundWord: 'like a rolling growl!', words: ['rat', 'run', 'rug'], emojis: ['🐀','🏃','🪣'], audioText: 'R makes a rolling sound. Rat, run, rug — they all begin with R!' },
  { id: 'ph-h', letter: 'H', sound: 'h', soundWord: 'like breathing out hard!', words: ['hat', 'hop', 'hen'], emojis: ['🎩','🐰','🐔'], audioText: 'H sounds like a puff of breath. Hat, hop, hen — they all start with H!' },
  { id: 'ph-b', letter: 'B', sound: 'bbb', soundWord: 'like a bouncing buzz!', words: ['bat', 'big', 'bed'], emojis: ['🦇','⬆️','🛏️'], audioText: 'B makes a bouncing buzz sound with your lips. Bat, big, bed — all begin with B!' },
  { id: 'ph-f', letter: 'F', sound: 'fff', soundWord: 'like air fizzing out!', words: ['fan', 'fit', 'fog'], emojis: ['🌀','💪','🌫️'], audioText: 'F sounds like air fizzing through your teeth. Fan, fit, fog — all begin with F!' },
  { id: 'ph-l', letter: 'L', sound: 'lll', soundWord: 'like singing la la la!', words: ['log', 'leg', 'lip'], emojis: ['🪵','🦵','👄'], audioText: 'L makes a smooth singing sound. Log, leg, lip — they all begin with L!' },
  { id: 'ph-j', letter: 'J', sound: 'jjj', soundWord: 'like the start of jump!', words: ['jug', 'jet', 'job'], emojis: ['🫙','✈️','💼'], audioText: 'J makes a jumping buzzy sound. Jug, jet, job — all begin with J!' },
  { id: 'ph-v', letter: 'V', sound: 'vvv', soundWord: 'like a vroom engine!', words: ['van', 'vet', 'vow'], emojis: ['🚐','🩺','💍'], audioText: 'V makes a vibrating sound like a revving engine. Van, vet, vow — all begin with V!' },
  { id: 'ph-w', letter: 'W', sound: 'www', soundWord: 'like wind whooshing!', words: ['web', 'win', 'wet'], emojis: ['🕸️','🏆','💧'], audioText: 'W sounds like the wind whooshing. Web, win, wet — they all begin with W!' },
  { id: 'ph-x', letter: 'X', sound: 'ks', soundWord: 'like the end of fox!', words: ['fox', 'box', 'wax'], emojis: ['🦊','📦','🕯️'], audioText: 'X makes a sound like the end of fox. Fox, box, wax — they all end with X!' },
  { id: 'ph-y', letter: 'Y', sound: 'y', soundWord: 'like the start of yes!', words: ['yam', 'yet', 'yap'], emojis: ['🍠','✅','💬'], audioText: 'Y makes a quick gliding sound at the start of yes. Yam, yet, yap — all begin with Y!' },
  { id: 'ph-z', letter: 'Z', sound: 'zzz', soundWord: 'like a buzzing bee!', words: ['zip', 'zoo', 'zap'], emojis: ['🤐','🦁','⚡'], audioText: 'Z makes a buzzing sound like a bee. Zip, zoo, zap — they all begin with Z!' },
  { id: 'ph-qu', letter: 'QU', sound: 'kw', soundWord: 'like the start of queen!', words: ['quiz', 'quit', 'quilt'], emojis: ['❓','🚪','🛌'], audioText: 'Q and U together make the sound at the start of queen. Quiz, quit, quilt — all begin with QU!' },
];

// ─── Reading: CVC Words ────────────────────────────────────────────────────────
export interface CVCWord {
  id: string;
  word: string;
  emoji: string;
  breakdown: [string, string, string];
  audioText: string;
  sentence: string;
}

export const cvcWordsData: CVCWord[] = [
  // -at family
  { id: 'cat', word: 'cat', emoji: '🐱', breakdown: ['c','a','t'], audioText: 'c-a-t, cat!', sentence: 'The cat sat on the mat.' },
  { id: 'bat', word: 'bat', emoji: '🦇', breakdown: ['b','a','t'], audioText: 'b-a-t, bat!', sentence: 'The bat flew at night.' },
  { id: 'hat', word: 'hat', emoji: '🎩', breakdown: ['h','a','t'], audioText: 'h-a-t, hat!', sentence: 'Put the hat on your head.' },
  { id: 'mat', word: 'mat', emoji: '🟫', breakdown: ['m','a','t'], audioText: 'm-a-t, mat!', sentence: 'Wipe your feet on the mat.' },
  { id: 'rat', word: 'rat', emoji: '🐀', breakdown: ['r','a','t'], audioText: 'r-a-t, rat!', sentence: 'The rat ran under the bed.' },
  { id: 'sat', word: 'sat', emoji: '🪑', breakdown: ['s','a','t'], audioText: 's-a-t, sat!', sentence: 'I sat on the chair.' },
  { id: 'fat', word: 'fat', emoji: '🐷', breakdown: ['f','a','t'], audioText: 'f-a-t, fat!', sentence: 'The fat pig sat in the mud.' },
  { id: 'pat', word: 'pat', emoji: '🤲', breakdown: ['p','a','t'], audioText: 'p-a-t, pat!', sentence: 'Pat the dog on the head.' },
  // -an family
  { id: 'can', word: 'can', emoji: '🥫', breakdown: ['c','a','n'], audioText: 'c-a-n, can!', sentence: 'Open the can of beans.' },
  { id: 'fan', word: 'fan', emoji: '🌀', breakdown: ['f','a','n'], audioText: 'f-a-n, fan!', sentence: 'The fan keeps me cool.' },
  { id: 'man', word: 'man', emoji: '👨', breakdown: ['m','a','n'], audioText: 'm-a-n, man!', sentence: 'The man ran to the bus.' },
  { id: 'pan', word: 'pan', emoji: '🍳', breakdown: ['p','a','n'], audioText: 'p-a-n, pan!', sentence: 'Cook eggs in the pan.' },
  { id: 'ran', word: 'ran', emoji: '🏃', breakdown: ['r','a','n'], audioText: 'r-a-n, ran!', sentence: 'She ran to the park.' },
  { id: 'van', word: 'van', emoji: '🚐', breakdown: ['v','a','n'], audioText: 'v-a-n, van!', sentence: 'We rode in the big van.' },
  { id: 'ban', word: 'ban', emoji: '🚫', breakdown: ['b','a','n'], audioText: 'b-a-n, ban!', sentence: 'Ban the bad germs away.' },
  // -ap family
  { id: 'cap', word: 'cap', emoji: '🧢', breakdown: ['c','a','p'], audioText: 'c-a-p, cap!', sentence: 'I wear my cap in the sun.' },
  { id: 'map', word: 'map', emoji: '🗺️', breakdown: ['m','a','p'], audioText: 'm-a-p, map!', sentence: 'Look at the map to find the way.' },
  { id: 'nap', word: 'nap', emoji: '😴', breakdown: ['n','a','p'], audioText: 'n-a-p, nap!', sentence: 'The baby had a nap.' },
  { id: 'rap', word: 'rap', emoji: '🎤', breakdown: ['r','a','p'], audioText: 'r-a-p, rap!', sentence: 'Rap on the door.' },
  { id: 'tap', word: 'tap', emoji: '🚰', breakdown: ['t','a','p'], audioText: 't-a-p, tap!', sentence: 'Turn on the tap for water.' },
  { id: 'zap', word: 'zap', emoji: '⚡', breakdown: ['z','a','p'], audioText: 'z-a-p, zap!', sentence: 'Zap! The lightning flashed.' },
  // -ig family
  { id: 'big', word: 'big', emoji: '🐘', breakdown: ['b','i','g'], audioText: 'b-i-g, big!', sentence: 'The elephant is big.' },
  { id: 'dig', word: 'dig', emoji: '⛏️', breakdown: ['d','i','g'], audioText: 'd-i-g, dig!', sentence: 'Dig a hole in the sand.' },
  { id: 'pig', word: 'pig', emoji: '🐷', breakdown: ['p','i','g'], audioText: 'p-i-g, pig!', sentence: 'The pig is pink and fat.' },
  { id: 'wig', word: 'wig', emoji: '💇', breakdown: ['w','i','g'], audioText: 'w-i-g, wig!', sentence: 'The clown wears a big wig.' },
  { id: 'jig', word: 'jig', emoji: '💃', breakdown: ['j','i','g'], audioText: 'j-i-g, jig!', sentence: 'Dance a little jig!' },
  { id: 'fig', word: 'fig', emoji: '🍈', breakdown: ['f','i','g'], audioText: 'f-i-g, fig!', sentence: 'A fig is a sweet fruit.' },
  // -in family
  { id: 'bin', word: 'bin', emoji: '🗑️', breakdown: ['b','i','n'], audioText: 'b-i-n, bin!', sentence: 'Put it in the bin.' },
  { id: 'fin', word: 'fin', emoji: '🦈', breakdown: ['f','i','n'], audioText: 'f-i-n, fin!', sentence: 'A shark has a big fin.' },
  { id: 'pin', word: 'pin', emoji: '📌', breakdown: ['p','i','n'], audioText: 'p-i-n, pin!', sentence: 'Pin the note to the board.' },
  { id: 'tin', word: 'tin', emoji: '🥫', breakdown: ['t','i','n'], audioText: 't-i-n, tin!', sentence: 'Beans come in a tin.' },
  { id: 'win', word: 'win', emoji: '🏆', breakdown: ['w','i','n'], audioText: 'w-i-n, win!', sentence: 'I want to win the race!' },
  { id: 'kin', word: 'kin', emoji: '👨‍👩‍👧', breakdown: ['k','i','n'], audioText: 'k-i-n, kin!', sentence: 'My kin are my family.' },
  // -ip family
  { id: 'dip', word: 'dip', emoji: '🫙', breakdown: ['d','i','p'], audioText: 'd-i-p, dip!', sentence: 'Dip the bread in the soup.' },
  { id: 'hip', word: 'hip', emoji: '🕺', breakdown: ['h','i','p'], audioText: 'h-i-p, hip!', sentence: 'Shake your hip and dance.' },
  { id: 'lip', word: 'lip', emoji: '👄', breakdown: ['l','i','p'], audioText: 'l-i-p, lip!', sentence: 'Put balm on your dry lip.' },
  { id: 'rip', word: 'rip', emoji: '😬', breakdown: ['r','i','p'], audioText: 'r-i-p, rip!', sentence: 'Do not rip the paper.' },
  { id: 'sip', word: 'sip', emoji: '🥤', breakdown: ['s','i','p'], audioText: 's-i-p, sip!', sentence: 'Take a small sip of juice.' },
  { id: 'tip', word: 'tip', emoji: '☝️', breakdown: ['t','i','p'], audioText: 't-i-p, tip!', sentence: 'The tip of the pencil is sharp.' },
  // -og family
  { id: 'dog', word: 'dog', emoji: '🐶', breakdown: ['d','o','g'], audioText: 'd-o-g, dog!', sentence: 'My dog loves to run.' },
  { id: 'fog', word: 'fog', emoji: '🌫️', breakdown: ['f','o','g'], audioText: 'f-o-g, fog!', sentence: 'The fog made it hard to see.' },
  { id: 'hog', word: 'hog', emoji: '🐗', breakdown: ['h','o','g'], audioText: 'h-o-g, hog!', sentence: 'The hog ate all the food.' },
  { id: 'log', word: 'log', emoji: '🪵', breakdown: ['l','o','g'], audioText: 'l-o-g, log!', sentence: 'Sit on the log in the park.' },
  { id: 'jog', word: 'jog', emoji: '🏃', breakdown: ['j','o','g'], audioText: 'j-o-g, jog!', sentence: 'I jog in the park each morning.' },
  { id: 'bog', word: 'bog', emoji: '🌿', breakdown: ['b','o','g'], audioText: 'b-o-g, bog!', sentence: 'The frog sat in the bog.' },
  // -op family
  { id: 'hop', word: 'hop', emoji: '🐸', breakdown: ['h','o','p'], audioText: 'h-o-p, hop!', sentence: 'Frogs can hop very far.' },
  { id: 'mop', word: 'mop', emoji: '🧹', breakdown: ['m','o','p'], audioText: 'm-o-p, mop!', sentence: 'Mop up the water spill.' },
  { id: 'top', word: 'top', emoji: '🌀', breakdown: ['t','o','p'], audioText: 't-o-p, top!', sentence: 'Spin the top around.' },
  { id: 'pop', word: 'pop', emoji: '🎈', breakdown: ['p','o','p'], audioText: 'p-o-p, pop!', sentence: 'Pop the balloon!' },
  { id: 'cop', word: 'cop', emoji: '👮', breakdown: ['c','o','p'], audioText: 'c-o-p, cop!', sentence: 'The cop keeps us safe.' },
  { id: 'bop', word: 'bop', emoji: '🥊', breakdown: ['b','o','p'], audioText: 'b-o-p, bop!', sentence: 'Bop to the music!' },
  // -un family
  { id: 'bun', word: 'bun', emoji: '🍔', breakdown: ['b','u','n'], audioText: 'b-u-n, bun!', sentence: 'A burger goes in a bun.' },
  { id: 'fun', word: 'fun', emoji: '🎉', breakdown: ['f','u','n'], audioText: 'f-u-n, fun!', sentence: 'Playing is so much fun!' },
  { id: 'run', word: 'run', emoji: '🏃', breakdown: ['r','u','n'], audioText: 'r-u-n, run!', sentence: 'Run as fast as you can!' },
  { id: 'sun', word: 'sun', emoji: '☀️', breakdown: ['s','u','n'], audioText: 's-u-n, sun!', sentence: 'The sun is bright and warm.' },
  { id: 'gun', word: 'gun', emoji: '💦', breakdown: ['g','u','n'], audioText: 'g-u-n, gun!', sentence: 'A water gun is fun in summer.' },
  { id: 'nun', word: 'nun', emoji: '⛪', breakdown: ['n','u','n'], audioText: 'n-u-n, nun!', sentence: 'A nun lives in a convent.' },
  // -ug family
  { id: 'bug', word: 'bug', emoji: '🐛', breakdown: ['b','u','g'], audioText: 'b-u-g, bug!', sentence: 'A bug crawled on the leaf.' },
  { id: 'hug', word: 'hug', emoji: '🤗', breakdown: ['h','u','g'], audioText: 'h-u-g, hug!', sentence: 'Give me a warm hug.' },
  { id: 'jug', word: 'jug', emoji: '🫙', breakdown: ['j','u','g'], audioText: 'j-u-g, jug!', sentence: 'Fill the jug with water.' },
  { id: 'mug', word: 'mug', emoji: '☕', breakdown: ['m','u','g'], audioText: 'm-u-g, mug!', sentence: 'Drink your cocoa from a mug.' },
  { id: 'rug', word: 'rug', emoji: '🟫', breakdown: ['r','u','g'], audioText: 'r-u-g, rug!', sentence: 'Sit on the soft rug.' },
  { id: 'tug', word: 'tug', emoji: '✊', breakdown: ['t','u','g'], audioText: 't-u-g, tug!', sentence: 'Tug the rope as hard as you can.' },
  // -ut / -up
  { id: 'but', word: 'but', emoji: '🤔', breakdown: ['b','u','t'], audioText: 'b-u-t, but!', sentence: 'I want to play but it is bed time.' },
  { id: 'cut', word: 'cut', emoji: '✂️', breakdown: ['c','u','t'], audioText: 'c-u-t, cut!', sentence: 'Cut the paper with scissors.' },
  { id: 'gut', word: 'gut', emoji: '💪', breakdown: ['g','u','t'], audioText: 'g-u-t, gut!', sentence: 'Have the gut to try something new.' },
  { id: 'hut', word: 'hut', emoji: '🛖', breakdown: ['h','u','t'], audioText: 'h-u-t, hut!', sentence: 'The farmer lives in a little hut.' },
  { id: 'nut', word: 'nut', emoji: '🥜', breakdown: ['n','u','t'], audioText: 'n-u-t, nut!', sentence: 'A squirrel loves to eat a nut.' },
  { id: 'cup', word: 'cup', emoji: '🥤', breakdown: ['c','u','p'], audioText: 'c-u-p, cup!', sentence: 'Drink your juice from a cup.' },
  { id: 'pup', word: 'pup', emoji: '🐶', breakdown: ['p','u','p'], audioText: 'p-u-p, pup!', sentence: 'The little pup wagged its tail.' },
  { id: 'sub', word: 'sub', emoji: '🤿', breakdown: ['s','u','b'], audioText: 's-u-b, sub!', sentence: 'A sub can go under the sea.' },
  // -ed / -et family
  { id: 'bed', word: 'bed', emoji: '🛏️', breakdown: ['b','e','d'], audioText: 'b-e-d, bed!', sentence: 'I sleep in my bed at night.' },
  { id: 'fed', word: 'fed', emoji: '🍼', breakdown: ['f','e','d'], audioText: 'f-e-d, fed!', sentence: 'The baby was fed her milk.' },
  { id: 'red', word: 'red', emoji: '🔴', breakdown: ['r','e','d'], audioText: 'r-e-d, red!', sentence: 'Apples and strawberries are red.' },
  { id: 'wed', word: 'wed', emoji: '💒', breakdown: ['w','e','d'], audioText: 'w-e-d, wed!', sentence: 'They will wed on a sunny day.' },
  { id: 'get', word: 'get', emoji: '🙌', breakdown: ['g','e','t'], audioText: 'g-e-t, get!', sentence: 'Get your coat and let us go.' },
  { id: 'jet', word: 'jet', emoji: '✈️', breakdown: ['j','e','t'], audioText: 'j-e-t, jet!', sentence: 'The jet flew high in the sky.' },
  { id: 'net', word: 'net', emoji: '🥅', breakdown: ['n','e','t'], audioText: 'n-e-t, net!', sentence: 'Catch the butterfly in a net.' },
  { id: 'pet', word: 'pet', emoji: '🐾', breakdown: ['p','e','t'], audioText: 'p-e-t, pet!', sentence: 'My pet rabbit is fluffy.' },
  { id: 'set', word: 'set', emoji: '🎯', breakdown: ['s','e','t'], audioText: 's-e-t, set!', sentence: 'Ready... set... go!' },
  { id: 'wet', word: 'wet', emoji: '💧', breakdown: ['w','e','t'], audioText: 'w-e-t, wet!', sentence: 'The rain made everything wet.' },
  { id: 'met', word: 'met', emoji: '👋', breakdown: ['m','e','t'], audioText: 'm-e-t, met!', sentence: 'I met my best friend at school.' },

  // -ack family
  { id: 'back', word: 'back', emoji: '🔙', breakdown: ['b','a','ck'], audioText: 'b-a-ck, back!', sentence: 'Come back here quickly.' },
  { id: 'hack', word: 'hack', emoji: '🪓', breakdown: ['h','a','ck'], audioText: 'h-a-ck, hack!', sentence: 'Hack through the thick jungle.' },
  { id: 'jack', word: 'jack', emoji: '🃏', breakdown: ['j','a','ck'], audioText: 'j-a-ck, jack!', sentence: 'Jack jumped over the candlestick.' },
  { id: 'pack', word: 'pack', emoji: '🎒', breakdown: ['p','a','ck'], audioText: 'p-a-ck, pack!', sentence: 'Pack your bag for school.' },
  { id: 'rack', word: 'rack', emoji: '🧴', breakdown: ['r','a','ck'], audioText: 'r-a-ck, rack!', sentence: 'Hang your coat on the rack.' },
  { id: 'sack', word: 'sack', emoji: '🛍️', breakdown: ['s','a','ck'], audioText: 's-a-ck, sack!', sentence: 'Santa carries toys in a big sack.' },
  // -ell family
  { id: 'bell', word: 'bell', emoji: '🔔', breakdown: ['b','e','ll'], audioText: 'b-e-ll, bell!', sentence: 'Ring the bell to start class.' },
  { id: 'fell', word: 'fell', emoji: '🍂', breakdown: ['f','e','ll'], audioText: 'f-e-ll, fell!', sentence: 'A leaf fell from the tree.' },
  { id: 'sell', word: 'sell', emoji: '🏪', breakdown: ['s','e','ll'], audioText: 's-e-ll, sell!', sentence: 'They sell ice cream at the park.' },
  { id: 'tell', word: 'tell', emoji: '🗣️', breakdown: ['t','e','ll'], audioText: 't-e-ll, tell!', sentence: 'Tell me a funny story.' },
  { id: 'well', word: 'well', emoji: '🪣', breakdown: ['w','e','ll'], audioText: 'w-e-ll, well!', sentence: 'Drink water from the deep well.' },
  { id: 'yell', word: 'yell', emoji: '📢', breakdown: ['y','e','ll'], audioText: 'y-e-ll, yell!', sentence: 'Do not yell inside the classroom.' },
  // -est family
  { id: 'best', word: 'best', emoji: '🥇', breakdown: ['b','e','st'], audioText: 'b-e-st, best!', sentence: 'You did your best today!' },
  { id: 'nest', word: 'nest', emoji: '🪺', breakdown: ['n','e','st'], audioText: 'n-e-st, nest!', sentence: 'The bird built a cosy nest.' },
  { id: 'rest', word: 'rest', emoji: '😴', breakdown: ['r','e','st'], audioText: 'r-e-st, rest!', sentence: 'Have a rest after lunch.' },
  { id: 'test', word: 'test', emoji: '📝', breakdown: ['t','e','st'], audioText: 't-e-st, test!', sentence: 'The spelling test was easy.' },
  { id: 'vest', word: 'vest', emoji: '🦺', breakdown: ['v','e','st'], audioText: 'v-e-st, vest!', sentence: 'Wear a warm vest in winter.' },
  // -ick family
  { id: 'kick', word: 'kick', emoji: '🦶', breakdown: ['k','i','ck'], audioText: 'k-i-ck, kick!', sentence: 'Kick the ball into the net!' },
  { id: 'lick', word: 'lick', emoji: '🍦', breakdown: ['l','i','ck'], audioText: 'l-i-ck, lick!', sentence: 'Lick the ice cream cone.' },
  { id: 'pick', word: 'pick', emoji: '✋', breakdown: ['p','i','ck'], audioText: 'p-i-ck, pick!', sentence: 'Pick the ripest apple.' },
  { id: 'sick', word: 'sick', emoji: '🤒', breakdown: ['s','i','ck'], audioText: 's-i-ck, sick!', sentence: 'Stay home when you are sick.' },
  { id: 'tick', word: 'tick', emoji: '✅', breakdown: ['t','i','ck'], audioText: 't-i-ck, tick!', sentence: 'Tick the right answer.' },
  { id: 'wick', word: 'wick', emoji: '🕯️', breakdown: ['w','i','ck'], audioText: 'w-i-ck, wick!', sentence: 'Light the candle wick carefully.' },
  // -ill family
  { id: 'bill', word: 'bill', emoji: '🦆', breakdown: ['b','i','ll'], audioText: 'b-i-ll, bill!', sentence: 'A duck has a flat bill.' },
  { id: 'fill', word: 'fill', emoji: '💧', breakdown: ['f','i','ll'], audioText: 'f-i-ll, fill!', sentence: 'Fill the glass with juice.' },
  { id: 'hill', word: 'hill', emoji: '⛰️', breakdown: ['h','i','ll'], audioText: 'h-i-ll, hill!', sentence: 'Run up the grassy hill.' },
  { id: 'mill', word: 'mill', emoji: '🌾', breakdown: ['m','i','ll'], audioText: 'm-i-ll, mill!', sentence: 'Grain is ground at the old mill.' },
  { id: 'will', word: 'will', emoji: '💪', breakdown: ['w','i','ll'], audioText: 'w-i-ll, will!', sentence: 'I will try my very best.' },
  // -ock family
  { id: 'dock', word: 'dock', emoji: '⚓', breakdown: ['d','o','ck'], audioText: 'd-o-ck, dock!', sentence: 'The boat sailed into the dock.' },
  { id: 'lock', word: 'lock', emoji: '🔒', breakdown: ['l','o','ck'], audioText: 'l-o-ck, lock!', sentence: 'Lock the door at night.' },
  { id: 'rock', word: 'rock', emoji: '🪨', breakdown: ['r','o','ck'], audioText: 'r-o-ck, rock!', sentence: 'Sit on the smooth rock.' },
  { id: 'sock', word: 'sock', emoji: '🧦', breakdown: ['s','o','ck'], audioText: 's-o-ck, sock!', sentence: 'Put on a warm sock.' },
  { id: 'knock', word: 'knock', emoji: '🚪', breakdown: ['k','n','ock'], audioText: 'kn-o-ck, knock!', sentence: 'Knock on the door before entering.' },
  // -uck family
  { id: 'duck', word: 'duck', emoji: '🦆', breakdown: ['d','u','ck'], audioText: 'd-u-ck, duck!', sentence: 'The duck swam on the pond.' },
  { id: 'luck', word: 'luck', emoji: '🍀', breakdown: ['l','u','ck'], audioText: 'l-u-ck, luck!', sentence: 'Good luck in the race today!' },
  { id: 'puck', word: 'puck', emoji: '🏒', breakdown: ['p','u','ck'], audioText: 'p-u-ck, puck!', sentence: 'Hit the puck with the hockey stick.' },
  { id: 'suck', word: 'suck', emoji: '🍭', breakdown: ['s','u','ck'], audioText: 's-u-ck, suck!', sentence: 'Suck on the lollipop slowly.' },
  { id: 'tuck', word: 'tuck', emoji: '🛏️', breakdown: ['t','u','ck'], audioText: 't-u-ck, tuck!', sentence: 'Tuck yourself into bed tightly.' },
  { id: 'muck', word: 'muck', emoji: '🐷', breakdown: ['m','u','ck'], audioText: 'm-u-ck, muck!', sentence: 'The pigs rolled in the muck.' },
];

// ─── Reading: Simple Sentences ─────────────────────────────────────────────────
export interface SimpleSentence {
  id: string;
  sentence: string;
  words: string[];
  emoji: string;
  audioText: string;
  level: 1 | 2 | 3;
}

export const simpleSentencesData: SimpleSentence[] = [
  // Level 1 — 2-3 words, CVC only
  { id: 'ss1', sentence: 'The cat sat.', words: ['The','cat','sat'], emoji: '🐱', audioText: 'The cat sat.', level: 1 },
  { id: 'ss2', sentence: 'A big dog.', words: ['A','big','dog'], emoji: '🐶', audioText: 'A big dog.', level: 1 },
  { id: 'ss3', sentence: 'I can run.', words: ['I','can','run'], emoji: '🏃', audioText: 'I can run.', level: 1 },
  { id: 'ss4', sentence: 'The sun is hot.', words: ['The','sun','is','hot'], emoji: '☀️', audioText: 'The sun is hot.', level: 1 },
  { id: 'ss5', sentence: 'I see a pig.', words: ['I','see','a','pig'], emoji: '🐷', audioText: 'I see a pig.', level: 1 },
  { id: 'ss6', sentence: 'The rat ran.', words: ['The','rat','ran'], emoji: '🐀', audioText: 'The rat ran.', level: 1 },
  { id: 'ss7', sentence: 'A red hat.', words: ['A','red','hat'], emoji: '🎩', audioText: 'A red hat.', level: 1 },
  { id: 'ss8', sentence: 'Hop hop hop!', words: ['Hop','hop','hop'], emoji: '🐸', audioText: 'Hop hop hop!', level: 1 },
  { id: 'ss9', sentence: 'My pet is fun.', words: ['My','pet','is','fun'], emoji: '🐾', audioText: 'My pet is fun.', level: 1 },
  { id: 'ss10', sentence: 'I got a hug.', words: ['I','got','a','hug'], emoji: '🤗', audioText: 'I got a hug.', level: 1 },
  // Level 2 — 4-5 words, simple sight words
  { id: 'ss11', sentence: 'I see a dog.', words: ['I','see','a','dog'], emoji: '🐶', audioText: 'I see a dog.', level: 2 },
  { id: 'ss12', sentence: 'A big red bus.', words: ['A','big','red','bus'], emoji: '🚌', audioText: 'A big red bus.', level: 2 },
  { id: 'ss13', sentence: 'I can run fast.', words: ['I','can','run','fast'], emoji: '🏃', audioText: 'I can run fast.', level: 2 },
  { id: 'ss14', sentence: 'The frog can hop.', words: ['The','frog','can','hop'], emoji: '🐸', audioText: 'The frog can hop.', level: 2 },
  { id: 'ss15', sentence: 'I like to eat.', words: ['I','like','to','eat'], emoji: '🍽️', audioText: 'I like to eat.', level: 2 },
  { id: 'ss16', sentence: 'My dog is fun.', words: ['My','dog','is','fun'], emoji: '🐶', audioText: 'My dog is fun.', level: 2 },
  { id: 'ss17', sentence: 'She can see me.', words: ['She','can','see','me'], emoji: '👀', audioText: 'She can see me.', level: 2 },
  { id: 'ss18', sentence: 'We play in mud.', words: ['We','play','in','mud'], emoji: '🌧️', audioText: 'We play in mud.', level: 2 },
  { id: 'ss19', sentence: 'The pig is pink.', words: ['The','pig','is','pink'], emoji: '🐷', audioText: 'The pig is pink.', level: 2 },
  { id: 'ss20', sentence: 'Look at the bird!', words: ['Look','at','the','bird'], emoji: '🐦', audioText: 'Look at the bird!', level: 2 },
  { id: 'ss21', sentence: 'The hen has eggs.', words: ['The','hen','has','eggs'], emoji: '🐔', audioText: 'The hen has eggs.', level: 2 },
  { id: 'ss22', sentence: 'We go on a bus.', words: ['We','go','on','a','bus'], emoji: '🚌', audioText: 'We go on a bus.', level: 2 },
  { id: 'ss23', sentence: 'He can kick a ball.', words: ['He','can','kick','a','ball'], emoji: '⚽', audioText: 'He can kick a ball.', level: 2 },
  { id: 'ss24', sentence: 'The dog bit the log.', words: ['The','dog','bit','the','log'], emoji: '🪵', audioText: 'The dog bit the log.', level: 2 },
  { id: 'ss25', sentence: 'Put the cup on top.', words: ['Put','the','cup','on','top'], emoji: '☕', audioText: 'Put the cup on top.', level: 2 },
  // Level 3 — 5-7 words, richer vocabulary
  { id: 'ss26', sentence: 'The cat sat on the mat.', words: ['The','cat','sat','on','the','mat'], emoji: '🐱', audioText: 'The cat sat on the mat.', level: 3 },
  { id: 'ss27', sentence: 'I can see the big red barn.', words: ['I','can','see','the','big','red','barn'], emoji: '🏚️', audioText: 'I can see the big red barn.', level: 3 },
  { id: 'ss28', sentence: 'The dog ran to get the ball.', words: ['The','dog','ran','to','get','the','ball'], emoji: '🐶', audioText: 'The dog ran to get the ball.', level: 3 },
  { id: 'ss29', sentence: 'It is hot in the sun today.', words: ['It','is','hot','in','the','sun','today'], emoji: '☀️', audioText: 'It is hot in the sun today.', level: 3 },
  { id: 'ss30', sentence: 'She has a pet fish in a tank.', words: ['She','has','a','pet','fish','in','a','tank'], emoji: '🐟', audioText: 'She has a pet fish in a tank.', level: 3 },
  { id: 'ss31', sentence: 'My mum made a big jam bun.', words: ['My','mum','made','a','big','jam','bun'], emoji: '🍞', audioText: 'My mum made a big jam bun.', level: 3 },
  { id: 'ss32', sentence: 'The pup slept on a soft rug.', words: ['The','pup','slept','on','a','soft','rug'], emoji: '🐶', audioText: 'The pup slept on a soft rug.', level: 3 },
  { id: 'ss33', sentence: 'We all sat and had hot cocoa.', words: ['We','all','sat','and','had','hot','cocoa'], emoji: '☕', audioText: 'We all sat and had hot cocoa.', level: 3 },
  { id: 'ss34', sentence: 'The red hen sat in her nest.', words: ['The','red','hen','sat','in','her','nest'], emoji: '🐔', audioText: 'The red hen sat in her nest.', level: 3 },
  { id: 'ss35', sentence: 'I like to jump in mud and run.', words: ['I','like','to','jump','in','mud','and','run'], emoji: '🌧️', audioText: 'I like to jump in mud and run.', level: 3 },
  { id: 'ss36', sentence: 'Sam the pig dug in the wet mud.', words: ['Sam','the','pig','dug','in','the','wet','mud'], emoji: '🐷', audioText: 'Sam the pig dug in the wet mud.', level: 3 },
  { id: 'ss37', sentence: 'Let us sit and read a good book.', words: ['Let','us','sit','and','read','a','good','book'], emoji: '📖', audioText: 'Let us sit and read a good book.', level: 3 },
  { id: 'ss38', sentence: 'The frog and the bug sat on a log.', words: ['The','frog','and','the','bug','sat','on','a','log'], emoji: '🐸', audioText: 'The frog and the bug sat on a log.', level: 3 },
  { id: 'ss39', sentence: 'Bud the pup ran up the big hill.', words: ['Bud','the','pup','ran','up','the','big','hill'], emoji: '⛰️', audioText: 'Bud the pup ran up the big hill.', level: 3 },
  { id: 'ss40', sentence: 'I got new red boots for the rain.', words: ['I','got','new','red','boots','for','the','rain'], emoji: '🌧️', audioText: 'I got new red boots for the rain.', level: 3 },

  // Level 3 additions
  { id: 'ss41', sentence: 'My cat loves to sit in the sun.', words: ['My','cat','loves','to','sit','in','the','sun'], emoji: '🐱', audioText: 'My cat loves to sit in the sun.', level: 3 },
  { id: 'ss42', sentence: 'The duck sat on the big rock.', words: ['The','duck','sat','on','the','big','rock'], emoji: '🦆', audioText: 'The duck sat on the big rock.', level: 3 },
  { id: 'ss43', sentence: 'We went to the park after school.', words: ['We','went','to','the','park','after','school'], emoji: '🌳', audioText: 'We went to the park after school.', level: 3 },
  { id: 'ss44', sentence: 'Jack and Jill ran up the hill.', words: ['Jack','and','Jill','ran','up','the','hill'], emoji: '⛰️', audioText: 'Jack and Jill ran up the hill.', level: 3 },
  { id: 'ss45', sentence: 'The bird sang a sweet song.', words: ['The','bird','sang','a','sweet','song'], emoji: '🐦', audioText: 'The bird sang a sweet song.', level: 3 },
  { id: 'ss46', sentence: 'I brush my teeth before bed.', words: ['I','brush','my','teeth','before','bed'], emoji: '🦷', audioText: 'I brush my teeth before bed.', level: 3 },
  { id: 'ss47', sentence: 'The brown fox jumps over the dog.', words: ['The','brown','fox','jumps','over','the','dog'], emoji: '🦊', audioText: 'The brown fox jumps over the dog.', level: 3 },
  { id: 'ss48', sentence: 'Look at all the fish in the tank.', words: ['Look','at','all','the','fish','in','the','tank'], emoji: '🐟', audioText: 'Look at all the fish in the tank.', level: 3 },
  { id: 'ss49', sentence: 'We sang songs and danced in the rain.', words: ['We','sang','songs','and','danced','in','the','rain'], emoji: '🌧️', audioText: 'We sang songs and danced in the rain.', level: 3 },
  { id: 'ss50', sentence: 'The big black cat slept on my bed.', words: ['The','big','black','cat','slept','on','my','bed'], emoji: '🐱', audioText: 'The big black cat slept on my bed.', level: 3 },
  { id: 'ss51', sentence: 'Mum baked a big round cake for me.', words: ['Mum','baked','a','big','round','cake','for','me'], emoji: '🎂', audioText: 'Mum baked a big round cake for me.', level: 3 },
  { id: 'ss52', sentence: 'Dad read me a long story at bedtime.', words: ['Dad','read','me','a','long','story','at','bedtime'], emoji: '📖', audioText: 'Dad read me a long story at bedtime.', level: 3 },
  { id: 'ss53', sentence: 'The frog jumped off the log with a splash.', words: ['The','frog','jumped','off','the','log','with','a','splash'], emoji: '🐸', audioText: 'The frog jumped off the log with a splash.', level: 3 },
  { id: 'ss54', sentence: 'I can see a big rainbow in the sky.', words: ['I','can','see','a','big','rainbow','in','the','sky'], emoji: '🌈', audioText: 'I can see a big rainbow in the sky.', level: 3 },
  { id: 'ss55', sentence: 'The little chick hatched from its egg today.', words: ['The','little','chick','hatched','from','its','egg','today'], emoji: '🐥', audioText: 'The little chick hatched from its egg today.', level: 3 },
  { id: 'ss56', sentence: 'My gran makes the best apple pie.', words: ['My','gran','makes','the','best','apple','pie'], emoji: '🥧', audioText: 'My gran makes the best apple pie.', level: 3 },
  { id: 'ss57', sentence: 'The snow fell soft and quiet in the night.', words: ['The','snow','fell','soft','and','quiet','in','the','night'], emoji: '❄️', audioText: 'The snow fell soft and quiet in the night.', level: 3 },
  { id: 'ss58', sentence: 'Ben got a pet fish and called it Dot.', words: ['Ben','got','a','pet','fish','and','called','it','Dot'], emoji: '🐟', audioText: 'Ben got a pet fish and called it Dot.', level: 3 },
  { id: 'ss59', sentence: 'Nan and I fed the ducks at the pond.', words: ['Nan','and','I','fed','the','ducks','at','the','pond'], emoji: '🦆', audioText: 'Nan and I fed the ducks at the pond.', level: 3 },
  { id: 'ss60', sentence: 'Every morning I drink a glass of cold milk.', words: ['Every','morning','I','drink','a','glass','of','cold','milk'], emoji: '🥛', audioText: 'Every morning I drink a glass of cold milk.', level: 3 },
];

// ─── Reading: Short Stories ────────────────────────────────────────────────────
export interface ShortStory {
  id: string;
  title: string;
  emoji: string;
  pages: Array<{ text: string; emoji: string; }>;
}

export const shortStoriesData: ShortStory[] = [
  {
    id: 'cat-mat',
    title: 'The Cat on the Mat',
    emoji: '🐱',
    pages: [
      { text: 'There is a cat.', emoji: '🐱' },
      { text: 'The cat is fat.', emoji: '😺' },
      { text: 'The cat sat on a mat.', emoji: '🟫' },
      { text: 'The mat is flat.', emoji: '▬' },
      { text: 'The cat had a nap.', emoji: '😴' },
      { text: 'That is that!', emoji: '✅' },
    ],
  },
  {
    id: 'big-dog',
    title: 'My Big Dog',
    emoji: '🐶',
    pages: [
      { text: 'I have a big dog.', emoji: '🐶' },
      { text: 'My dog is called Bud.', emoji: '🏷️' },
      { text: 'Bud can run and run.', emoji: '🏃' },
      { text: 'Bud can jump up high.', emoji: '⬆️' },
      { text: 'I love my big dog Bud!', emoji: '❤️' },
    ],
  },
  {
    id: 'red-hen',
    title: 'The Red Hen',
    emoji: '🐔',
    pages: [
      { text: 'Here is a red hen.', emoji: '🐔' },
      { text: 'The hen has an egg.', emoji: '🥚' },
      { text: 'The egg is in a nest.', emoji: '🪺' },
      { text: 'The hen sits on the egg.', emoji: '🐣' },
      { text: 'Out pops a chick!', emoji: '🐥' },
      { text: 'The chick is soft and small.', emoji: '💛' },
    ],
  },
  {
    id: 'frog-pond',
    title: 'The Frog and the Pond',
    emoji: '🐸',
    pages: [
      { text: 'A frog sat by a pond.', emoji: '🐸' },
      { text: 'The pond was cool and wet.', emoji: '💧' },
      { text: 'The frog jumped in!', emoji: '💦' },
      { text: 'Splish! Splash! Splosh!', emoji: '🌊' },
      { text: 'The frog had so much fun.', emoji: '🎉' },
      { text: 'The end!', emoji: '📖' },
    ],
  },
  {
    id: 'bug-jug',
    title: 'The Bug in the Jug',
    emoji: '🐛',
    pages: [
      { text: 'There was a little bug.', emoji: '🐛' },
      { text: 'The bug sat on a jug.', emoji: '🫙' },
      { text: 'The bug fell in the jug!', emoji: '😬' },
      { text: 'The bug swam and swam.', emoji: '🏊' },
      { text: 'Then the bug got out.', emoji: '✅' },
      { text: 'The bug was very glad!', emoji: '😄' },
    ],
  },
  {
    id: 'sun-fun',
    title: 'Fun in the Sun',
    emoji: '☀️',
    pages: [
      { text: 'It is a hot sunny day.', emoji: '☀️' },
      { text: 'Mum and I go to the park.', emoji: '🌳' },
      { text: 'I run and jump and skip.', emoji: '🏃' },
      { text: 'We eat jam buns on the grass.', emoji: '🍞' },
      { text: 'I get wet in the paddling pool!', emoji: '💦' },
      { text: 'What a fun day in the sun!', emoji: '🎉' },
    ],
  },
  {
    id: 'pup-mud',
    title: 'Pip the Pup',
    emoji: '🐶',
    pages: [
      { text: 'Pip is a little pup.', emoji: '🐶' },
      { text: 'Pip likes to dig in the mud.', emoji: '⛏️' },
      { text: 'Pip digs and digs and digs.', emoji: '🕳️' },
      { text: 'Pip is very muddy!', emoji: '🌧️' },
      { text: 'Pip gets a bath in the tub.', emoji: '🛁' },
      { text: 'Now Pip is clean and fluffy!', emoji: '✨' },
    ],
  },
  {
    id: 'the-bus',
    title: 'On the Big Red Bus',
    emoji: '🚌',
    pages: [
      { text: 'I get on the big red bus.', emoji: '🚌' },
      { text: 'I sit at the top with Dad.', emoji: '👨' },
      { text: 'We go past shops and parks.', emoji: '🏪' },
      { text: 'I see a dog and a cat!', emoji: '🐱' },
      { text: 'We get off at the big pond.', emoji: '🦆' },
      { text: 'I feed the ducks some bread.', emoji: '🍞' },
      { text: 'The ducks say quack quack quack!', emoji: '🦆' },
    ],
  },
  {
    id: 'lost-sock',
    title: 'The Lost Sock',
    emoji: '🧦',
    pages: [
      { text: 'Sam had one sock.', emoji: '🧦' },
      { text: 'He could not find the other sock.', emoji: '🤔' },
      { text: 'He looked under the bed.', emoji: '🛏️' },
      { text: 'He looked in the toy box.', emoji: '🧸' },
      { text: 'He looked behind the sofa.', emoji: '🛋️' },
      { text: 'The cat had the sock!', emoji: '🐱' },
      { text: 'Silly cat! Give it back!', emoji: '😄' },
    ],
  },
  {
    id: 'rainbow',
    title: 'After the Rain',
    emoji: '🌈',
    pages: [
      { text: 'It rained and rained all day.', emoji: '🌧️' },
      { text: 'I watched from my window.', emoji: '🪟' },
      { text: 'Then the rain stopped.', emoji: '🌤️' },
      { text: 'The sun came out bright and warm.', emoji: '☀️' },
      { text: 'I saw a big rainbow in the sky!', emoji: '🌈' },
      { text: 'Red, orange, yellow, green, blue!', emoji: '🎨' },
      { text: 'I put on my boots and went outside.', emoji: '👢' },
      { text: 'I jumped in every puddle I could find!', emoji: '💦' },
    ],
  },
  {
    id: 'little-fish',
    title: 'The Little Fish',
    emoji: '🐟',
    pages: [
      { text: 'A little fish swam in the sea.', emoji: '🐟' },
      { text: 'The sea was deep and blue.', emoji: '🌊' },
      { text: 'The fish met a big crab.', emoji: '🦀' },
      { text: 'The crab had big red claws.', emoji: '🦀' },
      { text: 'The fish hid in the rocks.', emoji: '🪨' },
      { text: 'The crab swam away.', emoji: '👋' },
      { text: 'The little fish was safe!', emoji: '😊' },
    ],
  },
  {
    id: 'snow-day',
    title: 'A Snowy Day',
    emoji: '❄️',
    pages: [
      { text: 'Ben woke up and saw white.', emoji: '😮' },
      { text: 'Snow was on the grass!', emoji: '❄️' },
      { text: 'Ben put on his coat and boots.', emoji: '👢' },
      { text: 'He ran out to play.', emoji: '🏃' },
      { text: 'He made a big snowman.', emoji: '⛄' },
      { text: 'He gave it a hat and a scarf.', emoji: '🧣' },
      { text: 'Then Mum called him in for hot soup!', emoji: '🍲' },
    ],
  },
  {
    id: 'hungry-bear',
    title: 'The Hungry Bear',
    emoji: '🐻',
    pages: [
      { text: 'A bear woke up in the spring.', emoji: '🐻' },
      { text: 'He had slept all winter long.', emoji: '😴' },
      { text: 'His tummy was very empty.', emoji: '😮' },
      { text: 'He went to look for food.', emoji: '🌿' },
      { text: 'He found red berries on a bush.', emoji: '🍓' },
      { text: 'He found honey in a tree.', emoji: '🍯' },
      { text: 'The bear ate and ate until he was full!', emoji: '😄' },
    ],
  },
  {
    id: 'kit-the-cat',
    title: 'Kit the Cat',
    emoji: '🐱',
    pages: [
      { text: 'Kit is a little cat.', emoji: '🐱' },
      { text: 'Kit likes to sit on the mat.', emoji: '🟫' },
      { text: 'Kit sees a big red ball.', emoji: '🔴' },
      { text: 'Kit pats the ball with her paw.', emoji: '🐾' },
      { text: 'The ball rolls under the bed!', emoji: '🛏️' },
      { text: 'Kit digs the ball out.', emoji: '😼' },
      { text: 'Kit is a clever cat!', emoji: '⭐' },
    ],
  },
  {
    id: 'the-garden',
    title: 'In the Garden',
    emoji: '🌻',
    pages: [
      { text: 'Gran has a garden full of flowers.', emoji: '🌸' },
      { text: 'Red roses grow by the wall.', emoji: '🌹' },
      { text: 'Yellow sunflowers grow tall and bright.', emoji: '🌻' },
      { text: 'Bees buzz from flower to flower.', emoji: '🐝' },
      { text: 'A butterfly lands on my hand!', emoji: '🦋' },
      { text: 'I help Gran water all the plants.', emoji: '💧' },
      { text: 'The garden smells wonderful!', emoji: '🌺' },
    ],
  },
  {
    id: 'market-day',
    title: 'A Trip to the Market',
    emoji: '🛒',
    pages: [
      { text: 'Today we go to the market.', emoji: '🛒' },
      { text: 'There are stalls full of food.', emoji: '🥦' },
      { text: 'I see red apples, yellow bananas, and green pears.', emoji: '🍎' },
      { text: 'Dad buys a big bag of oranges.', emoji: '🍊' },
      { text: 'Mum buys fresh bread and cheese.', emoji: '🧀' },
      { text: 'I get to carry the bag.', emoji: '💪' },
      { text: 'Then we have hot cocoa at the cafe.', emoji: '☕' },
      { text: 'What a brilliant market day!', emoji: '🎉' },
    ],
  },

];

// ─── Emotions & Feelings ──────────────────────────────────────────────────────
export interface EmotionItem {
  id: string;
  name: string;
  emoji: string;
  description: string;
  example: string;
  audioText: string;
  funFact: string;
}

export const emotionsData: EmotionItem[] = [
  { id: 'happy', name: 'Happy', emoji: '😄', description: 'Feeling happy means you feel joy inside!', example: 'You feel happy when you play with friends.', audioText: 'This is happy.', funFact: 'When you are happy you smile and your eyes light up. Happiness is one of the best feelings!' },
  { id: 'sad', name: 'Sad', emoji: '😢', description: 'Feeling sad means your heart feels heavy.', example: 'You might feel sad if you lose a toy you love.', audioText: 'This is sad.', funFact: 'When you are sad it is okay to cry. Crying can help you feel better, and a hug from someone you love always helps!' },
  { id: 'angry', name: 'Angry', emoji: '😠', description: 'Feeling angry means you feel cross inside.', example: 'You might feel angry if someone takes your things.', audioText: 'This is angry.', funFact: 'Everyone feels angry sometimes. When you feel angry, take a deep breath and count to ten — it really helps calm you down!' },
  { id: 'scared', name: 'Scared', emoji: '😨', description: 'Feeling scared means something worries you.', example: 'You might feel scared of the dark or loud noises.', audioText: 'This is scared.', funFact: 'Being scared is normal! Your body makes your heart beat faster to keep you safe. Talking to a grown-up always helps when you are scared.' },
  { id: 'excited', name: 'Excited', emoji: '🤩', description: 'Feeling excited means you feel bubbly and full of energy!', example: 'You feel excited on your birthday or before a trip.', audioText: 'This is excited.', funFact: 'When you are excited you might jump up and down and talk fast! Excitement means something wonderful is about to happen.' },
  { id: 'surprised', name: 'Surprised', emoji: '😮', description: 'Feeling surprised means something unexpected happened!', example: 'You feel surprised when you get a secret present.', audioText: 'This is surprised.', funFact: 'When you are surprised your eyes go wide and your mouth opens in an O shape! Surprises can be happy or a little bit scary.' },
  { id: 'tired', name: 'Tired', emoji: '😴', description: 'Feeling tired means your body needs rest and sleep.', example: 'You feel tired after a long day of playing.', audioText: 'This is tired.', funFact: 'When you are tired your eyelids feel heavy. Sleep is very important — it helps your brain and body grow and get ready for the next day!' },
  { id: 'bored', name: 'Bored', emoji: '😑', description: 'Feeling bored means nothing exciting is happening.', example: 'You feel bored when there is nothing to do.', audioText: 'This is bored.', funFact: 'Being bored is a chance to use your imagination! You could draw, build, or make up a story. Boredom can lead to great ideas!' },
  { id: 'proud', name: 'Proud', emoji: '😊', description: 'Feeling proud means you did something really well!', example: 'You feel proud when you learn something new.', audioText: 'This is proud.', funFact: 'Feeling proud is wonderful — it means you worked hard and achieved something. You can also feel proud of other people too!' },
  { id: 'love', name: 'Loved', emoji: '🥰', description: 'Feeling loved means people care about you lots.', example: 'You feel loved when someone gives you a big hug.', audioText: 'This is feeling loved.', funFact: 'Love is one of the strongest feelings in the world. Your family and friends love you every single day — even when they cannot show it!' },
  { id: 'silly', name: 'Silly', emoji: '🤪', description: 'Feeling silly means you want to have fun and be goofy!', example: 'You feel silly when you make funny faces and laugh.', audioText: 'This is silly.', funFact: 'Being silly and laughing is really good for you — it makes you feel happier and even helps your body stay healthy!' },
  { id: 'shy', name: 'Shy', emoji: '😳', description: 'Feeling shy means you feel nervous around new people.', example: 'You might feel shy on your first day at a new school.', audioText: 'This is shy.', funFact: 'Lots of people feel shy sometimes — even grown-ups! Being shy is completely normal. The more you practise talking to new people, the easier it gets.' },
];

// ─── Weather ──────────────────────────────────────────────────────────────────
export interface WeatherItem {
  id: string;
  name: string;
  emoji: string;
  audioText: string;
  description: string;
  whatToWear: string;
  funFact: string;
}

export const weatherData: WeatherItem[] = [
  { id: 'sunny', name: 'Sunny', emoji: '☀️', audioText: 'Today is sunny!', description: 'The sun is shining bright and it feels warm on your skin.', whatToWear: 'Wear light clothes, a hat, and sun cream!', funFact: 'Sunny days are perfect for playing outside, going to the park, and having a picnic. The sunshine gives us warmth and helps plants grow.' },
  { id: 'cloudy', name: 'Cloudy', emoji: '☁️', audioText: 'Today is cloudy!', description: 'Clouds cover the sky and it looks grey and dull.', whatToWear: 'Wear a light jacket just in case!', funFact: 'Clouds are made of millions of tiny water droplets floating in the air. They can be fluffy and white or dark and grey when rain is coming.' },
  { id: 'rainy', name: 'Rainy', emoji: '🌧️', audioText: 'Today is rainy!', description: 'Water droplets fall from the clouds and everything gets wet.', whatToWear: 'Put on your wellies and raincoat!', funFact: 'Rain is very important — it fills our rivers and lakes and helps all the plants and trees grow. After rain, you might see a beautiful rainbow!' },
  { id: 'windy', name: 'Windy', emoji: '💨', audioText: 'Today is windy!', description: 'The wind blows strongly and makes trees sway and your hair fly!', whatToWear: 'Wear a coat that buttons up tight!', funFact: 'Wind is moving air. It can be a gentle breeze or a strong gale. Wind helps seeds travel and fly kites and sail boats!' },
  { id: 'snowy', name: 'Snowy', emoji: '❄️', audioText: 'Today is snowy!', description: 'White snowflakes fall from the sky and cover everything in white.', whatToWear: 'Wear a warm coat, boots, hat, and gloves!', funFact: 'Every single snowflake has its own unique pattern with six sides — no two snowflakes are exactly the same in the whole world!' },
  { id: 'foggy', name: 'Foggy', emoji: '🌫️', audioText: 'Today is foggy!', description: 'A thick mist hangs in the air and makes it hard to see far away.', whatToWear: 'Wear bright colours so people can see you!', funFact: 'Fog is really a cloud that sits on the ground instead of in the sky. On foggy mornings everything looks mysterious and magical!' },
  { id: 'stormy', name: 'Stormy', emoji: '⛈️', audioText: 'Today is stormy!', description: 'There are dark clouds, heavy rain, thunder, and flashing lightning.', whatToWear: 'Stay indoors and keep warm!', funFact: 'Thunder is the loud rumbling sound made when lightning superheats the air. Lightning always comes before thunder because light travels faster than sound!' },
  { id: 'rainbow', name: 'Rainbow', emoji: '🌈', audioText: 'There is a rainbow!', description: 'After rain and sunshine together, a beautiful arc of colours appears in the sky.', whatToWear: 'Any outfit — rainbows are a treat!', funFact: 'A rainbow always has the same seven colours in the same order: red, orange, yellow, green, blue, indigo, and violet. Remember ROY G BIV!' },
];

// ─── My Family ────────────────────────────────────────────────────────────────
export interface FamilyMember {
  id: string;
  name: string;
  emoji: string;
  audioText: string;
  description: string;
  funFact: string;
}

export const familyData: FamilyMember[] = [
  { id: 'mum', name: 'Mum', emoji: '👩', audioText: 'This is Mum.', description: 'Your mum is the woman who takes care of you and loves you very much.', funFact: 'Mums do so many things — they cuddle you, cook for you, read bedtime stories, and always know how to make you feel better when you are sad.' },
  { id: 'dad', name: 'Dad', emoji: '👨', audioText: 'This is Dad.', description: 'Your dad is the man who looks after you and loves you very much.', funFact: 'Dads are great at playing games, telling jokes, going on adventures, and giving the biggest bear hugs. They love to cheer you on!' },
  { id: 'baby', name: 'Baby', emoji: '👶', audioText: 'This is a baby.', description: 'A baby is a very young child who cannot walk or talk yet.', funFact: 'Babies learn so fast! In their first year they go from sleeping all the time to sitting, crawling, and even saying their first words!' },
  { id: 'brother', name: 'Brother', emoji: '👦', audioText: 'This is a brother.', description: 'A brother is a boy in your family — he shares your parents with you.', funFact: 'Brothers can be older or younger than you. Brothers often become best friends who play together, argue sometimes, and always look out for each other!' },
  { id: 'sister', name: 'Sister', emoji: '👧', audioText: 'This is a sister.', description: 'A sister is a girl in your family — she shares your parents with you.', funFact: 'Sisters often share clothes, toys, and secrets! Sisters look out for each other and can be the best friends you will ever have.' },
  { id: 'grandma', name: 'Grandma', emoji: '👵', audioText: 'This is Grandma.', description: 'Your grandma is your mum or dads mum — she loves you extra specially!', funFact: 'Grandmas have so many wonderful stories to tell! They love giving big hugs, baking yummy things, and spoiling their grandchildren with love and treats.' },
  { id: 'grandpa', name: 'Grandpa', emoji: '👴', audioText: 'This is Grandpa.', description: 'Your grandpa is your mum or dads dad — he has lots of love for you!', funFact: 'Grandpas are full of wisdom and funny stories from long ago. They love taking you on walks, teaching you things, and having you sit on their lap.' },
  { id: 'aunt', name: 'Aunt', emoji: '👩‍🦰', audioText: 'This is an aunt.', description: 'Your aunt is your parents sister — she is part of your family too!', funFact: 'Aunts are like extra mums! They love to take you on special outings, buy you fun gifts, and tell you stories about when your parents were little.' },
  { id: 'uncle', name: 'Uncle', emoji: '👨‍🦱', audioText: 'This is an uncle.', description: 'Your uncle is your parents brother — he is part of your family too!', funFact: 'Uncles are often great fun! They tell jokes, play rough and tumble games, and love spending time with their nieces and nephews.' },
  { id: 'cousin', name: 'Cousin', emoji: '🧒', audioText: 'This is a cousin.', description: 'Your cousin is the child of your aunt or uncle — a family friend!', funFact: 'Cousins can feel just like brothers and sisters. Family parties and holidays are extra fun because you get to play with all your cousins together!' },
  { id: 'pet', name: 'Family Pet', emoji: '🐾', audioText: 'This is a family pet.', description: 'A family pet is an animal that lives with you and is part of the family!', funFact: 'Pets like dogs, cats, and rabbits are part of the family too! They need food, water, love, and care just like everyone else.' },
];

// ─── My Body Routines (Daily Hygiene) ─────────────────────────────────────────
export interface RoutineItem {
  id: string;
  name: string;
  emoji: string;
  timeOfDay: 'morning' | 'evening' | 'anytime';
  audioText: string;
  description: string;
  funFact: string;
}

export const routinesData: RoutineItem[] = [
  { id: 'brush-teeth', name: 'Brush Your Teeth', emoji: '🦷', timeOfDay: 'morning', audioText: 'Brush your teeth!', description: 'Brush your teeth for two whole minutes every morning and before bed.', funFact: 'Brushing removes germs called plaque that try to make holes in your teeth called cavities. Two minutes of brushing twice a day keeps your smile strong and healthy!' },
  { id: 'wash-hands', name: 'Wash Your Hands', emoji: '🙌', timeOfDay: 'anytime', audioText: 'Wash your hands!', description: 'Wash your hands with soap and water after the toilet and before eating.', funFact: 'Your hands touch hundreds of things every day. Washing with soap for 20 seconds kills germs that can make you poorly. Sing Happy Birthday twice while washing!' },
  { id: 'have-breakfast', name: 'Eat Breakfast', emoji: '🥣', timeOfDay: 'morning', audioText: 'Eat your breakfast!', description: 'Breakfast gives your body and brain energy to start the day.', funFact: 'Breakfast is called the most important meal of the day! After sleeping all night your body is hungry for fuel. A good breakfast helps you think clearly at school.' },
  { id: 'get-dressed', name: 'Get Dressed', emoji: '👕', timeOfDay: 'morning', audioText: 'Get dressed!', description: 'Put on your clothes for the day — check the weather first!', funFact: 'Getting dressed by yourself is a big achievement! Clothes protect your skin from cold, heat, and scratches. Picking out your own outfit is a great way to show your personality.' },
  { id: 'tidy-room', name: 'Tidy Your Room', emoji: '🧹', timeOfDay: 'anytime', audioText: 'Tidy your room!', description: 'Put your toys and things away so your room is neat and tidy.', funFact: 'Keeping your room tidy helps you find your things easily. When your space is organised you feel calmer and it is easier to play and create things.' },
  { id: 'have-bath', name: 'Have a Bath', emoji: '🛁', timeOfDay: 'evening', audioText: 'Time for a bath!', description: 'Have a warm bath or shower to clean your whole body.', funFact: 'Bathing washes away sweat, dirt, and germs from your skin. Warm water also helps you relax and feel sleepy, which is perfect before bedtime!' },
  { id: 'read-book', name: 'Read a Book', emoji: '📖', timeOfDay: 'evening', audioText: 'Read a book!', description: 'Read a book or listen to a story every day — it makes you cleverer!', funFact: 'Reading for just 20 minutes a day introduces you to about 1.8 million words every year! Books take you on adventures to amazing places without leaving your home.' },
  { id: 'go-to-sleep', name: 'Go to Sleep', emoji: '😴', timeOfDay: 'evening', audioText: 'Time for sleep!', description: 'Go to bed at the same time every night so your body gets enough rest.', funFact: 'Children aged 5 to 6 need about 10 to 12 hours of sleep every night. While you sleep your brain sorts through everything you learned that day and stores it as memories!' },
  { id: 'drink-water', name: 'Drink Water', emoji: '💧', timeOfDay: 'anytime', audioText: 'Drink some water!', description: 'Drink plenty of water throughout the day to stay healthy.', funFact: 'Your body is about 60% water! Drinking water keeps you alert, helps your skin stay healthy, and makes sure all your organs work properly. Aim for 6 to 8 glasses a day!' },
  { id: 'exercise', name: 'Exercise', emoji: '🏃', timeOfDay: 'anytime', audioText: 'Time to exercise!', description: 'Run, jump, dance, or play outside to keep your body strong and healthy.', funFact: 'Children should be active for at least 60 minutes every day! Exercise makes your heart and muscles stronger and releases happy chemicals in your brain called endorphins.' },
];

// ─── Numbers: Simple Fractions ────────────────────────────────────────────────
export interface FractionItem {
  id: string;
  name: string;
  emoji: string;
  numerator: number;
  denominator: number;
  audioText: string;
  description: string;
  realWorldExample: string;
}

export const fractionsData: FractionItem[] = [
  { id: 'half', name: 'One Half', emoji: '½', numerator: 1, denominator: 2, audioText: 'This is one half.', description: 'One half means splitting something equally into 2 pieces and taking 1.', realWorldExample: 'Cut a sandwich in half — you get two equal pieces!' },
  { id: 'quarter', name: 'One Quarter', emoji: '¼', numerator: 1, denominator: 4, audioText: 'This is one quarter.', description: 'One quarter means splitting something equally into 4 pieces and taking 1.', realWorldExample: 'Cut a pizza into 4 equal slices — one slice is one quarter!' },
  { id: 'three-quarters', name: 'Three Quarters', emoji: '¾', numerator: 3, denominator: 4, audioText: 'This is three quarters.', description: 'Three quarters means 3 out of 4 equal pieces.', realWorldExample: 'If you eat 3 slices of a pizza cut in 4, you ate three quarters!' },
  { id: 'third', name: 'One Third', emoji: '⅓', numerator: 1, denominator: 3, audioText: 'This is one third.', description: 'One third means splitting something equally into 3 pieces and taking 1.', realWorldExample: 'Share a chocolate bar with 2 friends — you each get one third!' },
  { id: 'two-thirds', name: 'Two Thirds', emoji: '⅔', numerator: 2, denominator: 3, audioText: 'This is two thirds.', description: 'Two thirds means 2 out of 3 equal pieces.', realWorldExample: 'If you eat 2 out of 3 equal pieces of cake, you ate two thirds!' },
  { id: 'whole', name: 'A Whole', emoji: '1', numerator: 1, denominator: 1, audioText: 'This is a whole.', description: 'A whole means the complete thing — all of it, nothing missing!', realWorldExample: 'A whole apple means the entire apple — nothing has been taken away!' },
];

// ─── Colours in Nature ─────────────────────────────────────────────────────────
export interface NatureColorItem {
  id: string;
  color: string;
  emoji: string;
  naturalThings: string[];
  naturalEmojis: string[];
  audioText: string;
  sentence: string;
}

export const natureColorsData: NatureColorItem[] = [
  { id: 'nc-red', color: 'Red', emoji: '🔴', naturalThings: ['Rose', 'Tomato', 'Robin', 'Apple', 'Ladybird'], naturalEmojis: ['🌹','🍅','🐦','🍎','🐞'], audioText: 'What is red in nature?', sentence: 'Red roses, tomatoes, and ladybirds are all found in nature!' },
  { id: 'nc-orange', color: 'Orange', emoji: '🟠', naturalThings: ['Tiger', 'Carrot', 'Sunset', 'Fox', 'Clownfish'], naturalEmojis: ['🐯','🥕','🌅','🦊','🐠'], audioText: 'What is orange in nature?', sentence: 'Tigers, foxes, and carrots are all beautiful shades of orange!' },
  { id: 'nc-yellow', color: 'Yellow', emoji: '🟡', naturalThings: ['Sun', 'Sunflower', 'Banana', 'Bumble Bee', 'Canary'], naturalEmojis: ['☀️','🌻','🍌','🐝','🐦'], audioText: 'What is yellow in nature?', sentence: 'The sun, sunflowers, and bananas are bright and cheerful yellow!' },
  { id: 'nc-green', color: 'Green', emoji: '🟢', naturalThings: ['Frog', 'Leaf', 'Grass', 'Caterpillar', 'Cucumber'], naturalEmojis: ['🐸','🍃','🌿','🐛','🥒'], audioText: 'What is green in nature?', sentence: 'Frogs, leaves, and grass are fresh and lively green!' },
  { id: 'nc-blue', color: 'Blue', emoji: '🔵', naturalThings: ['Sky', 'Ocean', 'Bluebird', 'Bluebell', 'Dragonfly'], naturalEmojis: ['🌤️','🌊','🐦','💐','🦋'], audioText: 'What is blue in nature?', sentence: 'The sky and ocean are magnificent shades of blue!' },
  { id: 'nc-purple', color: 'Purple', emoji: '🟣', naturalThings: ['Lavender', 'Plum', 'Violet', 'Starfish', 'Amethyst'], naturalEmojis: ['💜','🍇','🌸','⭐','💎'], audioText: 'What is purple in nature?', sentence: 'Lavender flowers and plums are gorgeous shades of purple!' },
  { id: 'nc-white', color: 'White', emoji: '⚪', naturalThings: ['Snow', 'Cloud', 'Swan', 'Polar Bear', 'Daisy'], naturalEmojis: ['❄️','☁️','🦢','🐻‍❄️','🌼'], audioText: 'What is white in nature?', sentence: 'Snow, swans, and daisies are all pure bright white!' },
  { id: 'nc-brown', color: 'Brown', emoji: '🟤', naturalThings: ['Soil', 'Tree trunk', 'Bear', 'Acorn', 'Sparrow'], naturalEmojis: ['🌱','🌲','🐻','🌰','🐦'], audioText: 'What is brown in nature?', sentence: 'Soil, tree trunks, and bears are all earthy brown!' },
  { id: 'nc-pink', color: 'Pink', emoji: '🩷', naturalThings: ['Flamingo', 'Cherry Blossom', 'Salmon', 'Rose', 'Piglet'], naturalEmojis: ['🦩','🌸','🐟','🌹','🐷'], audioText: 'What is pink in nature?', sentence: 'Flamingos and cherry blossoms are beautiful shades of pink!' },
  { id: 'nc-black', color: 'Black', emoji: '⚫', naturalThings: ['Crow', 'Panther', 'Night Sky', 'Coal', 'Blackberry'], naturalEmojis: ['🐦','🐆','🌑','🪨','🫐'], audioText: 'What is black in nature?', sentence: 'Crows, panthers, and the night sky are all deep, dark black!' },
];

// ─── The Five Senses ─────────────────────────────────────────────────────────
export interface SenseItem {
  id: string;
  name: string;
  organ: string;
  emoji: string;
  organEmoji: string;
  audioText: string;
  description: string;
  examples: string[];
  exampleEmojis: string[];
  funFact: string;
}

export const sensesData: SenseItem[] = [
  {
    id: 'sight',
    name: 'Sight',
    organ: 'Eyes',
    emoji: '👁️',
    organEmoji: '👀',
    audioText: 'We use our eyes to see!',
    description: 'Sight lets us see everything around us — colours, shapes, people, and places.',
    examples: ['Rainbows', 'Faces', 'Stars', 'Books'],
    exampleEmojis: ['🌈', '👩', '⭐', '📖'],
    funFact: 'Your eyes can see about 10 million different colours! They work like tiny cameras taking pictures of everything around you.',
  },
  {
    id: 'hearing',
    name: 'Hearing',
    organ: 'Ears',
    emoji: '👂',
    organEmoji: '👂',
    audioText: 'We use our ears to hear!',
    description: 'Hearing lets us listen to sounds — music, voices, animals, and the world around us.',
    examples: ['Music', 'Birds singing', 'Thunder', 'Laughter'],
    exampleEmojis: ['🎵', '🐦', '⛈️', '😄'],
    funFact: 'Your ears never stop working — even when you are fast asleep your ears are still listening out for sounds. They also help you keep your balance!',
  },
  {
    id: 'touch',
    name: 'Touch',
    organ: 'Skin',
    emoji: '🤲',
    organEmoji: '✋',
    audioText: 'We use our skin to feel touch!',
    description: 'Touch lets us feel things — whether they are soft, hard, hot, cold, rough, or smooth.',
    examples: ['Fluffy cat', 'Cold ice', 'Rough bark', 'Soft pillow'],
    exampleEmojis: ['🐱', '🧊', '🌲', '🛏️'],
    funFact: 'Your skin is your largest organ and it is covered in millions of tiny touch sensors. Your fingertips have the most sensors of all — that is why they are so sensitive!',
  },
  {
    id: 'taste',
    name: 'Taste',
    organ: 'Tongue',
    emoji: '👅',
    organEmoji: '😋',
    audioText: 'We use our tongue to taste!',
    description: 'Taste lets us tell if food is sweet, sour, salty, bitter, or savoury.',
    examples: ['Sweet cake', 'Sour lemon', 'Salty crisps', 'Bitter coffee'],
    exampleEmojis: ['🎂', '🍋', '🍟', '☕'],
    funFact: 'Your tongue has about 10,000 tiny taste buds on it! Children can taste things more strongly than grown-ups because they have more taste buds.',
  },
  {
    id: 'smell',
    name: 'Smell',
    organ: 'Nose',
    emoji: '👃',
    organEmoji: '🌸',
    audioText: 'We use our nose to smell!',
    description: 'Smell lets us detect scents — lovely ones like flowers and food, and unpleasant ones that warn us of danger.',
    examples: ['Fresh bread', 'Roses', 'Rain', 'Popcorn'],
    exampleEmojis: ['🍞', '🌹', '🌧️', '🍿'],
    funFact: 'Your nose can recognise over one trillion different smells! Smell is linked strongly to memory — a familiar scent can instantly remind you of a happy moment.',
  },
];

// ─── Directions & Positions ───────────────────────────────────────────────────
export interface DirectionItem {
  id: string;
  name: string;
  opposite?: string;
  emoji: string;
  audioText: string;
  description: string;
  example: string;
  funFact: string;
}

export const directionsData: DirectionItem[] = [
  { id: 'left', name: 'Left', opposite: 'Right', emoji: '⬅️', audioText: 'This is left!', description: 'Left is the side of your body where your heart is. When you raise your left hand, that is the left side.', example: 'Turn left at the traffic lights.', funFact: 'A good trick to remember left: hold both hands in front of you with thumbs pointing up. The hand that makes an L shape is your LEFT hand!' },
  { id: 'right', name: 'Right', opposite: 'Left', emoji: '➡️', audioText: 'This is right!', description: 'Right is the opposite side to left. Most people write with their right hand.', example: 'Look right before you cross the road.', funFact: 'About 90% of people are right-handed! The right side of your brain actually controls the LEFT side of your body, and vice versa.' },
  { id: 'up', name: 'Up', opposite: 'Down', emoji: '⬆️', audioText: 'This is up!', description: 'Up is the direction towards the sky. When you stand tall, up is above your head.', example: 'Look up to see the clouds and birds.', funFact: 'The sky is up and the ground is down because of a force called gravity which pulls everything towards the centre of the Earth!' },
  { id: 'down', name: 'Down', opposite: 'Up', emoji: '⬇️', audioText: 'This is down!', description: 'Down is the direction towards the ground. Your feet point downwards when you stand.', example: 'Apples fall down from trees.', funFact: 'Rain, snowflakes, leaves, and dropped toys all fall down because of gravity. Even astronauts in space experience a kind of falling — it is called orbiting!' },
  { id: 'forwards', name: 'Forwards', opposite: 'Backwards', emoji: '🔜', audioText: 'This is forwards!', description: 'Forwards means in the direction you are facing — the way your face and toes point.', example: 'Walk forwards to reach the door.', funFact: 'Humans walk forwards naturally because our eyes are at the front of our heads. Most animals with eyes at the front are predators who need to judge distances!' },
  { id: 'backwards', name: 'Backwards', opposite: 'Forwards', emoji: '🔙', audioText: 'This is backwards!', description: 'Backwards means going behind you — in the opposite direction to where you face.', example: 'Take two steps backwards and look!', funFact: 'Walking backwards is much harder than walking forwards and uses different muscles. Athletes sometimes train walking backwards to build strength and balance.' },
  { id: 'inside', name: 'Inside', opposite: 'Outside', emoji: '🏠', audioText: 'This is inside!', description: 'Inside means within something — in a room, a box, a bag, or a building.', example: 'The cat is inside the house.', funFact: 'Being inside is also called being indoors. Humans spend about 90% of their lives indoors — in homes, schools, shops, and offices!' },
  { id: 'outside', name: 'Outside', opposite: 'Inside', emoji: '🌳', audioText: 'This is outside!', description: 'Outside means not inside anything — in the open air, outdoors.', example: 'The children play outside in the garden.', funFact: 'Spending time outside in nature is really good for your health and mood. Natural sunlight helps your body make vitamin D which keeps your bones strong!' },
  { id: 'above', name: 'Above', opposite: 'Below', emoji: '☁️', audioText: 'This is above!', description: 'Above means higher up, over the top of something.', example: 'The bird flies above the trees.', funFact: 'The word above comes from the Old English words meaning on top. Clouds are above us, the ground is below us, and we are right in the middle!' },
  { id: 'below', name: 'Below', opposite: 'Above', emoji: '🐠', audioText: 'This is below!', description: 'Below means lower down, underneath something.', example: 'Fish swim below the surface of the water.', funFact: 'The deepest part of the ocean is the Mariana Trench — it goes 11 kilometres below the surface of the sea, deeper than Mount Everest is tall!' },
  { id: 'beside', name: 'Beside', emoji: '👫', audioText: 'This is beside!', description: 'Beside means next to something, at the side of it.', example: 'Sit beside your friend on the mat.', funFact: 'Beside and next to mean the same thing. The word beside comes from the old phrase by the side of!' },
  { id: 'between', name: 'Between', emoji: '↔️', audioText: 'This is between!', description: 'Between means in the middle of two things, separating them.', example: 'The shop is between the park and the school.', funFact: 'When something is between two things, those two things are on either side. A sandwich filling is between two slices of bread!' },
];

// ─── Comparing Sizes ──────────────────────────────────────────────────────────
export interface SizeCompareItem {
  id: string;
  concept: string;
  levels: string[];
  emojis: string[];
  audioText: string;
  description: string;
  example: string;
  funFact: string;
}

export const sizesData: SizeCompareItem[] = [
  { id: 'big-bigger-biggest', concept: 'Size', levels: ['Small', 'Bigger', 'Biggest'], emojis: ['🐭', '🐱', '🐘'], audioText: 'Small, bigger, biggest!', description: 'We can compare the sizes of things — something can be small, bigger than that, or the biggest of all.', example: 'A mouse is small. A cat is bigger. An elephant is the biggest!', funFact: 'The blue whale is the biggest animal that has ever lived on Earth — it can be as long as three buses parked end to end!' },
  { id: 'tall-taller-tallest', concept: 'Height', levels: ['Short', 'Taller', 'Tallest'], emojis: ['🌱', '🌲', '🗼'], audioText: 'Short, taller, tallest!', description: 'We can compare how tall things are — something can be short, taller than that, or the tallest of all.', example: 'A seedling is short. A tree is taller. A tower is the tallest!', funFact: 'The tallest tree ever measured was a coast redwood tree in California called Hyperion — it stands over 115 metres tall, as tall as a 35-storey building!' },
  { id: 'heavy-heavier-heaviest', concept: 'Weight', levels: ['Light', 'Heavier', 'Heaviest'], emojis: ['🪶', '🍎', '🏋️'], audioText: 'Light, heavier, heaviest!', description: 'We can compare how heavy things are — something can be light, heavier than that, or the heaviest.', example: 'A feather is light. An apple is heavier. A dumbbell is the heaviest!', funFact: 'The heaviest animal in the world is the blue whale — it can weigh as much as 200 tonnes. That is heavier than 30 elephants all together!' },
  { id: 'fast-faster-fastest', concept: 'Speed', levels: ['Slow', 'Faster', 'Fastest'], emojis: ['🐢', '🐇', '🚀'], audioText: 'Slow, faster, fastest!', description: 'We can compare how fast things move — something can be slow, faster than that, or the fastest.', example: 'A tortoise is slow. A rabbit is faster. A rocket is the fastest!', funFact: 'The fastest animal on land is the cheetah which can run at 120 kilometres per hour. The fastest human can only run about 45 kilometres per hour!' },
  { id: 'loud-louder-loudest', concept: 'Volume', levels: ['Quiet', 'Louder', 'Loudest'], emojis: ['🤫', '📣', '🔊'], audioText: 'Quiet, louder, loudest!', description: 'We can compare how loud sounds are — a sound can be quiet, louder than that, or the loudest.', example: 'A whisper is quiet. A shout is louder. A thunderclap is the loudest!', funFact: 'The loudest natural sound ever recorded was the eruption of Krakatoa volcano in 1883 — it was heard 4,000 kilometres away in Australia!' },
  { id: 'hot-hotter-hottest', concept: 'Temperature', levels: ['Warm', 'Hotter', 'Hottest'], emojis: ['☀️', '🔥', '🌋'], audioText: 'Warm, hotter, hottest!', description: 'We can compare temperatures — something can be warm, hotter than that, or the hottest.', example: 'Sunshine is warm. A flame is hotter. A volcano is the hottest!', funFact: 'The surface of the sun is about 5,500 degrees Celsius — so hot that no material on Earth could survive touching it. The centre of the Earth is nearly as hot!' },
  { id: 'long-longer-longest', concept: 'Length', levels: ['Short', 'Longer', 'Longest'], emojis: ['🐛', '🐍', '🚂'], audioText: 'Short, longer, longest!', description: 'We can compare how long things are — something can be short, longer than that, or the longest.', example: 'A caterpillar is short. A snake is longer. A train is the longest!', funFact: 'The longest train ever recorded had 682 wagons and was 7.3 kilometres long. It took over 8 minutes to pass a single point at full speed!' },
  { id: 'near-far', concept: 'Distance', levels: ['Near', 'Far', 'Very Far'], emojis: ['👋', '🏔️', '🌍'], audioText: 'Near, far, very far away!', description: 'We can describe how far away something is — near means close to us, far means far away.', example: 'My hand is near. That mountain is far. Another country is very far!', funFact: 'The moon is about 384,000 kilometres away from Earth — that sounds very far, but if you could drive there at motorway speed it would take about 150 days!' },
];

// ─── Healthy Eating ───────────────────────────────────────────────────────────
export interface FoodGroupItem {
  id: string;
  group: string;
  emoji: string;
  color: string;
  audioText: string;
  description: string;
  examples: string[];
  exampleEmojis: string[];
  whyWeNeedIt: string;
  funFact: string;
}

export const healthyEatingData: FoodGroupItem[] = [
  {
    id: 'fruits-veg',
    group: 'Fruits & Vegetables',
    emoji: '🥦',
    color: '#6BCB77',
    audioText: 'Fruits and vegetables!',
    description: 'Fruits and vegetables come in every colour of the rainbow and are packed with vitamins and minerals.',
    examples: ['Apple', 'Carrot', 'Broccoli', 'Banana', 'Strawberry'],
    exampleEmojis: ['🍎', '🥕', '🥦', '🍌', '🍓'],
    whyWeNeedIt: 'They give your body vitamins that fight illness and keep you strong.',
    funFact: 'Eating fruits and vegetables of every colour gives your body different vitamins. Try to eat a rainbow every day — red, orange, yellow, green, and purple foods!',
  },
  {
    id: 'grains',
    group: 'Bread & Grains',
    emoji: '🍞',
    color: '#FFD93D',
    audioText: 'Bread and grains!',
    description: 'Bread, pasta, rice, and cereals give your body energy to move, play, and think.',
    examples: ['Bread', 'Rice', 'Pasta', 'Oats', 'Corn'],
    exampleEmojis: ['🍞', '🍚', '🍝', '🥣', '🌽'],
    whyWeNeedIt: 'They give you energy — like fuel in a car — to power all your activities.',
    funFact: 'Whole grains like oats and brown bread are even better for you than white bread because they contain all parts of the grain including the outer husk!',
  },
  {
    id: 'protein',
    group: 'Protein Foods',
    emoji: '🥚',
    color: '#FF6B6B',
    audioText: 'Protein foods!',
    description: 'Eggs, fish, meat, beans, and nuts contain protein which helps your body grow and repair itself.',
    examples: ['Eggs', 'Fish', 'Chicken', 'Beans', 'Nuts'],
    exampleEmojis: ['🥚', '🐟', '🍗', '🫘', '🥜'],
    whyWeNeedIt: 'Protein builds your muscles and helps your body heal when you have a cut or a bruise.',
    funFact: 'Your hair and fingernails are made mostly of a protein called keratin. So eating enough protein actually helps your hair grow strong and shiny!',
  },
  {
    id: 'dairy',
    group: 'Dairy & Calcium',
    emoji: '🥛',
    color: '#6EC6F5',
    audioText: 'Dairy foods!',
    description: 'Milk, cheese, and yogurt contain calcium which makes your bones and teeth strong.',
    examples: ['Milk', 'Cheese', 'Yogurt', 'Butter', 'Cream'],
    exampleEmojis: ['🥛', '🧀', '🫙', '🧈', '🍦'],
    whyWeNeedIt: 'Calcium makes your bones and teeth hard and strong so they do not break easily.',
    funFact: 'Children need more calcium than adults because their bones are still growing! Your bones will keep growing until you are about 20 years old.',
  },
  {
    id: 'water',
    group: 'Water',
    emoji: '💧',
    color: '#6EC6F5',
    audioText: 'Water is so important!',
    description: 'Water is the most important drink of all. Your body is mostly water and needs it to work properly.',
    examples: ['Water', 'Milk', 'Fruit juice', 'Herbal tea', 'Coconut water'],
    exampleEmojis: ['💧', '🥛', '🍊', '🍵', '🥥'],
    whyWeNeedIt: 'Water keeps every part of your body working — your brain, heart, muscles, and skin all need it.',
    funFact: 'You should drink about 6 to 8 glasses of water every day! When you feel thirsty, your body is already a little bit dehydrated — so keep sipping water throughout the day.',
  },
  {
    id: 'treats',
    group: 'Treats (Sometimes Foods)',
    emoji: '🍭',
    color: '#C77DFF',
    audioText: 'Treats are sometimes foods!',
    description: 'Sweets, cakes, crisps, and fizzy drinks are treats. They taste lovely but should only be eaten sometimes.',
    examples: ['Chocolate', 'Sweets', 'Crisps', 'Cake', 'Fizzy drinks'],
    exampleEmojis: ['🍫', '🍬', '🍟', '🎂', '🥤'],
    whyWeNeedIt: 'Treats can be enjoyed at special times but too many can damage teeth and make you feel sluggish.',
    funFact: 'Sweets and fizzy drinks contain a lot of sugar. Too much sugar can cause tooth decay — that is why dentists remind you to brush your teeth twice every day!',
  },
];

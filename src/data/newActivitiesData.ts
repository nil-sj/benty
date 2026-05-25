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
  { id: 'ph-s', letter: 'S', sound: 'sss', soundWord: 'sss like a snake!', words: ['sun', 'sock', 'sea'], emojis: ['☀️','🧦','🌊'], audioText: 'S says sss! Like in sun, sock, and sea.' },
  { id: 'ph-a', letter: 'A', sound: 'a', soundWord: 'a like apple!', words: ['ant', 'apple', 'axe'], emojis: ['🐜','🍎','🪓'], audioText: 'A says a! Like in ant, apple, and axe.' },
  { id: 'ph-t', letter: 'T', sound: 'ttt', soundWord: 'ttt like a tap!', words: ['top', 'tap', 'ten'], emojis: ['🎵','🚰','🔟'], audioText: 'T says ttt! Like in top, tap, and ten.' },
  { id: 'ph-i', letter: 'I', sound: 'i', soundWord: 'i like igloo!', words: ['itch', 'ink', 'ill'], emojis: ['🏠','✒️','🤒'], audioText: 'I says i! Like in itch, ink, and ill.' },
  { id: 'ph-p', letter: 'P', sound: 'ppp', soundWord: 'ppp like a pop!', words: ['pig', 'pen', 'pin'], emojis: ['🐷','🖊️','📌'], audioText: 'P says ppp! Like in pig, pen, and pin.' },
  { id: 'ph-n', letter: 'N', sound: 'nnn', soundWord: 'nnn like a nose!', words: ['net', 'nap', 'nut'], emojis: ['🥅','😴','🥜'], audioText: 'N says nnn! Like in net, nap, and nut.' },
  { id: 'ph-m', letter: 'M', sound: 'mmm', soundWord: 'mmm like yummy!', words: ['map', 'mud', 'men'], emojis: ['🗺️','🪣','👨'], audioText: 'M says mmm! Like in map, mud, and men.' },
  { id: 'ph-d', letter: 'D', sound: 'ddd', soundWord: 'ddd like a drum!', words: ['dog', 'dig', 'dip'], emojis: ['🐶','⛏️','🍦'], audioText: 'D says ddd! Like in dog, dig, and dip.' },
  { id: 'ph-g', letter: 'G', sound: 'ggg', soundWord: 'ggg like a growl!', words: ['get', 'gap', 'gum'], emojis: ['🎯','🕳️','🍬'], audioText: 'G says ggg! Like in get, gap, and gum.' },
  { id: 'ph-o', letter: 'O', sound: 'o', soundWord: 'o like octopus!', words: ['ox', 'off', 'odd'], emojis: ['🐂','💡','🔢'], audioText: 'O says o! Like in ox, off, and odd.' },
  { id: 'ph-c', letter: 'C', sound: 'k', soundWord: 'k like a click!', words: ['cat', 'cup', 'cod'], emojis: ['🐱','☕','🐟'], audioText: 'C says k! Like in cat, cup, and cod.' },
  { id: 'ph-k', letter: 'K', sound: 'k', soundWord: 'k like a kick!', words: ['kit', 'kid', 'ken'], emojis: ['🧰','👦','🔑'], audioText: 'K says k! Like in kit, kid, and key.' },
  { id: 'ph-e', letter: 'E', sound: 'e', soundWord: 'e like egg!', words: ['egg', 'end', 'elf'], emojis: ['🥚','🔚','🧝'], audioText: 'E says e! Like in egg, end, and elf.' },
  { id: 'ph-u', letter: 'U', sound: 'u', soundWord: 'u like umbrella!', words: ['up', 'us', 'urn'], emojis: ['⬆️','👥','🏺'], audioText: 'U says u! Like in up, us, and urn.' },
  { id: 'ph-r', letter: 'R', sound: 'rrr', soundWord: 'rrr like a growl!', words: ['rat', 'run', 'rug'], emojis: ['🐀','🏃','🪣'], audioText: 'R says rrr! Like in rat, run, and rug.' },
  { id: 'ph-h', letter: 'H', sound: 'h', soundWord: 'h like a huff!', words: ['hat', 'hop', 'hen'], emojis: ['🎩','🐰','🐔'], audioText: 'H says h! Like in hat, hop, and hen.' },
  { id: 'ph-b', letter: 'B', sound: 'bbb', soundWord: 'bbb like a buzz!', words: ['bat', 'big', 'bed'], emojis: ['🦇','⬆️','🛏️'], audioText: 'B says bbb! Like in bat, big, and bed.' },
  { id: 'ph-f', letter: 'F', sound: 'fff', soundWord: 'fff like a fizz!', words: ['fan', 'fit', 'fog'], emojis: ['🌀','💪','🌫️'], audioText: 'F says fff! Like in fan, fit, and fog.' },
  { id: 'ph-l', letter: 'L', sound: 'lll', soundWord: 'lll like la la la!', words: ['log', 'leg', 'lip'], emojis: ['🪵','🦵','👄'], audioText: 'L says lll! Like in log, leg, and lip.' },
  { id: 'ph-j', letter: 'J', sound: 'jjj', soundWord: 'jjj like jump!', words: ['jug', 'jet', 'job'], emojis: ['🫙','✈️','💼'], audioText: 'J says jjj! Like in jug, jet, and job.' },
  { id: 'ph-v', letter: 'V', sound: 'vvv', soundWord: 'vvv like a vroom!', words: ['van', 'vet', 'vow'], emojis: ['🚐','🩺','💍'], audioText: 'V says vvv! Like in van, vet, and vow.' },
  { id: 'ph-w', letter: 'W', sound: 'www', soundWord: 'www like wind!', words: ['web', 'win', 'wet'], emojis: ['🕸️','🏆','💧'], audioText: 'W says www! Like in web, win, and wet.' },
  { id: 'ph-x', letter: 'X', sound: 'ks', soundWord: 'ks like box!', words: ['fox', 'box', 'wax'], emojis: ['🦊','📦','🕯️'], audioText: 'X says ks! Like in fox, box, and wax.' },
  { id: 'ph-y', letter: 'Y', sound: 'y', soundWord: 'y like yes!', words: ['yam', 'yet', 'yap'], emojis: ['🍠','✅','💬'], audioText: 'Y says y! Like in yam, yet, and yap.' },
  { id: 'ph-z', letter: 'Z', sound: 'zzz', soundWord: 'zzz like a bee!', words: ['zip', 'zoo', 'zap'], emojis: ['🤐','🦁','⚡'], audioText: 'Z says zzz! Like in zip, zoo, and zap.' },
  { id: 'ph-qu', letter: 'QU', sound: 'kw', soundWord: 'kw like queen!', words: ['quiz', 'quit', 'quilt'], emojis: ['❓','🚪','🛌'], audioText: 'QU says kw! Like in quiz, quit, and quilt.' },
];

// ─── Reading: CVC Words (Consonant-Vowel-Consonant) ───────────────────────────
export interface CVCWord {
  id: string;
  word: string;
  emoji: string;
  breakdown: [string, string, string]; // e.g. ['c','a','t']
  audioText: string;
  sentence: string;
}

export const cvcWordsData: CVCWord[] = [
  // -at family
  { id: 'cat', word: 'cat', emoji: '🐱', breakdown: ['c','a','t'], audioText: 'c-a-t, cat!', sentence: 'The cat sat on the mat.' },
  { id: 'bat', word: 'bat', emoji: '🦇', breakdown: ['b','a','t'], audioText: 'b-a-t, bat!', sentence: 'The bat flew at night.' },
  { id: 'hat', word: 'hat', emoji: '🎩', breakdown: ['h','a','t'], audioText: 'h-a-t, hat!', sentence: 'Put the hat on your head.' },
  { id: 'mat', word: 'mat', emoji: '🪣', breakdown: ['m','a','t'], audioText: 'm-a-t, mat!', sentence: 'Wipe your feet on the mat.' },
  { id: 'rat', word: 'rat', emoji: '🐀', breakdown: ['r','a','t'], audioText: 'r-a-t, rat!', sentence: 'The rat ran under the bed.' },
  // -an family
  { id: 'can', word: 'can', emoji: '🥫', breakdown: ['c','a','n'], audioText: 'c-a-n, can!', sentence: 'Open the can of beans.' },
  { id: 'fan', word: 'fan', emoji: '🌀', breakdown: ['f','a','n'], audioText: 'f-a-n, fan!', sentence: 'The fan keeps me cool.' },
  { id: 'man', word: 'man', emoji: '👨', breakdown: ['m','a','n'], audioText: 'm-a-n, man!', sentence: 'The man ran to the bus.' },
  { id: 'pan', word: 'pan', emoji: '🍳', breakdown: ['p','a','n'], audioText: 'p-a-n, pan!', sentence: 'Cook eggs in the pan.' },
  // -ig family
  { id: 'big', word: 'big', emoji: '🐘', breakdown: ['b','i','g'], audioText: 'b-i-g, big!', sentence: 'The elephant is big.' },
  { id: 'dig', word: 'dig', emoji: '⛏️', breakdown: ['d','i','g'], audioText: 'd-i-g, dig!', sentence: 'Dig a hole in the sand.' },
  { id: 'pig', word: 'pig', emoji: '🐷', breakdown: ['p','i','g'], audioText: 'p-i-g, pig!', sentence: 'The pig is pink and fat.' },
  { id: 'wig', word: 'wig', emoji: '👩‍🦳', breakdown: ['w','i','g'], audioText: 'w-i-g, wig!', sentence: 'The clown wears a big wig.' },
  // -og family
  { id: 'dog', word: 'dog', emoji: '🐶', breakdown: ['d','o','g'], audioText: 'd-o-g, dog!', sentence: 'My dog loves to run.' },
  { id: 'fog', word: 'fog', emoji: '🌫️', breakdown: ['f','o','g'], audioText: 'f-o-g, fog!', sentence: 'The fog made it hard to see.' },
  { id: 'hog', word: 'hog', emoji: '🐗', breakdown: ['h','o','g'], audioText: 'h-o-g, hog!', sentence: 'The hog ate all the food.' },
  { id: 'log', word: 'log', emoji: '🪵', breakdown: ['l','o','g'], audioText: 'l-o-g, log!', sentence: 'Sit on the log in the park.' },
  // -un family
  { id: 'bun', word: 'bun', emoji: '🍔', breakdown: ['b','u','n'], audioText: 'b-u-n, bun!', sentence: 'A burger goes in a bun.' },
  { id: 'fun', word: 'fun', emoji: '🎉', breakdown: ['f','u','n'], audioText: 'f-u-n, fun!', sentence: 'Playing is so much fun!' },
  { id: 'run', word: 'run', emoji: '🏃', breakdown: ['r','u','n'], audioText: 'r-u-n, run!', sentence: 'Run as fast as you can!' },
  { id: 'sun', word: 'sun', emoji: '☀️', breakdown: ['s','u','n'], audioText: 's-u-n, sun!', sentence: 'The sun is bright and warm.' },
  // -op family
  { id: 'hop', word: 'hop', emoji: '🐸', breakdown: ['h','o','p'], audioText: 'h-o-p, hop!', sentence: 'Frogs can hop very far.' },
  { id: 'mop', word: 'mop', emoji: '🧹', breakdown: ['m','o','p'], audioText: 'm-o-p, mop!', sentence: 'Mop up the water spill.' },
  { id: 'top', word: 'top', emoji: '🌀', breakdown: ['t','o','p'], audioText: 't-o-p, top!', sentence: 'Spin the top around and around.' },
];

// ─── Reading: Simple Sentences ─────────────────────────────────────────────────
export interface SimpleSentence {
  id: string;
  sentence: string;
  words: string[];
  emoji: string;
  audioText: string;
}

export const simpleSentencesData: SimpleSentence[] = [
  { id: 'ss1', sentence: 'The cat sat.', words: ['The','cat','sat'], emoji: '🐱', audioText: 'The cat sat.' },
  { id: 'ss2', sentence: 'I see a dog.', words: ['I','see','a','dog'], emoji: '🐶', audioText: 'I see a dog.' },
  { id: 'ss3', sentence: 'The sun is hot.', words: ['The','sun','is','hot'], emoji: '☀️', audioText: 'The sun is hot.' },
  { id: 'ss4', sentence: 'A big red bus.', words: ['A','big','red','bus'], emoji: '🚌', audioText: 'A big red bus.' },
  { id: 'ss5', sentence: 'I can run fast.', words: ['I','can','run','fast'], emoji: '🏃', audioText: 'I can run fast.' },
  { id: 'ss6', sentence: 'The frog can hop.', words: ['The','frog','can','hop'], emoji: '🐸', audioText: 'The frog can hop.' },
  { id: 'ss7', sentence: 'I like to eat.', words: ['I','like','to','eat'], emoji: '🍽️', audioText: 'I like to eat.' },
  { id: 'ss8', sentence: 'My dog is fun.', words: ['My','dog','is','fun'], emoji: '🐶', audioText: 'My dog is fun.' },
  { id: 'ss9', sentence: 'She can see me.', words: ['She','can','see','me'], emoji: '👀', audioText: 'She can see me.' },
  { id: 'ss10', sentence: 'We play in mud.', words: ['We','play','in','mud'], emoji: '🌧️', audioText: 'We play in mud.' },
  { id: 'ss11', sentence: 'The pig is pink.', words: ['The','pig','is','pink'], emoji: '🐷', audioText: 'The pig is pink.' },
  { id: 'ss12', sentence: 'Look at the bird!', words: ['Look','at','the','bird'], emoji: '🐦', audioText: 'Look at the bird!' },
];

// ─── Reading: Short Stories ────────────────────────────────────────────────────
export interface ShortStory {
  id: string;
  title: string;
  emoji: string;
  pages: Array<{
    text: string;
    emoji: string;
  }>;
}

export const shortStoriesData: ShortStory[] = [
  {
    id: 'cat-mat',
    title: 'The Cat on the Mat',
    emoji: '🐱',
    pages: [
      { text: 'There is a cat.', emoji: '🐱' },
      { text: 'The cat is fat.', emoji: '😺' },
      { text: 'The cat sat on a mat.', emoji: '🪣' },
      { text: 'The mat is flat.', emoji: '🟫' },
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
];

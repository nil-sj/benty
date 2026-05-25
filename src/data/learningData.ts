export interface LearningItem {
  id: string;
  name: string;
  emoji: string;
  category?: string;
  audioText?: string;
  funFact?: string;
}

// Numbers data
export interface NumberItem {
  number: number;
  word: string;
  emoji: string;
  audioText: string;
  funFact: string;
}

export const numbersData: NumberItem[] = [
  { number: 1, word: 'One', emoji: '1️⃣', audioText: 'This is number one.', funFact: 'You have one nose and one mouth!' },
  { number: 2, word: 'Two', emoji: '2️⃣', audioText: 'This is number two.', funFact: 'You have two eyes and two ears!' },
  { number: 3, word: 'Three', emoji: '3️⃣', audioText: 'This is number three.', funFact: 'A triangle has three sides!' },
  { number: 4, word: 'Four', emoji: '4️⃣', audioText: 'This is number four.', funFact: 'A car has four wheels!' },
  { number: 5, word: 'Five', emoji: '5️⃣', audioText: 'This is number five.', funFact: 'You have five fingers on each hand!' },
  { number: 6, word: 'Six', emoji: '6️⃣', audioText: 'This is number six.', funFact: 'A honeybee cell has six sides!' },
  { number: 7, word: 'Seven', emoji: '7️⃣', audioText: 'This is number seven.', funFact: 'A rainbow has seven colors!' },
  { number: 8, word: 'Eight', emoji: '8️⃣', audioText: 'This is number eight.', funFact: 'A spider has eight legs!' },
  { number: 9, word: 'Nine', emoji: '9️⃣', audioText: 'This is number nine.', funFact: 'A cat is said to have nine lives!' },
  { number: 10, word: 'Ten', emoji: '🔟', audioText: 'This is number ten.', funFact: 'You have ten fingers and ten toes!' },
];

// Shapes data
export interface ShapeItem {
  id: string;
  name: string;
  emoji: string;
  audioText: string;
  funFact: string;
  sides: number;
}

export const shapesData: ShapeItem[] = [
  { id: 'circle', name: 'Circle', emoji: '⭕', audioText: 'This is a circle.', funFact: 'A circle has no corners and no sides!', sides: 0 },
  { id: 'square', name: 'Square', emoji: '🟦', audioText: 'This is a square.', funFact: 'A square has four equal sides!', sides: 4 },
  { id: 'triangle', name: 'Triangle', emoji: '🔺', audioText: 'This is a triangle.', funFact: 'A triangle has three sides and three corners!', sides: 3 },
  { id: 'rectangle', name: 'Rectangle', emoji: '▬', audioText: 'This is a rectangle.', funFact: 'A rectangle has two long sides and two short sides!', sides: 4 },
  { id: 'star', name: 'Star', emoji: '⭐', audioText: 'This is a star.', funFact: 'Stars in the sky are actually huge balls of fire!', sides: 5 },
  { id: 'heart', name: 'Heart', emoji: '❤️', audioText: 'This is a heart.', funFact: 'We use hearts to show love!', sides: 0 },
  { id: 'diamond', name: 'Diamond', emoji: '💎', audioText: 'This is a diamond.', funFact: 'A diamond shape looks like a square tilted on its side!', sides: 4 },
  { id: 'oval', name: 'Oval', emoji: '🥚', audioText: 'This is an oval.', funFact: 'An oval looks like a stretched circle, like an egg!', sides: 0 },
];

// Colors data
export interface ColorItem {
  id: string;
  name: string;
  hex: string;
  emoji: string;
  audioText: string;
  funFact: string;
}

export const colorsData: ColorItem[] = [
  { id: 'red', name: 'Red', hex: '#FF3333', emoji: '🔴', audioText: 'This is red.', funFact: 'Apples, strawberries, and fire trucks are red!' },
  { id: 'orange', name: 'Orange', hex: '#FF8C00', emoji: '🟠', audioText: 'This is orange.', funFact: 'Oranges and carrots are orange!' },
  { id: 'yellow', name: 'Yellow', hex: '#FFD700', emoji: '🟡', audioText: 'This is yellow.', funFact: 'The sun and bananas are yellow!' },
  { id: 'green', name: 'Green', hex: '#22C55E', emoji: '🟢', audioText: 'This is green.', funFact: 'Grass, frogs, and broccoli are green!' },
  { id: 'blue', name: 'Blue', hex: '#3B82F6', emoji: '🔵', audioText: 'This is blue.', funFact: 'The sky and ocean are blue!' },
  { id: 'purple', name: 'Purple', hex: '#9333EA', emoji: '🟣', audioText: 'This is purple.', funFact: 'Grapes and lavender flowers are purple!' },
  { id: 'pink', name: 'Pink', hex: '#EC4899', emoji: '🩷', audioText: 'This is pink.', funFact: 'Flamingos are pink!' },
  { id: 'brown', name: 'Brown', hex: '#92400E', emoji: '🟤', audioText: 'This is brown.', funFact: 'Chocolate and tree bark are brown!' },
  { id: 'white', name: 'White', hex: '#F0F0F0', emoji: '⚪', audioText: 'This is white.', funFact: 'Snow and clouds are white!' },
  { id: 'black', name: 'Black', hex: '#1F2937', emoji: '⚫', audioText: 'This is black.', funFact: 'The night sky is black!' },
];

// Days of week
export interface ListItem {
  id: string;
  name: string;
  emoji: string;
  audioText: string;
  detail?: string;
}

export const daysOfWeekData: ListItem[] = [
  { id: 'monday', name: 'Monday', emoji: '🌙', audioText: 'Monday!', detail: 'The first day of the school week' },
  { id: 'tuesday', name: 'Tuesday', emoji: '⭐', audioText: 'Tuesday!', detail: 'Tuesday comes after Monday' },
  { id: 'wednesday', name: 'Wednesday', emoji: '🌿', audioText: 'Wednesday!', detail: 'Wednesday is the middle of the week' },
  { id: 'thursday', name: 'Thursday', emoji: '⚡', audioText: 'Thursday!', detail: 'Almost the weekend!' },
  { id: 'friday', name: 'Friday', emoji: '🎉', audioText: 'Friday!', detail: 'The last day of the school week' },
  { id: 'saturday', name: 'Saturday', emoji: '☀️', audioText: 'Saturday!', detail: 'Weekend fun day!' },
  { id: 'sunday', name: 'Sunday', emoji: '🌈', audioText: 'Sunday!', detail: 'Relax and get ready for Monday!' },
];

export const monthsOfYearData: ListItem[] = [
  { id: 'january', name: 'January', emoji: '❄️', audioText: 'January!', detail: 'The first month of the year' },
  { id: 'february', name: 'February', emoji: '💝', audioText: 'February!', detail: 'Valentine\'s Day is in February' },
  { id: 'march', name: 'March', emoji: '🌱', audioText: 'March!', detail: 'Spring begins in March!' },
  { id: 'april', name: 'April', emoji: '🌧️', audioText: 'April!', detail: 'April showers bring May flowers!' },
  { id: 'may', name: 'May', emoji: '🌸', audioText: 'May!', detail: 'Flowers bloom beautifully in May' },
  { id: 'june', name: 'June', emoji: '☀️', audioText: 'June!', detail: 'Summer starts in June!' },
  { id: 'july', name: 'July', emoji: '🎆', audioText: 'July!', detail: 'Fireworks in July!' },
  { id: 'august', name: 'August', emoji: '🏖️', audioText: 'August!', detail: 'Beach and sunshine month!' },
  { id: 'september', name: 'September', emoji: '🍂', audioText: 'September!', detail: 'Back to school in September!' },
  { id: 'october', name: 'October', emoji: '🎃', audioText: 'October!', detail: 'Halloween is in October!' },
  { id: 'november', name: 'November', emoji: '🍁', audioText: 'November!', detail: 'Leaves fall in November' },
  { id: 'december', name: 'December', emoji: '🎄', audioText: 'December!', detail: 'Holidays and the last month of the year!' },
];

export const seasonsData: ListItem[] = [
  { id: 'spring', name: 'Spring', emoji: '🌸', audioText: 'Spring!', detail: 'Flowers bloom and birds sing' },
  { id: 'summer', name: 'Summer', emoji: '☀️', audioText: 'Summer!', detail: 'Hot days, swimming, and ice cream' },
  { id: 'autumn', name: 'Autumn', emoji: '🍂', audioText: 'Autumn!', detail: 'Leaves turn orange, red, and yellow' },
  { id: 'winter', name: 'Winter', emoji: '❄️', audioText: 'Winter!', detail: 'Cold days, snow, and hot cocoa' },
];

// Fruits
export const fruitsData: LearningItem[] = [
  { id: 'apple', name: 'Apple', emoji: '🍎', category: 'Fruit', audioText: 'This is an apple.', funFact: 'Apples float in water because they are 25% air!' },
  { id: 'banana', name: 'Banana', emoji: '🍌', category: 'Fruit', audioText: 'This is a banana.', funFact: 'Bananas are technically berries!' },
  { id: 'orange', name: 'Orange', emoji: '🍊', category: 'Fruit', audioText: 'This is an orange.', funFact: 'Oranges are a great source of vitamin C!' },
  { id: 'grapes', name: 'Grapes', emoji: '🍇', category: 'Fruit', audioText: 'These are grapes.', funFact: 'Grapes grow in big bunches on vines!' },
  { id: 'strawberry', name: 'Strawberry', emoji: '🍓', category: 'Fruit', audioText: 'This is a strawberry.', funFact: 'Strawberries are the only fruit with seeds on the outside!' },
  { id: 'watermelon', name: 'Watermelon', emoji: '🍉', category: 'Fruit', audioText: 'This is a watermelon.', funFact: 'Watermelons are 92% water!' },
  { id: 'pineapple', name: 'Pineapple', emoji: '🍍', category: 'Fruit', audioText: 'This is a pineapple.', funFact: 'It takes 2 years for a pineapple to grow!' },
  { id: 'mango', name: 'Mango', emoji: '🥭', category: 'Fruit', audioText: 'This is a mango.', funFact: 'Mango is the most popular fruit in the world!' },
  { id: 'cherry', name: 'Cherry', emoji: '🍒', category: 'Fruit', audioText: 'These are cherries.', funFact: 'Cherries come in pairs on the same stem!' },
  { id: 'lemon', name: 'Lemon', emoji: '🍋', category: 'Fruit', audioText: 'This is a lemon.', funFact: 'Lemons are very sour because they have a lot of acid!' },
  { id: 'pear', name: 'Pear', emoji: '🍐', category: 'Fruit', audioText: 'This is a pear.', funFact: 'Pears ripen from the inside out!' },
  { id: 'peach', name: 'Peach', emoji: '🍑', category: 'Fruit', audioText: 'This is a peach.', funFact: 'Peaches are fuzzy on the outside!' },
];

// Vegetables
export const vegetablesData: LearningItem[] = [
  { id: 'carrot', name: 'Carrot', emoji: '🥕', category: 'Vegetable', audioText: 'This is a carrot.', funFact: 'Carrots are great for your eyesight!' },
  { id: 'broccoli', name: 'Broccoli', emoji: '🥦', category: 'Vegetable', audioText: 'This is broccoli.', funFact: 'Broccoli looks like tiny green trees!' },
  { id: 'corn', name: 'Corn', emoji: '🌽', category: 'Vegetable', audioText: 'This is corn.', funFact: 'Corn always has an even number of rows!' },
  { id: 'potato', name: 'Potato', emoji: '🥔', category: 'Vegetable', audioText: 'This is a potato.', funFact: 'Potatoes grow underground!' },
  { id: 'tomato', name: 'Tomato', emoji: '🍅', category: 'Vegetable', audioText: 'This is a tomato.', funFact: 'A tomato is technically a fruit, but we eat it like a vegetable!' },
  { id: 'cucumber', name: 'Cucumber', emoji: '🥒', category: 'Vegetable', audioText: 'This is a cucumber.', funFact: 'Cucumbers are 96% water!' },
  { id: 'pepper', name: 'Bell Pepper', emoji: '🫑', category: 'Vegetable', audioText: 'This is a bell pepper.', funFact: 'Bell peppers come in red, yellow, green, and orange!' },
  { id: 'eggplant', name: 'Eggplant', emoji: '🍆', category: 'Vegetable', audioText: 'This is an eggplant.', funFact: 'Eggplants are purple and shiny!' },
  { id: 'mushroom', name: 'Mushroom', emoji: '🍄', category: 'Vegetable', audioText: 'This is a mushroom.', funFact: 'Mushrooms are not actually plants — they\'re fungi!' },
  { id: 'onion', name: 'Onion', emoji: '🧅', category: 'Vegetable', audioText: 'This is an onion.', funFact: 'Onions can make your eyes water when you cut them!' },
];

// Animals
export const animalsData: LearningItem[] = [
  { id: 'lion', name: 'Lion', emoji: '🦁', category: 'Animal', audioText: 'This is a lion.', funFact: 'Lions are called the king of the jungle!' },
  { id: 'elephant', name: 'Elephant', emoji: '🐘', category: 'Animal', audioText: 'This is an elephant.', funFact: 'Elephants never forget! They have great memories.' },
  { id: 'giraffe', name: 'Giraffe', emoji: '🦒', category: 'Animal', audioText: 'This is a giraffe.', funFact: 'Giraffes are the tallest animals on Earth!' },
  { id: 'penguin', name: 'Penguin', emoji: '🐧', category: 'Animal', audioText: 'This is a penguin.', funFact: 'Penguins can\'t fly but they\'re amazing swimmers!' },
  { id: 'dolphin', name: 'Dolphin', emoji: '🐬', category: 'Animal', audioText: 'This is a dolphin.', funFact: 'Dolphins are one of the smartest animals!' },
  { id: 'tiger', name: 'Tiger', emoji: '🐯', category: 'Animal', audioText: 'This is a tiger.', funFact: 'No two tigers have the same stripe pattern!' },
  { id: 'bear', name: 'Bear', emoji: '🐻', category: 'Animal', audioText: 'This is a bear.', funFact: 'Bears sleep through the whole winter!' },
  { id: 'rabbit', name: 'Rabbit', emoji: '🐰', category: 'Animal', audioText: 'This is a rabbit.', funFact: 'Rabbits can hop very fast — up to 45 miles per hour!' },
  { id: 'frog', name: 'Frog', emoji: '🐸', category: 'Animal', audioText: 'This is a frog.', funFact: 'Frogs drink water through their skin!' },
  { id: 'owl', name: 'Owl', emoji: '🦉', category: 'Animal', audioText: 'This is an owl.', funFact: 'Owls can turn their heads almost all the way around!' },
  { id: 'parrot', name: 'Parrot', emoji: '🦜', category: 'Animal', audioText: 'This is a parrot.', funFact: 'Parrots can learn to talk and mimic sounds!' },
  { id: 'zebra', name: 'Zebra', emoji: '🦓', category: 'Animal', audioText: 'This is a zebra.', funFact: 'Every zebra has its own unique stripe pattern!' },
];

// Vehicles
export const vehiclesData: LearningItem[] = [
  { id: 'car', name: 'Car', emoji: '🚗', category: 'Vehicle', audioText: 'This is a car.', funFact: 'Cars have four wheels and run on roads!' },
  { id: 'bus', name: 'Bus', emoji: '🚌', category: 'Vehicle', audioText: 'This is a bus.', funFact: 'Buses can carry many people at the same time!' },
  { id: 'airplane', name: 'Airplane', emoji: '✈️', category: 'Vehicle', audioText: 'This is an airplane.', funFact: 'Airplanes can fly thousands of miles in the air!' },
  { id: 'train', name: 'Train', emoji: '🚂', category: 'Vehicle', audioText: 'This is a train.', funFact: 'Trains run on special tracks called rails!' },
  { id: 'boat', name: 'Boat', emoji: '⛵', category: 'Vehicle', audioText: 'This is a boat.', funFact: 'Boats float on water and are used for travel and fishing!' },
  { id: 'bicycle', name: 'Bicycle', emoji: '🚲', category: 'Vehicle', audioText: 'This is a bicycle.', funFact: 'Bicycles have two wheels and you power them by pedaling!' },
  { id: 'truck', name: 'Truck', emoji: '🚛', category: 'Vehicle', audioText: 'This is a truck.', funFact: 'Trucks carry heavy loads from place to place!' },
  { id: 'helicopter', name: 'Helicopter', emoji: '🚁', category: 'Vehicle', audioText: 'This is a helicopter.', funFact: 'Helicopters can fly straight up and hover in the air!' },
  { id: 'rocket', name: 'Rocket', emoji: '🚀', category: 'Vehicle', audioText: 'This is a rocket.', funFact: 'Rockets travel to outer space!' },
  { id: 'ambulance', name: 'Ambulance', emoji: '🚑', category: 'Vehicle', audioText: 'This is an ambulance.', funFact: 'Ambulances help people who are sick get to the hospital fast!' },
];

// Songs
export interface SongItem {
  id: string;
  title: string;
  icon: string;
  artist?: string;
  description?: string;
  audio?: string;
  lyricsHint?: string;
}

export const songsData: SongItem[] = [
  { id: 'twinkle', title: 'Twinkle Twinkle Little Star', icon: '⭐', description: 'A classic lullaby about a twinkling star', lyricsHint: 'Twinkle, twinkle, little star, how I wonder what you are...' },
  { id: 'old-macdonald', title: 'Old MacDonald Had a Farm', icon: '🐄', description: 'Join Old MacDonald on his fun farm!', lyricsHint: 'Old MacDonald had a farm, E-I-E-I-O...' },
  { id: 'mary-lamb', title: 'Mary Had a Little Lamb', icon: '🐑', description: 'A story about Mary and her little lamb', lyricsHint: 'Mary had a little lamb, its fleece was white as snow...' },
  { id: 'baa-baa', title: 'Baa Baa Black Sheep', icon: '🐏', description: 'The friendly black sheep song', lyricsHint: 'Baa baa black sheep, have you any wool? Yes sir, yes sir, three bags full...' },
  { id: 'humpty', title: 'Humpty Dumpty', icon: '🥚', description: 'Poor Humpty Dumpty sat on a wall...', lyricsHint: 'Humpty Dumpty sat on a wall, Humpty Dumpty had a great fall...' },
  { id: 'wheels-bus', title: 'Wheels on the Bus', icon: '🚌', description: 'The wheels go round and round!', lyricsHint: 'The wheels on the bus go round and round, round and round...' },
  { id: 'row-boat', title: 'Row Row Row Your Boat', icon: '⛵', description: 'A gentle rowing song', lyricsHint: 'Row, row, row your boat, gently down the stream...' },
  { id: 'happy-birthday', title: 'Happy Birthday to You', icon: '🎂', description: 'The most famous birthday song!', lyricsHint: 'Happy birthday to you, happy birthday to you...' },
];

// Sight words
export interface SightWordItem {
  word: string;
  sentence: string;
  audioText: string;
}

export const sightWordsData: SightWordItem[] = [
  { word: 'the', sentence: 'The sun is bright.', audioText: 'The.' },
  { word: 'a', sentence: 'I see a cat.', audioText: 'A.' },
  { word: 'is', sentence: 'The sky is blue.', audioText: 'Is.' },
  { word: 'I', sentence: 'I like to play.', audioText: 'I.' },
  { word: 'in', sentence: 'The fish is in the water.', audioText: 'In.' },
  { word: 'it', sentence: 'It is fun!', audioText: 'It.' },
  { word: 'and', sentence: 'I like cats and dogs.', audioText: 'And.' },
  { word: 'can', sentence: 'I can jump high.', audioText: 'Can.' },
  { word: 'see', sentence: 'I can see the stars.', audioText: 'See.' },
  { word: 'we', sentence: 'We can play together.', audioText: 'We.' },
  { word: 'to', sentence: 'I like to sing.', audioText: 'To.' },
  { word: 'my', sentence: 'This is my toy.', audioText: 'My.' },
  { word: 'you', sentence: 'I love you!', audioText: 'You.' },
  { word: 'he', sentence: 'He is happy.', audioText: 'He.' },
  { word: 'she', sentence: 'She can run fast.', audioText: 'She.' },
];

// Word families
export interface WordFamilyItem {
  ending: string;
  startingLetters: string[];
  words: string[];
}

export const wordFamiliesData: WordFamilyItem[] = [
  { ending: 'at', startingLetters: ['b', 'c', 'h', 'm', 'r', 's'], words: ['bat', 'cat', 'hat', 'mat', 'rat', 'sat'] },
  { ending: 'an', startingLetters: ['c', 'f', 'm', 'p', 'r', 'v'], words: ['can', 'fan', 'man', 'pan', 'ran', 'van'] },
  { ending: 'ig', startingLetters: ['b', 'd', 'f', 'j', 'p', 'w'], words: ['big', 'dig', 'fig', 'jig', 'pig', 'wig'] },
  { ending: 'og', startingLetters: ['b', 'd', 'f', 'h', 'l', 'r'], words: ['bog', 'dog', 'fog', 'hog', 'log', 'rog'] },
  { ending: 'un', startingLetters: ['b', 'f', 'g', 'r', 's', 'p'], words: ['bun', 'fun', 'gun', 'run', 'sun', 'pun'] },
  { ending: 'op', startingLetters: ['h', 'm', 'p', 's', 't', 'c'], words: ['hop', 'mop', 'pop', 'stop', 'top', 'cop'] },
];

// Quiz data
export interface QuizItem {
  id: string;
  emoji: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const quizzesData: QuizItem[] = [
  { id: 'q1', emoji: '🍎', question: 'What letter does Apple start with?', options: ['A', 'B', 'C', 'D'], correctIndex: 0, explanation: 'Apple starts with the letter A!' },
  { id: 'q2', emoji: '🐘', question: 'How many trunks does an elephant have?', options: ['2', '3', '1', '4'], correctIndex: 2, explanation: 'An elephant has just one trunk!' },
  { id: 'q3', emoji: '🌈', question: 'How many colors does a rainbow have?', options: ['5', '7', '6', '8'], correctIndex: 1, explanation: 'A rainbow has 7 colors!' },
  { id: 'q4', emoji: '🕷️', question: 'How many legs does a spider have?', options: ['6', '4', '10', '8'], correctIndex: 3, explanation: 'Spiders have 8 legs!' },
  { id: 'q5', emoji: '🐟', question: 'Where do fish live?', options: ['In trees', 'In water', 'Underground', 'In clouds'], correctIndex: 1, explanation: 'Fish live in water!' },
  { id: 'q6', emoji: '☀️', question: 'What gives us light during the day?', options: ['Moon', 'Stars', 'Sun', 'Lamp'], correctIndex: 2, explanation: 'The Sun gives us light during the day!' },
  { id: 'q7', emoji: '🐦', question: 'Which animal has feathers?', options: ['Dog', 'Cat', 'Fish', 'Bird'], correctIndex: 3, explanation: 'Birds have feathers!' },
  { id: 'q8', emoji: '🍌', question: 'What color is a banana?', options: ['Red', 'Blue', 'Yellow', 'Green'], correctIndex: 2, explanation: 'A ripe banana is yellow!' },
];

// Countable objects for counting activity
export interface CountableObject {
  id: string;
  singular: string;
  plural: string;
  emoji: string;
}

export const countableObjects: CountableObject[] = [
  { id: 'stars', singular: 'star', plural: 'stars', emoji: '⭐' },
  { id: 'hearts', singular: 'heart', plural: 'hearts', emoji: '❤️' },
  { id: 'apples', singular: 'apple', plural: 'apples', emoji: '🍎' },
  { id: 'balls', singular: 'ball', plural: 'balls', emoji: '🎾' },
  { id: 'flowers', singular: 'flower', plural: 'flowers', emoji: '🌸' },
  { id: 'fish', singular: 'fish', plural: 'fish', emoji: '🐟' },
  { id: 'butterflies', singular: 'butterfly', plural: 'butterflies', emoji: '🦋' },
  { id: 'moons', singular: 'moon', plural: 'moons', emoji: '🌙' },
];

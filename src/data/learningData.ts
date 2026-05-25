export interface LearningItem {
  id: string;
  name: string;
  emoji: string;
  category?: string;
  audioText?: string;
  funFact?: string;
}

// ─── Numbers ───────────────────────────────────────────────────────────────
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
  { number: 3, word: 'Three', emoji: '3️⃣', audioText: 'This is number three.', funFact: 'A triangle has three sides and three corners!' },
  { number: 4, word: 'Four', emoji: '4️⃣', audioText: 'This is number four.', funFact: 'A car has four wheels!' },
  { number: 5, word: 'Five', emoji: '5️⃣', audioText: 'This is number five.', funFact: 'You have five fingers on each hand!' },
  { number: 6, word: 'Six', emoji: '6️⃣', audioText: 'This is number six.', funFact: 'A honeybee cell has six sides!' },
  { number: 7, word: 'Seven', emoji: '7️⃣', audioText: 'This is number seven.', funFact: 'A rainbow has seven beautiful colors!' },
  { number: 8, word: 'Eight', emoji: '8️⃣', audioText: 'This is number eight.', funFact: 'A spider has eight legs!' },
  { number: 9, word: 'Nine', emoji: '9️⃣', audioText: 'This is number nine.', funFact: 'A cat is said to have nine lives!' },
  { number: 10, word: 'Ten', emoji: '🔟', audioText: 'This is number ten.', funFact: 'You have ten fingers and ten toes!' },
  { number: 11, word: 'Eleven', emoji: '1️⃣1️⃣', audioText: 'This is number eleven.', funFact: 'Eleven is the first number that has two digits and is said out loud as a single word!' },
  { number: 12, word: 'Twelve', emoji: '1️⃣2️⃣', audioText: 'This is number twelve.', funFact: 'There are twelve months in a year!' },
  { number: 13, word: 'Thirteen', emoji: '1️⃣3️⃣', audioText: 'This is number thirteen.', funFact: 'Thirteen is ten plus three!' },
  { number: 14, word: 'Fourteen', emoji: '1️⃣4️⃣', audioText: 'This is number fourteen.', funFact: 'Fourteen days make two full weeks!' },
  { number: 15, word: 'Fifteen', emoji: '1️⃣5️⃣', audioText: 'This is number fifteen.', funFact: 'Fifteen minutes is a quarter of an hour!' },
  { number: 16, word: 'Sixteen', emoji: '1️⃣6️⃣', audioText: 'This is number sixteen.', funFact: 'Sixteen is four times four!' },
  { number: 17, word: 'Seventeen', emoji: '1️⃣7️⃣', audioText: 'This is number seventeen.', funFact: 'Seventeen is ten plus seven!' },
  { number: 18, word: 'Eighteen', emoji: '1️⃣8️⃣', audioText: 'This is number eighteen.', funFact: 'Eighteen is two times nine!' },
  { number: 19, word: 'Nineteen', emoji: '1️⃣9️⃣', audioText: 'This is number nineteen.', funFact: 'Nineteen is one less than twenty!' },
  { number: 20, word: 'Twenty', emoji: '2️⃣0️⃣', audioText: 'This is number twenty.', funFact: 'Twenty is the same as two tens!' },
];

// ─── Shapes ────────────────────────────────────────────────────────────────
export interface ShapeItem {
  id: string;
  name: string;
  emoji: string;
  audioText: string;
  funFact: string;
  sides: number;
}

export const shapesData: ShapeItem[] = [
  { id: 'circle', name: 'Circle', emoji: '⭕', audioText: 'This is a circle.', funFact: 'A circle has no corners and no straight sides — it is perfectly round!', sides: 0 },
  { id: 'square', name: 'Square', emoji: '🟦', audioText: 'This is a square.', funFact: 'A square has four equal sides and four equal corners!', sides: 4 },
  { id: 'triangle', name: 'Triangle', emoji: '🔺', audioText: 'This is a triangle.', funFact: 'A triangle has three sides and three corners!', sides: 3 },
  { id: 'rectangle', name: 'Rectangle', emoji: '▬', audioText: 'This is a rectangle.', funFact: 'A rectangle has two long sides and two short sides!', sides: 4 },
  { id: 'star', name: 'Star', emoji: '⭐', audioText: 'This is a star.', funFact: 'A star shape has five points. Real stars in the sky are giant balls of fire!', sides: 5 },
  { id: 'heart', name: 'Heart', emoji: '❤️', audioText: 'This is a heart.', funFact: 'We use the heart shape to show love and kindness!', sides: 0 },
  { id: 'diamond', name: 'Diamond', emoji: '💎', audioText: 'This is a diamond.', funFact: 'A diamond shape is a square tilted on one of its corners!', sides: 4 },
  { id: 'oval', name: 'Oval', emoji: '🥚', audioText: 'This is an oval.', funFact: 'An oval is like a stretched circle — it looks just like an egg!', sides: 0 },
  { id: 'pentagon', name: 'Pentagon', emoji: '⬠', audioText: 'This is a pentagon.', funFact: 'A pentagon has five sides and five corners!', sides: 5 },
  { id: 'hexagon', name: 'Hexagon', emoji: '⬡', audioText: 'This is a hexagon.', funFact: 'A hexagon has six sides. Honeybees build their honeycombs in hexagons!', sides: 6 },
  { id: 'octagon', name: 'Octagon', emoji: '🛑', audioText: 'This is an octagon.', funFact: 'An octagon has eight sides. Stop signs are octagons!', sides: 8 },
  { id: 'crescent', name: 'Crescent', emoji: '🌙', audioText: 'This is a crescent.', funFact: 'A crescent looks like the moon when only part of it is lit up!', sides: 0 },
];

// ─── Colors ────────────────────────────────────────────────────────────────
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
  { id: 'orange', name: 'Orange', hex: '#FF8C00', emoji: '🟠', audioText: 'This is orange.', funFact: 'Oranges, carrots, and tigers are orange!' },
  { id: 'yellow', name: 'Yellow', hex: '#FFD700', emoji: '🟡', audioText: 'This is yellow.', funFact: 'The sun, bananas, and daffodils are yellow!' },
  { id: 'green', name: 'Green', hex: '#22C55E', emoji: '🟢', audioText: 'This is green.', funFact: 'Grass, frogs, peas, and broccoli are green!' },
  { id: 'blue', name: 'Blue', hex: '#3B82F6', emoji: '🔵', audioText: 'This is blue.', funFact: 'The sky and the ocean are blue!' },
  { id: 'purple', name: 'Purple', hex: '#9333EA', emoji: '🟣', audioText: 'This is purple.', funFact: 'Grapes, lavender flowers, and eggplants are purple!' },
  { id: 'pink', name: 'Pink', hex: '#EC4899', emoji: '🩷', audioText: 'This is pink.', funFact: 'Flamingos, pigs, and cherry blossoms are pink!' },
  { id: 'brown', name: 'Brown', hex: '#92400E', emoji: '🟤', audioText: 'This is brown.', funFact: 'Chocolate, tree bark, and teddy bears are brown!' },
  { id: 'white', name: 'White', hex: '#E5E7EB', emoji: '⚪', audioText: 'This is white.', funFact: 'Snow, clouds, and polar bears are white!' },
  { id: 'black', name: 'Black', hex: '#1F2937', emoji: '⚫', audioText: 'This is black.', funFact: 'The night sky, a blackboard, and zebra stripes are black!' },
  { id: 'gray', name: 'Gray', hex: '#9CA3AF', emoji: '🩶', audioText: 'This is gray.', funFact: 'Elephants, clouds on a rainy day, and dolphins are gray!' },
  { id: 'gold', name: 'Gold', hex: '#F59E0B', emoji: '🥇', audioText: 'This is gold.', funFact: 'Gold is a shiny precious color — trophies and medals are gold!' },
];

// ─── Days & Months & Seasons ───────────────────────────────────────────────
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
  { id: 'friday', name: 'Friday', emoji: '🎉', audioText: 'Friday!', detail: 'The last school day of the week' },
  { id: 'saturday', name: 'Saturday', emoji: '☀️', audioText: 'Saturday!', detail: 'Weekend fun day!' },
  { id: 'sunday', name: 'Sunday', emoji: '🌈', audioText: 'Sunday!', detail: 'Rest and get ready for Monday!' },
];

export const monthsOfYearData: ListItem[] = [
  { id: 'january', name: 'January', emoji: '❄️', audioText: 'January!', detail: 'The first month of the year' },
  { id: 'february', name: 'February', emoji: '💝', audioText: 'February!', detail: "Valentine's Day is in February!" },
  { id: 'march', name: 'March', emoji: '🌱', audioText: 'March!', detail: 'Spring begins in March!' },
  { id: 'april', name: 'April', emoji: '🌧️', audioText: 'April!', detail: 'April showers bring May flowers!' },
  { id: 'may', name: 'May', emoji: '🌸', audioText: 'May!', detail: 'Flowers bloom beautifully in May!' },
  { id: 'june', name: 'June', emoji: '☀️', audioText: 'June!', detail: 'Summer starts in June!' },
  { id: 'july', name: 'July', emoji: '🎆', audioText: 'July!', detail: 'Fireworks and sunshine in July!' },
  { id: 'august', name: 'August', emoji: '🏖️', audioText: 'August!', detail: 'Beach and sunshine month!' },
  { id: 'september', name: 'September', emoji: '🍂', audioText: 'September!', detail: 'Back to school in September!' },
  { id: 'october', name: 'October', emoji: '🎃', audioText: 'October!', detail: 'Halloween is in October!' },
  { id: 'november', name: 'November', emoji: '🍁', audioText: 'November!', detail: 'Leaves fall beautifully in November!' },
  { id: 'december', name: 'December', emoji: '🎄', audioText: 'December!', detail: 'Holidays and the last month of the year!' },
];

export const seasonsData: ListItem[] = [
  { id: 'spring', name: 'Spring', emoji: '🌸', audioText: 'Spring!', detail: 'Flowers bloom and birds sing in spring' },
  { id: 'summer', name: 'Summer', emoji: '☀️', audioText: 'Summer!', detail: 'Hot sunny days, swimming pools and ice cream!' },
  { id: 'autumn', name: 'Autumn', emoji: '🍂', audioText: 'Autumn!', detail: 'Leaves turn orange, red and yellow in autumn' },
  { id: 'winter', name: 'Winter', emoji: '❄️', audioText: 'Winter!', detail: 'Cold days, snowflakes and hot chocolate!' },
];

// ─── Fruits ────────────────────────────────────────────────────────────────
export const fruitsData: LearningItem[] = [
  { id: 'apple', name: 'Apple', emoji: '🍎', category: 'Fruit', audioText: 'This is an apple.', funFact: 'Apples float in water because they are 25% air!' },
  { id: 'banana', name: 'Banana', emoji: '🍌', category: 'Fruit', audioText: 'This is a banana.', funFact: 'Bananas are technically berries and they grow on plants, not trees!' },
  { id: 'orange', name: 'Orange', emoji: '🍊', category: 'Fruit', audioText: 'This is an orange.', funFact: 'Oranges are packed with vitamin C which helps keep you healthy!' },
  { id: 'grapes', name: 'Grapes', emoji: '🍇', category: 'Fruit', audioText: 'These are grapes.', funFact: 'Grapes grow in big bunches on vines. Raisins are just dried grapes!' },
  { id: 'strawberry', name: 'Strawberry', emoji: '🍓', category: 'Fruit', audioText: 'This is a strawberry.', funFact: 'Strawberries are the only fruit with seeds on the outside — and they have about 200 seeds each!' },
  { id: 'watermelon', name: 'Watermelon', emoji: '🍉', category: 'Fruit', audioText: 'This is a watermelon.', funFact: 'Watermelons are 92% water — that is how they got their name!' },
  { id: 'pineapple', name: 'Pineapple', emoji: '🍍', category: 'Fruit', audioText: 'This is a pineapple.', funFact: 'It takes two whole years for a pineapple to grow!' },
  { id: 'mango', name: 'Mango', emoji: '🥭', category: 'Fruit', audioText: 'This is a mango.', funFact: 'Mango is the most popular fruit in the whole world!' },
  { id: 'cherry', name: 'Cherry', emoji: '🍒', category: 'Fruit', audioText: 'These are cherries.', funFact: 'Cherries grow in pairs on the same stem. They are the fruit of cherry blossom trees!' },
  { id: 'lemon', name: 'Lemon', emoji: '🍋', category: 'Fruit', audioText: 'This is a lemon.', funFact: 'Lemons are very sour because they contain a lot of citric acid!' },
  { id: 'pear', name: 'Pear', emoji: '🍐', category: 'Fruit', audioText: 'This is a pear.', funFact: 'Pears ripen from the inside out — so they might feel hard on the outside but be soft inside!' },
  { id: 'peach', name: 'Peach', emoji: '🍑', category: 'Fruit', audioText: 'This is a peach.', funFact: 'Peaches are fuzzy on the outside and have a big seed called a pit in the middle!' },
  { id: 'blueberry', name: 'Blueberry', emoji: '🫐', category: 'Fruit', audioText: 'These are blueberries.', funFact: 'Blueberries are one of the only naturally blue foods in the world!' },
  { id: 'kiwi', name: 'Kiwi', emoji: '🥝', category: 'Fruit', audioText: 'This is a kiwi.', funFact: 'A kiwi is brown and fuzzy on the outside but bright green and delicious on the inside!' },
  { id: 'coconut', name: 'Coconut', emoji: '🥥', category: 'Fruit', audioText: 'This is a coconut.', funFact: 'Coconuts have milk inside them! They grow on very tall palm trees.' },
  { id: 'pomegranate', name: 'Pomegranate', emoji: '🍈', category: 'Fruit', audioText: 'This is a pomegranate.', funFact: 'A pomegranate can have up to 1400 seeds inside it — that is a lot of seeds!' },
  { id: 'fig', name: 'Fig', emoji: '🍑', category: 'Fruit', audioText: 'This is a fig.', funFact: 'Figs are actually tiny flowers that bloomed on the inside of the fruit!' },
  { id: 'papaya', name: 'Papaya', emoji: '🧡', category: 'Fruit', audioText: 'This is a papaya.', funFact: 'Papayas are orange inside and grow in tropical countries near the equator!' },
  { id: 'guava', name: 'Guava', emoji: '🍏', category: 'Fruit', audioText: 'This is a guava.', funFact: 'Guava has four times more vitamin C than an orange!' },
  { id: 'plum', name: 'Plum', emoji: '🍇', category: 'Fruit', audioText: 'This is a plum.', funFact: 'Plums are purple and juicy. When dried, they are called prunes!' },
  { id: 'apricot', name: 'Apricot', emoji: '🟠', category: 'Fruit', audioText: 'This is an apricot.', funFact: 'Apricots are small, orange and very sweet. They come from the same family as peaches!' },
  { id: 'lychee', name: 'Lychee', emoji: '❤️', category: 'Fruit', audioText: 'This is a lychee.', funFact: 'Lychees have a rough pink skin outside and sweet white flesh inside!' },
  { id: 'melon', name: 'Melon', emoji: '🍈', category: 'Fruit', audioText: 'This is a melon.', funFact: 'Melons are in the same family as cucumbers and squash!' },
  { id: 'raspberry', name: 'Raspberry', emoji: '🍓', category: 'Fruit', audioText: 'This is a raspberry.', funFact: 'Each raspberry is actually made of many tiny little fruits all bunched together!' },
];

// ─── Vegetables ────────────────────────────────────────────────────────────
export const vegetablesData: LearningItem[] = [
  { id: 'carrot', name: 'Carrot', emoji: '🥕', category: 'Vegetable', audioText: 'This is a carrot.', funFact: 'Carrots help keep your eyes healthy and can come in orange, purple, yellow and white!' },
  { id: 'broccoli', name: 'Broccoli', emoji: '🥦', category: 'Vegetable', audioText: 'This is broccoli.', funFact: 'Broccoli looks like tiny green trees and is packed with vitamins!' },
  { id: 'corn', name: 'Corn', emoji: '🌽', category: 'Vegetable', audioText: 'This is corn.', funFact: 'An ear of corn always has an even number of rows — usually 16!' },
  { id: 'potato', name: 'Potato', emoji: '🥔', category: 'Vegetable', audioText: 'This is a potato.', funFact: 'Potatoes grow underground and come in over 4000 different kinds!' },
  { id: 'tomato', name: 'Tomato', emoji: '🍅', category: 'Vegetable', audioText: 'This is a tomato.', funFact: 'A tomato is scientifically a fruit, but we use it in cooking like a vegetable!' },
  { id: 'cucumber', name: 'Cucumber', emoji: '🥒', category: 'Vegetable', audioText: 'This is a cucumber.', funFact: 'Cucumbers are 96% water — one of the most water-filled foods you can eat!' },
  { id: 'pepper', name: 'Bell Pepper', emoji: '🫑', category: 'Vegetable', audioText: 'This is a bell pepper.', funFact: 'Bell peppers come in red, yellow, orange, and green — and they all start out green!' },
  { id: 'eggplant', name: 'Eggplant', emoji: '🍆', category: 'Vegetable', audioText: 'This is an eggplant.', funFact: 'Eggplants are actually fruits! They are shiny, purple, and related to tomatoes.' },
  { id: 'mushroom', name: 'Mushroom', emoji: '🍄', category: 'Vegetable', audioText: 'This is a mushroom.', funFact: 'Mushrooms are not plants — they are fungi and they can grow in the dark!' },
  { id: 'onion', name: 'Onion', emoji: '🧅', category: 'Vegetable', audioText: 'This is an onion.', funFact: 'Cutting onions releases a gas that makes your eyes water. It is completely harmless!' },
  { id: 'garlic', name: 'Garlic', emoji: '🧄', category: 'Vegetable', audioText: 'This is garlic.', funFact: 'Garlic has been used as medicine for thousands of years. It has a very strong smell!' },
  { id: 'spinach', name: 'Spinach', emoji: '🌿', category: 'Vegetable', audioText: 'This is spinach.', funFact: 'Spinach is full of iron which makes your muscles strong — just like Popeye!' },
  { id: 'peas', name: 'Peas', emoji: '🟢', category: 'Vegetable', audioText: 'These are peas.', funFact: 'Peas grow inside a pod. Each pod can have between 2 and 10 peas inside!' },
  { id: 'cabbage', name: 'Cabbage', emoji: '🥬', category: 'Vegetable', audioText: 'This is cabbage.', funFact: 'Cabbage is one of the oldest vegetables — people have been eating it for over 3000 years!' },
  { id: 'cauliflower', name: 'Cauliflower', emoji: '🥦', category: 'Vegetable', audioText: 'This is cauliflower.', funFact: 'Cauliflower comes in white, purple, orange, and green colors!' },
  { id: 'pumpkin', name: 'Pumpkin', emoji: '🎃', category: 'Vegetable', audioText: 'This is a pumpkin.', funFact: 'Pumpkins are 90% water and the seeds inside are delicious when roasted!' },
  { id: 'sweetpotato', name: 'Sweet Potato', emoji: '🍠', category: 'Vegetable', audioText: 'This is a sweet potato.', funFact: 'Sweet potatoes are orange and sweet. They are one of the healthiest vegetables!' },
  { id: 'radish', name: 'Radish', emoji: '🔴', category: 'Vegetable', audioText: 'This is a radish.', funFact: 'Radishes grow very quickly — some types are ready to eat in just three weeks!' },
  { id: 'beetroot', name: 'Beetroot', emoji: '🟣', category: 'Vegetable', audioText: 'This is a beetroot.', funFact: 'Beetroot is so deeply red that it can turn your urine pink — it is perfectly safe!' },
  { id: 'lettuce', name: 'Lettuce', emoji: '🥬', category: 'Vegetable', audioText: 'This is lettuce.', funFact: 'Lettuce is mostly water and is one of the most popular salad ingredients in the world!' },
  { id: 'celery', name: 'Celery', emoji: '🌱', category: 'Vegetable', audioText: 'This is celery.', funFact: 'Celery is so crunchy because it is filled with water and stringy fibers!' },
  { id: 'asparagus', name: 'Asparagus', emoji: '🌿', category: 'Vegetable', audioText: 'This is asparagus.', funFact: 'Asparagus grows very fast — a shoot can grow 10 centimeters in a single day!' },
];

// ─── Animals ───────────────────────────────────────────────────────────────
export const animalsData: LearningItem[] = [
  { id: 'lion', name: 'Lion', emoji: '🦁', category: 'Animal', audioText: 'This is a lion.', funFact: 'Lions live in groups called prides. Female lions do most of the hunting!' },
  { id: 'elephant', name: 'Elephant', emoji: '🐘', category: 'Animal', audioText: 'This is an elephant.', funFact: 'Elephants never forget! They have the largest brain of any land animal.' },
  { id: 'giraffe', name: 'Giraffe', emoji: '🦒', category: 'Animal', audioText: 'This is a giraffe.', funFact: 'Giraffes are the tallest animals on Earth — they can reach leaves 6 meters high!' },
  { id: 'penguin', name: 'Penguin', emoji: '🐧', category: 'Animal', audioText: 'This is a penguin.', funFact: 'Penguins cannot fly but they are amazing swimmers — they can swim as fast as a car drives!' },
  { id: 'dolphin', name: 'Dolphin', emoji: '🐬', category: 'Animal', audioText: 'This is a dolphin.', funFact: 'Dolphins are one of the smartest animals and they sleep with one eye open!' },
  { id: 'tiger', name: 'Tiger', emoji: '🐯', category: 'Animal', audioText: 'This is a tiger.', funFact: 'No two tigers have the same stripe pattern — their stripes are like fingerprints!' },
  { id: 'bear', name: 'Bear', emoji: '🐻', category: 'Animal', audioText: 'This is a bear.', funFact: 'Bears sleep through the whole winter — this is called hibernation!' },
  { id: 'rabbit', name: 'Rabbit', emoji: '🐰', category: 'Animal', audioText: 'This is a rabbit.', funFact: 'Rabbits have nearly 360-degree vision and can see behind them!' },
  { id: 'frog', name: 'Frog', emoji: '🐸', category: 'Animal', audioText: 'This is a frog.', funFact: 'Frogs drink water through their skin and breathe through it too!' },
  { id: 'owl', name: 'Owl', emoji: '🦉', category: 'Animal', audioText: 'This is an owl.', funFact: 'Owls can turn their heads almost all the way around — 270 degrees!' },
  { id: 'parrot', name: 'Parrot', emoji: '🦜', category: 'Animal', audioText: 'This is a parrot.', funFact: 'Parrots can live up to 80 years and learn hundreds of words!' },
  { id: 'zebra', name: 'Zebra', emoji: '🦓', category: 'Animal', audioText: 'This is a zebra.', funFact: 'Every zebra has a unique stripe pattern — no two are the same, just like human fingerprints!' },
  { id: 'kangaroo', name: 'Kangaroo', emoji: '🦘', category: 'Animal', audioText: 'This is a kangaroo.', funFact: 'Baby kangaroos are called joeys and they live in their mother\'s pouch!' },
  { id: 'panda', name: 'Panda', emoji: '🐼', category: 'Animal', audioText: 'This is a panda.', funFact: 'Giant pandas eat bamboo for up to 14 hours every day!' },
  { id: 'crocodile', name: 'Crocodile', emoji: '🐊', category: 'Animal', audioText: 'This is a crocodile.', funFact: 'Crocodiles are one of the oldest animals — dinosaurs walked alongside them 200 million years ago!' },
  { id: 'butterfly', name: 'Butterfly', emoji: '🦋', category: 'Animal', audioText: 'This is a butterfly.', funFact: 'Butterflies taste food with their feet and have 4 wings covered in tiny scales!' },
  { id: 'shark', name: 'Shark', emoji: '🦈', category: 'Animal', audioText: 'This is a shark.', funFact: 'Sharks have been around for over 450 million years — longer than trees!' },
  { id: 'gorilla', name: 'Gorilla', emoji: '🦍', category: 'Animal', audioText: 'This is a gorilla.', funFact: 'Gorillas are our closest relatives after chimpanzees — we share 98% of our DNA!' },
  { id: 'camel', name: 'Camel', emoji: '🐪', category: 'Animal', audioText: 'This is a camel.', funFact: 'Camels store fat in their humps which gives them energy when food is hard to find in the desert!' },
  { id: 'peacock', name: 'Peacock', emoji: '🦚', category: 'Animal', audioText: 'This is a peacock.', funFact: 'A peacock can spread its feathers into a giant fan with beautiful eye-shaped patterns!' },
  { id: 'flamingo', name: 'Flamingo', emoji: '🦩', category: 'Animal', audioText: 'This is a flamingo.', funFact: 'Flamingos are pink because of the pink shrimp they eat — they would be white without it!' },
  { id: 'wolf', name: 'Wolf', emoji: '🐺', category: 'Animal', audioText: 'This is a wolf.', funFact: 'Wolves live in family groups called packs and communicate by howling!' },
  { id: 'fox', name: 'Fox', emoji: '🦊', category: 'Animal', audioText: 'This is a fox.', funFact: 'Foxes are very clever animals. They have bushy tails called brushes!' },
  { id: 'deer', name: 'Deer', emoji: '🦌', category: 'Animal', audioText: 'This is a deer.', funFact: 'Male deer grow new antlers every year and shed them every winter!' },
];

// ─── Vehicles ──────────────────────────────────────────────────────────────
export const vehiclesData: LearningItem[] = [
  { id: 'car', name: 'Car', emoji: '🚗', category: 'Vehicle', audioText: 'This is a car.', funFact: 'Cars have four wheels and run on roads. The first car was built in 1885!' },
  { id: 'bus', name: 'Bus', emoji: '🚌', category: 'Vehicle', audioText: 'This is a bus.', funFact: 'A double-decker bus can carry over 80 passengers at once!' },
  { id: 'airplane', name: 'Airplane', emoji: '✈️', category: 'Vehicle', audioText: 'This is an airplane.', funFact: 'Airplanes fly at about 900 kilometres per hour — as fast as 10 cars on the highway!' },
  { id: 'train', name: 'Train', emoji: '🚂', category: 'Vehicle', audioText: 'This is a train.', funFact: 'The world\'s fastest train in Japan goes over 600 kilometers per hour!' },
  { id: 'boat', name: 'Boat', emoji: '⛵', category: 'Vehicle', audioText: 'This is a boat.', funFact: 'Boats float because the water pushes up on them with a force called buoyancy!' },
  { id: 'bicycle', name: 'Bicycle', emoji: '🚲', category: 'Vehicle', audioText: 'This is a bicycle.', funFact: 'Riding a bicycle is one of the most efficient ways to travel — you go 3 times faster than walking!' },
  { id: 'truck', name: 'Truck', emoji: '🚛', category: 'Vehicle', audioText: 'This is a truck.', funFact: 'A big truck can carry as much as 40,000 kilograms of cargo!' },
  { id: 'helicopter', name: 'Helicopter', emoji: '🚁', category: 'Vehicle', audioText: 'This is a helicopter.', funFact: 'Helicopters can fly straight up, down, backwards, and hover in one spot!' },
  { id: 'rocket', name: 'Rocket', emoji: '🚀', category: 'Vehicle', audioText: 'This is a rocket.', funFact: 'Rockets travel to outer space at over 28,000 kilometers per hour!' },
  { id: 'ambulance', name: 'Ambulance', emoji: '🚑', category: 'Vehicle', audioText: 'This is an ambulance.', funFact: 'Ambulances have the word AMBULANCE written backwards on the front so drivers can read it in their mirror!' },
  { id: 'firetruck', name: 'Fire Truck', emoji: '🚒', category: 'Vehicle', audioText: 'This is a fire truck.', funFact: 'Fire trucks carry hundreds of liters of water and can spray it over 30 meters!' },
  { id: 'submarine', name: 'Submarine', emoji: '🤿', category: 'Vehicle', audioText: 'This is a submarine.', funFact: 'Submarines dive underwater by filling tanks with water to make them heavy enough to sink!' },
  { id: 'tractor', name: 'Tractor', emoji: '🚜', category: 'Vehicle', audioText: 'This is a tractor.', funFact: 'Tractors have huge back wheels to grip the soil and pull heavy farming equipment!' },
  { id: 'motorcycle', name: 'Motorcycle', emoji: '🏍️', category: 'Vehicle', audioText: 'This is a motorcycle.', funFact: 'Motorcycles have two wheels and a powerful engine. Riders wear helmets to stay safe!' },
  { id: 'scooter', name: 'Scooter', emoji: '🛵', category: 'Vehicle', audioText: 'This is a scooter.', funFact: 'Scooters are small and nimble — great for zipping through city streets!' },
  { id: 'hotairballoon', name: 'Hot Air Balloon', emoji: '🎈', category: 'Vehicle', audioText: 'This is a hot air balloon.', funFact: 'Hot air balloons fly because hot air is lighter than cool air and floats upward!' },
  { id: 'ship', name: 'Ship', emoji: '🚢', category: 'Vehicle', audioText: 'This is a ship.', funFact: 'The biggest ships in the world are longer than four football fields put together!' },
  { id: 'snowmobile', name: 'Snowmobile', emoji: '🏂', category: 'Vehicle', audioText: 'This is a snowmobile.', funFact: 'Snowmobiles travel over snow using skis at the front and a moving track at the back!' },
  { id: 'taxi', name: 'Taxi', emoji: '🚕', category: 'Vehicle', audioText: 'This is a taxi.', funFact: 'Taxis are cars you can pay to drive you anywhere you want to go!' },
  { id: 'spaceshuttle', name: 'Space Shuttle', emoji: '🛸', category: 'Vehicle', audioText: 'This is a space shuttle.', funFact: 'Space shuttles can travel into outer space and come back to land like an airplane!' },
];

// ─── Body Parts ─────────────────────────────────────────────────────────────
export const bodyPartsData: LearningItem[] = [
  { id: 'head', name: 'Head', emoji: '🗣️', category: 'Body Part', audioText: 'This is the head.', funFact: 'Your head contains your brain which controls everything your body does!' },
  { id: 'eyes', name: 'Eyes', emoji: '👀', category: 'Body Part', audioText: 'These are the eyes.', funFact: 'Your eyes can see about 10 million different colors!' },
  { id: 'ears', name: 'Ears', emoji: '👂', category: 'Body Part', audioText: 'These are the ears.', funFact: 'Your ears never stop working — even when you are asleep they still hear sounds!' },
  { id: 'nose', name: 'Nose', emoji: '👃', category: 'Body Part', audioText: 'This is the nose.', funFact: 'Your nose can smell over a trillion different smells! It also warms the air before it reaches your lungs.' },
  { id: 'mouth', name: 'Mouth', emoji: '👄', category: 'Body Part', audioText: 'This is the mouth.', funFact: 'You use your mouth to eat, speak and breathe. Your tongue has about 10,000 taste buds!' },
  { id: 'teeth', name: 'Teeth', emoji: '🦷', category: 'Body Part', audioText: 'These are the teeth.', funFact: 'You get two sets of teeth — baby teeth first, then 32 adult teeth!' },
  { id: 'tongue', name: 'Tongue', emoji: '👅', category: 'Body Part', audioText: 'This is the tongue.', funFact: 'Your tongue is the strongest muscle relative to its size in your whole body!' },
  { id: 'hair', name: 'Hair', emoji: '💇', category: 'Body Part', audioText: 'This is hair.', funFact: 'You have about 100,000 hairs on your head and you lose about 100 of them every day!' },
  { id: 'neck', name: 'Neck', emoji: '🧣', category: 'Body Part', audioText: 'This is the neck.', funFact: 'Your neck has 7 bones called vertebrae — the same number as a giraffe!' },
  { id: 'shoulders', name: 'Shoulders', emoji: '💪', category: 'Body Part', audioText: 'These are the shoulders.', funFact: 'Your shoulder is the most flexible joint in your body — it can move in almost any direction!' },
  { id: 'arms', name: 'Arms', emoji: '💪', category: 'Body Part', audioText: 'These are the arms.', funFact: 'Your arm bones are called the humerus, radius and ulna. Together they help you reach and lift things!' },
  { id: 'hands', name: 'Hands', emoji: '🤲', category: 'Body Part', audioText: 'These are the hands.', funFact: 'Each of your hands has 27 bones in it — that is more than in any other part of your body!' },
  { id: 'fingers', name: 'Fingers', emoji: '🤙', category: 'Body Part', audioText: 'These are the fingers.', funFact: 'Every person in the world has unique fingerprints — no two are exactly the same!' },
  { id: 'chest', name: 'Chest', emoji: '🫀', category: 'Body Part', audioText: 'This is the chest.', funFact: 'Inside your chest are your heart and lungs — the two most important organs for keeping you alive!' },
  { id: 'heart', name: 'Heart', emoji: '❤️', category: 'Body Part', audioText: 'This is the heart.', funFact: 'Your heart beats about 100,000 times every single day and pumps blood all around your body!' },
  { id: 'lungs', name: 'Lungs', emoji: '🫁', category: 'Body Part', audioText: 'These are the lungs.', funFact: 'You breathe in and out about 20,000 times every day. Your lungs have the surface area of a tennis court!' },
  { id: 'stomach', name: 'Stomach', emoji: '🫃', category: 'Body Part', audioText: 'This is the stomach.', funFact: 'Your stomach uses acid to break down food. It growls when it is empty and wants food!' },
  { id: 'back', name: 'Back', emoji: '🧍', category: 'Body Part', audioText: 'This is the back.', funFact: 'Your spine has 33 bones called vertebrae stacked on top of each other. It keeps you standing tall!' },
  { id: 'legs', name: 'Legs', emoji: '🦵', category: 'Body Part', audioText: 'These are the legs.', funFact: 'The femur in your thigh is the longest and strongest bone in your entire body!' },
  { id: 'knees', name: 'Knees', emoji: '🦵', category: 'Body Part', audioText: 'These are the knees.', funFact: 'Your knees are the biggest joints in your body and let you bend your legs!' },
  { id: 'feet', name: 'Feet', emoji: '🦶', category: 'Body Part', audioText: 'These are the feet.', funFact: 'Each foot has 26 bones, 33 joints and over 100 muscles, tendons and ligaments!' },
  { id: 'toes', name: 'Toes', emoji: '🦶', category: 'Body Part', audioText: 'These are the toes.', funFact: 'Your big toe helps you balance and push off the ground when you walk and run!' },
  { id: 'brain', name: 'Brain', emoji: '🧠', category: 'Body Part', audioText: 'This is the brain.', funFact: 'Your brain has about 86 billion neurons and uses 20% of all the energy in your body!' },
  { id: 'skin', name: 'Skin', emoji: '🤝', category: 'Body Part', audioText: 'This is skin.', funFact: 'Skin is your body\'s largest organ. It protects you from heat, cold, and germs!' },
];

// ─── Professions ───────────────────────────────────────────────────────────
export const professionsData: LearningItem[] = [
  { id: 'doctor', name: 'Doctor', emoji: '👨‍⚕️', category: 'Profession', audioText: 'This is a doctor.', funFact: 'Doctors help people feel better when they are sick. They go to school for many years to learn how!' },
  { id: 'teacher', name: 'Teacher', emoji: '👩‍🏫', category: 'Profession', audioText: 'This is a teacher.', funFact: 'Teachers help children learn new things every day. Every other profession was taught by a teacher!' },
  { id: 'firefighter', name: 'Firefighter', emoji: '👨‍🚒', category: 'Profession', audioText: 'This is a firefighter.', funFact: 'Firefighters wear special heat-proof suits to protect themselves from fires!' },
  { id: 'policeofficer', name: 'Police Officer', emoji: '👮', category: 'Profession', audioText: 'This is a police officer.', funFact: 'Police officers keep communities safe. They wear uniforms so people can easily recognize them!' },
  { id: 'nurse', name: 'Nurse', emoji: '👩‍⚕️', category: 'Profession', audioText: 'This is a nurse.', funFact: 'Nurses take care of patients in hospitals and help them recover from illness and injury!' },
  { id: 'chef', name: 'Chef', emoji: '👨‍🍳', category: 'Profession', audioText: 'This is a chef.', funFact: 'Chefs create delicious meals in restaurants. They train for years to learn about flavors and cooking techniques!' },
  { id: 'engineer', name: 'Engineer', emoji: '👷', category: 'Profession', audioText: 'This is an engineer.', funFact: 'Engineers design and build bridges, buildings, machines, and technology we use every day!' },
  { id: 'pilot', name: 'Pilot', emoji: '🧑‍✈️', category: 'Profession', audioText: 'This is a pilot.', funFact: 'Pilots fly airplanes carrying passengers all around the world. They need to know a lot about weather!' },
  { id: 'farmer', name: 'Farmer', emoji: '🧑‍🌾', category: 'Profession', audioText: 'This is a farmer.', funFact: 'Farmers grow all the food we eat! One farmer today can produce enough food to feed over 150 people!' },
  { id: 'artist', name: 'Artist', emoji: '🧑‍🎨', category: 'Profession', audioText: 'This is an artist.', funFact: 'Artists create paintings, sculptures, drawings and many other kinds of beautiful things!' },
  { id: 'scientist', name: 'Scientist', emoji: '🧑‍🔬', category: 'Profession', audioText: 'This is a scientist.', funFact: 'Scientists ask questions and do experiments to discover how the world works!' },
  { id: 'dentist', name: 'Dentist', emoji: '🦷', category: 'Profession', audioText: 'This is a dentist.', funFact: 'Dentists keep your teeth healthy and clean. You should visit them twice a year!' },
  { id: 'musician', name: 'Musician', emoji: '🎵', category: 'Profession', audioText: 'This is a musician.', funFact: 'Musicians create and perform music. Learning an instrument helps your brain grow stronger!' },
  { id: 'librarian', name: 'Librarian', emoji: '📚', category: 'Profession', audioText: 'This is a librarian.', funFact: 'Librarians help people find books and information. Libraries can have millions of books!' },
  { id: 'astronaut', name: 'Astronaut', emoji: '🧑‍🚀', category: 'Profession', audioText: 'This is an astronaut.', funFact: 'Astronauts travel to outer space and experience weightlessness — they float around the spacecraft!' },
  { id: 'lawyer', name: 'Lawyer', emoji: '⚖️', category: 'Profession', audioText: 'This is a lawyer.', funFact: 'Lawyers help people understand the law and represent them in court!' },
  { id: 'architect', name: 'Architect', emoji: '📐', category: 'Profession', audioText: 'This is an architect.', funFact: 'Architects design buildings — from houses and schools to skyscrapers and museums!' },
  { id: 'veterinarian', name: 'Veterinarian', emoji: '🐾', category: 'Profession', audioText: 'This is a veterinarian.', funFact: 'Veterinarians are doctors for animals! They help pets and farm animals stay healthy!' },
  { id: 'postman', name: 'Post Worker', emoji: '📬', category: 'Profession', audioText: 'This is a post worker.', funFact: 'Post workers deliver letters and packages to homes and businesses every day!' },
  { id: 'author', name: 'Author', emoji: '✍️', category: 'Profession', audioText: 'This is an author.', funFact: 'Authors write books, stories and poems. Some of the most famous books were rejected many times before being published!' },
];

// ─── Objects in the House ──────────────────────────────────────────────────
export const householdItemsData: LearningItem[] = [
  { id: 'sofa', name: 'Sofa', emoji: '🛋️', category: 'Household', audioText: 'This is a sofa.', funFact: 'A sofa is also called a couch. Families sit on it together to relax and watch TV!' },
  { id: 'table', name: 'Table', emoji: '🪑', category: 'Household', audioText: 'This is a table.', funFact: 'Tables have been used by humans for over 5000 years for eating and working!' },
  { id: 'chair', name: 'Chair', emoji: '🪑', category: 'Household', audioText: 'This is a chair.', funFact: 'Chairs with four legs are very stable because the weight is shared equally!' },
  { id: 'bed', name: 'Bed', emoji: '🛏️', category: 'Household', audioText: 'This is a bed.', funFact: 'You spend about a third of your life sleeping in a bed — sleep is very important for your brain!' },
  { id: 'lamp', name: 'Lamp', emoji: '💡', category: 'Household', audioText: 'This is a lamp.', funFact: 'The first electric light bulb was invented by Thomas Edison in 1879!' },
  { id: 'television', name: 'Television', emoji: '📺', category: 'Household', audioText: 'This is a television.', funFact: 'The first television was invented in 1926. Now there are billions of TVs around the world!' },
  { id: 'refrigerator', name: 'Refrigerator', emoji: '🧊', category: 'Household', audioText: 'This is a refrigerator.', funFact: 'Refrigerators keep food cold to stop bacteria from growing. They were invented in the 1800s!' },
  { id: 'stove', name: 'Stove', emoji: '🍳', category: 'Household', audioText: 'This is a stove.', funFact: 'Stoves cook food using heat. Some use gas flames and others use electric coils!' },
  { id: 'microwave', name: 'Microwave', emoji: '📡', category: 'Household', audioText: 'This is a microwave.', funFact: 'Microwaves heat food using invisible waves of energy — they can warm a meal in just 2 minutes!' },
  { id: 'washingmachine', name: 'Washing Machine', emoji: '🫧', category: 'Household', audioText: 'This is a washing machine.', funFact: 'Before washing machines were invented people had to wash all clothes by hand in rivers!' },
  { id: 'mirror', name: 'Mirror', emoji: '🪞', category: 'Household', audioText: 'This is a mirror.', funFact: 'Mirrors work by reflecting light. The best mirrors are made with a thin layer of silver!' },
  { id: 'clock', name: 'Clock', emoji: '🕐', category: 'Household', audioText: 'This is a clock.', funFact: 'The first mechanical clocks were built about 700 years ago. Before that people used sundials!' },
  { id: 'bookshelf', name: 'Bookshelf', emoji: '📚', category: 'Household', audioText: 'This is a bookshelf.', funFact: 'A bookshelf holds books organized so you can find them easily. Some people have thousands of books!' },
  { id: 'telephone', name: 'Telephone', emoji: '📞', category: 'Household', audioText: 'This is a telephone.', funFact: 'Alexander Graham Bell made the first telephone call in 1876 — the first words were: Mr Watson, come here!' },
  { id: 'computer', name: 'Computer', emoji: '💻', category: 'Household', audioText: 'This is a computer.', funFact: 'The first computers were as big as entire rooms. Now we carry ones billions of times more powerful in our pockets!' },
  { id: 'door', name: 'Door', emoji: '🚪', category: 'Household', audioText: 'This is a door.', funFact: 'Doors have been used for thousands of years to provide privacy and protection from weather!' },
  { id: 'window', name: 'Window', emoji: '🪟', category: 'Household', audioText: 'This is a window.', funFact: 'Windows let in light and fresh air. Glass windows were first used in ancient Rome!' },
  { id: 'bathtub', name: 'Bathtub', emoji: '🛁', category: 'Household', audioText: 'This is a bathtub.', funFact: 'The first bathtubs were made of stone over 5000 years ago. Keeping clean helps prevent illness!' },
  { id: 'toilet', name: 'Toilet', emoji: '🚽', category: 'Household', audioText: 'This is a toilet.', funFact: 'Flush toilets are one of the most important inventions in history — they stop diseases from spreading!' },
  { id: 'umbrella', name: 'Umbrella', emoji: '☂️', category: 'Household', audioText: 'This is an umbrella.', funFact: 'Umbrellas were first invented over 4000 years ago to protect people from the hot sun, not the rain!' },
];

// ─── School Objects ─────────────────────────────────────────────────────────
export const schoolItemsData: LearningItem[] = [
  { id: 'pencil', name: 'Pencil', emoji: '✏️', category: 'School', audioText: 'This is a pencil.', funFact: 'A single pencil can draw a line 56 kilometers long and write about 45,000 words!' },
  { id: 'pen', name: 'Pen', emoji: '🖊️', category: 'School', audioText: 'This is a pen.', funFact: 'The ballpoint pen was invented in 1938. It writes using a tiny rolling ball filled with ink!' },
  { id: 'book', name: 'Book', emoji: '📖', category: 'School', audioText: 'This is a book.', funFact: 'The first books were written on clay tablets. Paper books have been around for about 2000 years!' },
  { id: 'backpack', name: 'Backpack', emoji: '🎒', category: 'School', audioText: 'This is a backpack.', funFact: 'Backpacks carry weight on your back. Wearing it properly on both shoulders protects your spine!' },
  { id: 'ruler', name: 'Ruler', emoji: '📏', category: 'School', audioText: 'This is a ruler.', funFact: 'Rulers measure length. The metric system used on most rulers was invented in France in 1795!' },
  { id: 'scissors', name: 'Scissors', emoji: '✂️', category: 'School', audioText: 'These are scissors.', funFact: 'Scissors were invented about 3000 years ago. Leonardo da Vinci is sometimes credited with improving their design!' },
  { id: 'eraser', name: 'Eraser', emoji: '🧹', category: 'School', audioText: 'This is an eraser.', funFact: 'Erasers are made from rubber or vinyl. Before they were invented, people used bread to erase pencil marks!' },
  { id: 'crayons', name: 'Crayons', emoji: '🖍️', category: 'School', audioText: 'These are crayons.', funFact: 'Crayons are made from paraffin wax and pigment. The classic Crayola box has 64 colors!' },
  { id: 'glue', name: 'Glue', emoji: '🧴', category: 'School', audioText: 'This is glue.', funFact: 'The first glues were made by ancient Egyptians from animal bones more than 8000 years ago!' },
  { id: 'paintbrush', name: 'Paintbrush', emoji: '🖌️', category: 'School', audioText: 'This is a paintbrush.', funFact: 'The earliest known paintings were made 40,000 years ago using fingers, sticks and primitive brushes!' },
  { id: 'calculator', name: 'Calculator', emoji: '🧮', category: 'School', audioText: 'This is a calculator.', funFact: 'Before electronic calculators people used mechanical devices called abacuses to do maths!' },
  { id: 'globe', name: 'Globe', emoji: '🌍', category: 'School', audioText: 'This is a globe.', funFact: 'A globe is a round model of the Earth. The first globe was made in Germany in 1492!' },
  { id: 'microscope', name: 'Microscope', emoji: '🔬', category: 'School', audioText: 'This is a microscope.', funFact: 'Microscopes let you see things too tiny to see with your naked eye — like bacteria and cells!' },
  { id: 'chalkboard', name: 'Chalkboard', emoji: '🏫', category: 'School', audioText: 'This is a chalkboard.', funFact: 'Teachers used chalkboards for over 200 years. The squeaking sound comes from chalk scraping on the surface!' },
  { id: 'lunchbox', name: 'Lunch Box', emoji: '🥪', category: 'School', audioText: 'This is a lunch box.', funFact: 'Lunch boxes help keep your food fresh and organized so you can eat a healthy meal at school!' },
];

// ─── Sports & Games ─────────────────────────────────────────────────────────
export const sportsData: LearningItem[] = [
  { id: 'football', name: 'Football', emoji: '⚽', category: 'Sport', audioText: 'This is football.', funFact: 'Football is the most popular sport in the world — over 4 billion people love it!' },
  { id: 'basketball', name: 'Basketball', emoji: '🏀', category: 'Sport', audioText: 'This is basketball.', funFact: 'Basketball was invented in 1891 using a peach basket — players had to climb up to get the ball out!' },
  { id: 'tennis', name: 'Tennis', emoji: '🎾', category: 'Sport', audioText: 'This is tennis.', funFact: 'A tennis ball is bright yellow so players can easily see it moving at high speeds!' },
  { id: 'swimming', name: 'Swimming', emoji: '🏊', category: 'Sport', audioText: 'This is swimming.', funFact: 'Swimming uses almost every muscle in your body — it is one of the best exercises!' },
  { id: 'cycling', name: 'Cycling', emoji: '🚴', category: 'Sport', audioText: 'This is cycling.', funFact: 'The Tour de France cycling race covers about 3,500 kilometers — across mountains and valleys!' },
  { id: 'running', name: 'Running', emoji: '🏃', category: 'Sport', audioText: 'This is running.', funFact: 'Humans are among the best long-distance runners on Earth — we can outlast most animals over long distances!' },
  { id: 'gymnastics', name: 'Gymnastics', emoji: '🤸', category: 'Sport', audioText: 'This is gymnastics.', funFact: 'Gymnastics originated in Ancient Greece over 2000 years ago as a way to train soldiers!' },
  { id: 'cricket', name: 'Cricket', emoji: '🏏', category: 'Sport', audioText: 'This is cricket.', funFact: 'Cricket is one of the oldest team sports and is hugely popular in India, England and Australia!' },
  { id: 'baseball', name: 'Baseball', emoji: '⚾', category: 'Sport', audioText: 'This is baseball.', funFact: 'A baseball pitcher throws the ball so fast it reaches home plate in less than half a second!' },
  { id: 'volleyball', name: 'Volleyball', emoji: '🏐', category: 'Sport', audioText: 'This is volleyball.', funFact: 'Volleyball was invented in 1895 and can be played on a court or on the beach!' },
  { id: 'golf', name: 'Golf', emoji: '⛳', category: 'Sport', audioText: 'This is golf.', funFact: 'A golf ball has 336 dimples on it — these help it fly straighter and further through the air!' },
  { id: 'skiing', name: 'Skiing', emoji: '⛷️', category: 'Sport', audioText: 'This is skiing.', funFact: 'Skiing is thousands of years old — the oldest skis found in Russia are about 8000 years old!' },
  { id: 'boxing', name: 'Boxing', emoji: '🥊', category: 'Sport', audioText: 'This is boxing.', funFact: 'Boxing is one of the oldest sports and was part of the ancient Olympic Games in 688 BC!' },
  { id: 'karate', name: 'Karate', emoji: '🥋', category: 'Sport', audioText: 'This is karate.', funFact: 'Karate teaches discipline and respect as well as self-defence. The word means empty hand in Japanese!' },
  { id: 'archery', name: 'Archery', emoji: '🏹', category: 'Sport', audioText: 'This is archery.', funFact: 'Archery has been practiced for at least 10,000 years and was crucial for hunting and warfare!' },
  { id: 'tabletennis', name: 'Table Tennis', emoji: '🏓', category: 'Sport', audioText: 'This is table tennis.', funFact: 'Table tennis balls can travel at up to 170 kilometers per hour — faster than most cars!' },
  { id: 'badminton', name: 'Badminton', emoji: '🏸', category: 'Sport', audioText: 'This is badminton.', funFact: 'A badminton shuttlecock can travel at over 400 km/h making it the fastest moving object in any sport!' },
  { id: 'hockey', name: 'Hockey', emoji: '🏒', category: 'Sport', audioText: 'This is hockey.', funFact: 'Ice hockey is Canada\'s national winter sport and the hockey puck can travel at over 160 km/h!' },
  { id: 'rugby', name: 'Rugby', emoji: '🏉', category: 'Sport', audioText: 'This is rugby.', funFact: 'Rugby was supposedly invented when a player at Rugby School in England picked up a football and ran with it!' },
  { id: 'chess', name: 'Chess', emoji: '♟️', category: 'Sport', audioText: 'This is chess.', funFact: 'Chess is over 1500 years old and is considered a sport of the mind. There are more possible games than atoms in the universe!' },
];

// ─── Songs ─────────────────────────────────────────────────────────────────
export interface SongItem {
  id: string;
  title: string;
  icon: string;
  artist?: string;
  description?: string;
  audio?: string;
  fullLyrics: string;
  bpm?: number;
}

export const songsData: SongItem[] = [
  {
    id: 'twinkle', title: 'Twinkle Twinkle Little Star', icon: '⭐',
    description: 'A classic lullaby about a twinkling star',
    fullLyrics: 'Twinkle, twinkle, little star, how I wonder what you are! Up above the world so high, like a diamond in the sky. Twinkle, twinkle, little star, how I wonder what you are!',
    bpm: 80,
  },
  {
    id: 'old-macdonald', title: 'Old MacDonald Had a Farm', icon: '🐄',
    description: 'Join Old MacDonald on his fun farm!',
    fullLyrics: 'Old MacDonald had a farm, E-I-E-I-O! And on his farm he had a cow, E-I-E-I-O! With a moo moo here and a moo moo there, here a moo, there a moo, everywhere a moo moo! Old MacDonald had a farm, E-I-E-I-O!',
    bpm: 110,
  },
  {
    id: 'mary-lamb', title: 'Mary Had a Little Lamb', icon: '🐑',
    description: 'A story about Mary and her little lamb',
    fullLyrics: 'Mary had a little lamb, little lamb, little lamb! Mary had a little lamb whose fleece was white as snow! And everywhere that Mary went, Mary went, Mary went, everywhere that Mary went the lamb was sure to go!',
    bpm: 100,
  },
  {
    id: 'baa-baa', title: 'Baa Baa Black Sheep', icon: '🐏',
    description: 'The friendly black sheep song',
    fullLyrics: 'Baa baa black sheep, have you any wool? Yes sir, yes sir, three bags full! One for the master, one for the dame, and one for the little boy who lives down the lane!',
    bpm: 95,
  },
  {
    id: 'humpty', title: 'Humpty Dumpty', icon: '🥚',
    description: 'Poor Humpty Dumpty sat on a wall',
    fullLyrics: 'Humpty Dumpty sat on a wall, Humpty Dumpty had a great fall! All the king\'s horses and all the king\'s men couldn\'t put Humpty together again!',
    bpm: 90,
  },
  {
    id: 'wheels-bus', title: 'Wheels on the Bus', icon: '🚌',
    description: 'The wheels go round and round!',
    fullLyrics: 'The wheels on the bus go round and round, round and round, round and round! The wheels on the bus go round and round, all through the town! The wipers on the bus go swish swish swish, all through the town! The driver on the bus says move on back, all through the town!',
    bpm: 115,
  },
  {
    id: 'row-boat', title: 'Row Row Row Your Boat', icon: '⛵',
    description: 'A gentle rowing song',
    fullLyrics: 'Row, row, row your boat, gently down the stream! Merrily, merrily, merrily, merrily, life is but a dream! Row, row, row your boat, gently down the stream! If you see a crocodile, don\'t forget to scream!',
    bpm: 100,
  },
  {
    id: 'happy-birthday', title: 'Happy Birthday to You', icon: '🎂',
    description: 'The most famous birthday song!',
    fullLyrics: 'Happy birthday to you, happy birthday to you! Happy birthday dear friend, happy birthday to you! May all your wishes come true, may all your wishes come true! Happy birthday dear friend, happy birthday to you!',
    bpm: 85,
  },
  {
    id: 'itsy-spider', title: 'Itsy Bitsy Spider', icon: '🕷️',
    description: 'The little spider keeps climbing!',
    fullLyrics: 'The itsy bitsy spider climbed up the water spout. Down came the rain and washed the spider out! Out came the sun and dried up all the rain, and the itsy bitsy spider climbed up the spout again!',
    bpm: 105,
  },
  {
    id: 'abc-song', title: 'The ABC Song', icon: '🔤',
    description: 'Learn all the letters of the alphabet!',
    fullLyrics: 'A B C D E F G, H I J K L M N O P! Q R S, T U V, W X, Y and Z! Now I know my ABCs, next time won\'t you sing with me!',
    bpm: 100,
  },
  {
    id: 'five-speckled-frogs', title: 'Five Little Speckled Frogs', icon: '🐸',
    description: 'Count down with five funny frogs!',
    fullLyrics: 'Five little speckled frogs, sitting on a speckled log, eating some most delicious bugs, yum yum! One jumped into the pool where it was nice and cool, then there were four speckled frogs, glub glub!',
    bpm: 105,
  },
  {
    id: 'hickory-dickory', title: 'Hickory Dickory Dock', icon: '🐭',
    description: 'A mouse runs up the clock!',
    fullLyrics: 'Hickory dickory dock, the mouse ran up the clock! The clock struck one, the mouse ran down, hickory dickory dock! Hickory dickory dock, the mouse ran up the clock! The clock struck two, the mouse said boo, hickory dickory dock!',
    bpm: 90,
  },
];

// ─── Sight Words ────────────────────────────────────────────────────────────
export interface SightWordItem {
  word: string;
  sentence: string;
  audioText: string;
  level: number;
}

export const sightWordsData: SightWordItem[] = [
  // Level 1 — Dolch pre-primer
  { word: 'the', sentence: 'The sun is bright.', audioText: 'The.', level: 1 },
  { word: 'a', sentence: 'I see a cat.', audioText: 'A.', level: 1 },
  { word: 'is', sentence: 'The sky is blue.', audioText: 'Is.', level: 1 },
  { word: 'I', sentence: 'I like to play.', audioText: 'I.', level: 1 },
  { word: 'in', sentence: 'The fish is in the water.', audioText: 'In.', level: 1 },
  { word: 'it', sentence: 'It is very fun!', audioText: 'It.', level: 1 },
  { word: 'and', sentence: 'I like cats and dogs.', audioText: 'And.', level: 1 },
  { word: 'can', sentence: 'I can jump very high.', audioText: 'Can.', level: 1 },
  { word: 'see', sentence: 'I can see the stars.', audioText: 'See.', level: 1 },
  { word: 'we', sentence: 'We can play together.', audioText: 'We.', level: 1 },
  { word: 'to', sentence: 'I like to sing songs.', audioText: 'To.', level: 1 },
  { word: 'my', sentence: 'This is my favourite toy.', audioText: 'My.', level: 1 },
  { word: 'you', sentence: 'I love you very much!', audioText: 'You.', level: 1 },
  { word: 'he', sentence: 'He is very happy.', audioText: 'He.', level: 1 },
  { word: 'she', sentence: 'She can run very fast.', audioText: 'She.', level: 1 },
  { word: 'go', sentence: 'Let us go to the park!', audioText: 'Go.', level: 1 },
  { word: 'do', sentence: 'Do you like apples?', audioText: 'Do.', level: 1 },
  { word: 'at', sentence: 'Look at the rainbow!', audioText: 'At.', level: 1 },
  { word: 'up', sentence: 'The bird flies up high.', audioText: 'Up.', level: 1 },
  { word: 'big', sentence: 'That is a very big elephant!', audioText: 'Big.', level: 1 },
  // Level 2 — Dolch primer
  { word: 'all', sentence: 'All the children are happy.', audioText: 'All.', level: 2 },
  { word: 'am', sentence: 'I am very excited today!', audioText: 'Am.', level: 2 },
  { word: 'are', sentence: 'We are best friends.', audioText: 'Are.', level: 2 },
  { word: 'at', sentence: 'She sits at the table.', audioText: 'At.', level: 2 },
  { word: 'but', sentence: 'I like cake but not spinach.', audioText: 'But.', level: 2 },
  { word: 'came', sentence: 'She came to my birthday party.', audioText: 'Came.', level: 2 },
  { word: 'eat', sentence: 'I love to eat strawberries.', audioText: 'Eat.', level: 2 },
  { word: 'four', sentence: 'I have four pet fish.', audioText: 'Four.', level: 2 },
  { word: 'get', sentence: 'Can I get a glass of water?', audioText: 'Get.', level: 2 },
  { word: 'good', sentence: 'You did a really good job!', audioText: 'Good.', level: 2 },
  { word: 'have', sentence: 'I have a pet dog.', audioText: 'Have.', level: 2 },
  { word: 'here', sentence: 'Come over here please!', audioText: 'Here.', level: 2 },
  { word: 'into', sentence: 'The frog jumped into the pond.', audioText: 'Into.', level: 2 },
  { word: 'like', sentence: 'I like playing in the park.', audioText: 'Like.', level: 2 },
  { word: 'look', sentence: 'Look at that beautiful butterfly!', audioText: 'Look.', level: 2 },
  { word: 'make', sentence: 'Let us make a sandcastle!', audioText: 'Make.', level: 2 },
  { word: 'me', sentence: 'Please read a story to me.', audioText: 'Me.', level: 2 },
  { word: 'not', sentence: 'I did not eat my broccoli.', audioText: 'Not.', level: 2 },
  { word: 'on', sentence: 'The cat is on the mat.', audioText: 'On.', level: 2 },
  { word: 'our', sentence: 'This is our lovely home.', audioText: 'Our.', level: 2 },
  // Level 3 — Dolch first grade
  { word: 'after', sentence: 'We play outside after school.', audioText: 'After.', level: 3 },
  { word: 'again', sentence: 'Can we do that again please?', audioText: 'Again.', level: 3 },
  { word: 'any', sentence: 'Do you have any biscuits?', audioText: 'Any.', level: 3 },
  { word: 'ask', sentence: 'You can ask me anything.', audioText: 'Ask.', level: 3 },
  { word: 'been', sentence: 'I have been to the zoo.', audioText: 'Been.', level: 3 },
  { word: 'blue', sentence: 'The sky is a beautiful blue.', audioText: 'Blue.', level: 3 },
  { word: 'book', sentence: 'I am reading a great book.', audioText: 'Book.', level: 3 },
  { word: 'boy', sentence: 'The boy kicked the football.', audioText: 'Boy.', level: 3 },
  { word: 'bring', sentence: 'Please bring your pencil case.', audioText: 'Bring.', level: 3 },
  { word: 'call', sentence: 'I will call you later.', audioText: 'Call.', level: 3 },
];

// ─── Word Families ──────────────────────────────────────────────────────────
export interface WordFamilyItem {
  ending: string;
  startingLetters: string[];
  words: string[];
}

export const wordFamiliesData: WordFamilyItem[] = [
  { ending: 'at', startingLetters: ['b', 'c', 'h', 'm', 'r', 's', 'f', 'p'], words: ['bat', 'cat', 'hat', 'mat', 'rat', 'sat', 'fat', 'pat'] },
  { ending: 'an', startingLetters: ['c', 'f', 'm', 'p', 'r', 'v', 'b', 't'], words: ['can', 'fan', 'man', 'pan', 'ran', 'van', 'ban', 'tan'] },
  { ending: 'ig', startingLetters: ['b', 'd', 'f', 'j', 'p', 'w', 'r', 'z'], words: ['big', 'dig', 'fig', 'jig', 'pig', 'wig', 'rig', 'zig'] },
  { ending: 'og', startingLetters: ['b', 'd', 'f', 'h', 'l', 'r', 'j', 'n'], words: ['bog', 'dog', 'fog', 'hog', 'log', 'rog', 'jog', 'nog'] },
  { ending: 'un', startingLetters: ['b', 'f', 'g', 'r', 's', 'p', 'n', 'h'], words: ['bun', 'fun', 'gun', 'run', 'sun', 'pun', 'nun', 'hun'] },
  { ending: 'op', startingLetters: ['h', 'm', 'p', 's', 't', 'c', 'b', 'd'], words: ['hop', 'mop', 'pop', 'sop', 'top', 'cop', 'bop', 'drop'] },
  { ending: 'in', startingLetters: ['b', 'f', 'k', 'p', 's', 't', 'w', 'ch'], words: ['bin', 'fin', 'kin', 'pin', 'sin', 'tin', 'win', 'chin'] },
  { ending: 'ot', startingLetters: ['c', 'd', 'g', 'h', 'l', 'n', 'p', 'r'], words: ['cot', 'dot', 'got', 'hot', 'lot', 'not', 'pot', 'rot'] },
  { ending: 'ake', startingLetters: ['b', 'c', 'f', 'l', 'm', 'r', 's', 't'], words: ['bake', 'cake', 'fake', 'lake', 'make', 'rake', 'sake', 'take'] },
  { ending: 'ight', startingLetters: ['f', 'l', 'm', 'n', 'r', 's', 't', 'br'], words: ['fight', 'light', 'might', 'night', 'right', 'sight', 'tight', 'bright'] },
];

// ─── Quiz Questions ─────────────────────────────────────────────────────────
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
  { id: 'q3', emoji: '🌈', question: 'How many colors does a rainbow have?', options: ['5', '7', '6', '8'], correctIndex: 1, explanation: 'A rainbow has 7 beautiful colors!' },
  { id: 'q4', emoji: '🕷️', question: 'How many legs does a spider have?', options: ['6', '4', '10', '8'], correctIndex: 3, explanation: 'Spiders have 8 legs!' },
  { id: 'q5', emoji: '🐟', question: 'Where do fish live?', options: ['In trees', 'In water', 'Underground', 'In clouds'], correctIndex: 1, explanation: 'Fish live in water and breathe through gills!' },
  { id: 'q6', emoji: '☀️', question: 'What gives us light during the day?', options: ['Moon', 'Stars', 'Sun', 'Lamp'], correctIndex: 2, explanation: 'The Sun gives us light and warmth during the day!' },
  { id: 'q7', emoji: '🐦', question: 'Which animal has feathers?', options: ['Dog', 'Cat', 'Fish', 'Bird'], correctIndex: 3, explanation: 'Birds have feathers! Feathers help them fly and stay warm.' },
  { id: 'q8', emoji: '🍌', question: 'What color is a ripe banana?', options: ['Red', 'Blue', 'Yellow', 'Green'], correctIndex: 2, explanation: 'A ripe banana is yellow. Green bananas are not ready to eat yet!' },
  { id: 'q9', emoji: '🐄', question: 'What do we get from cows?', options: ['Eggs', 'Wool', 'Milk', 'Honey'], correctIndex: 2, explanation: 'Cows give us milk which we use to make cheese, butter, and yogurt!' },
  { id: 'q10', emoji: '🌍', question: 'What shape is the Earth?', options: ['Flat', 'Square', 'Triangle', 'Round'], correctIndex: 3, explanation: 'The Earth is round like a big ball called a sphere!' },
  { id: 'q11', emoji: '🦋', question: 'What does a caterpillar turn into?', options: ['A bee', 'A butterfly', 'A worm', 'A beetle'], correctIndex: 1, explanation: 'A caterpillar wraps itself in a cocoon and transforms into a beautiful butterfly!' },
  { id: 'q12', emoji: '🌙', question: 'When can we see the moon?', options: ['Only at noon', 'Only at sunrise', 'Mostly at night', 'Only underground'], correctIndex: 2, explanation: 'We mostly see the moon at night because it reflects the Sun\'s light in the dark sky!' },
  { id: 'q13', emoji: '🏠', question: 'What do we call the place where we live?', options: ['School', 'Home', 'Hospital', 'Library'], correctIndex: 1, explanation: 'We call the place where we live our home or house!' },
  { id: 'q14', emoji: '🍦', question: 'Which is cold and sweet to eat?', options: ['Pizza', 'Soup', 'Ice Cream', 'Rice'], correctIndex: 2, explanation: 'Ice cream is cold and sweet — it is made from frozen cream and sugar!' },
  { id: 'q15', emoji: '🌱', question: 'What do plants need to grow?', options: ['Petrol', 'Sunlight and water', 'Sand and rocks', 'Chocolate'], correctIndex: 1, explanation: 'Plants need sunlight, water and soil to grow healthy and strong!' },
];

// ─── Countable Objects ──────────────────────────────────────────────────────
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
  { id: 'balls', singular: 'ball', plural: 'balls', emoji: '⚽' },
  { id: 'flowers', singular: 'flower', plural: 'flowers', emoji: '🌸' },
  { id: 'fish', singular: 'fish', plural: 'fish', emoji: '🐟' },
  { id: 'butterflies', singular: 'butterfly', plural: 'butterflies', emoji: '🦋' },
  { id: 'moons', singular: 'moon', plural: 'moons', emoji: '🌙' },
  { id: 'clouds', singular: 'cloud', plural: 'clouds', emoji: '☁️' },
  { id: 'trees', singular: 'tree', plural: 'trees', emoji: '🌳' },
  { id: 'robots', singular: 'robot', plural: 'robots', emoji: '🤖' },
  { id: 'cats', singular: 'cat', plural: 'cats', emoji: '🐱' },
];

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
  { number: 1, word: 'One', emoji: '1️⃣', audioText: 'This is number one.', funFact: 'One is the first number you count! One means just a single thing — like one sun in the sky or one nose on your face!' },
  { number: 2, word: 'Two', emoji: '2️⃣', audioText: 'This is number two.', funFact: 'Two things go together, like your two eyes, your two hands, and your two feet. Can you find two of something around you?' },
  { number: 3, word: 'Three', emoji: '3️⃣', audioText: 'This is number three.', funFact: 'Three is a favourite number in stories — like the three little pigs and the three billy goats gruff! A triangle has three sides.' },
  { number: 4, word: 'Four', emoji: '4️⃣', audioText: 'This is number four.', funFact: 'Four things are easy to spot! A table has four legs, a car has four wheels, and the year has four seasons.' },
  { number: 5, word: 'Five', emoji: '5️⃣', audioText: 'This is number five.', funFact: 'Five is the number of fingers on one hand! You can count to five on just one hand — hold them up and count each finger!' },
  { number: 6, word: 'Six', emoji: '6️⃣', audioText: 'This is number six.', funFact: 'Six is double three! An egg box holds six eggs, and a honeybee cell has six sides. Bees are very clever builders!' },
  { number: 7, word: 'Seven', emoji: '7️⃣', audioText: 'This is number seven.', funFact: 'Seven is a lucky number in many stories! A week has seven days — Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday.' },
  { number: 8, word: 'Eight', emoji: '8️⃣', audioText: 'This is number eight.', funFact: 'Eight looks like two circles stacked on top of each other! A spider has eight legs, and an octopus has eight arms.' },
  { number: 9, word: 'Nine', emoji: '9️⃣', audioText: 'This is number nine.', funFact: 'Nine is one less than ten! If you have nine apples and someone gives you one more, you will have ten!' },
  { number: 10, word: 'Ten', emoji: '🔟', audioText: 'This is number ten.', funFact: 'Ten is a special number because we have ten fingers! Hold up all your fingers — that is ten! You can count anything up to ten on your hands.' },
  { number: 11, word: 'Eleven', emoji: '1️⃣1️⃣', audioText: 'This is number eleven.', funFact: 'Eleven comes after ten! It is like ten plus one more. If you had ten sweets and got one more, you would have eleven!' },
  { number: 12, word: 'Twelve', emoji: '1️⃣2️⃣', audioText: 'This is number twelve.', funFact: 'Twelve is a very useful number. There are twelve months in a year and twelve hours on a clock face. Can you count to twelve?' },
  { number: 13, word: 'Thirteen', emoji: '1️⃣3️⃣', audioText: 'This is number thirteen.', funFact: 'Thirteen is ten and three more. If you had thirteen biscuits and put them in groups of ten and three, how many would be in each group?' },
  { number: 14, word: 'Fourteen', emoji: '1️⃣4️⃣', audioText: 'This is number fourteen.', funFact: 'Fourteen is ten and four more. Two weeks have fourteen days in them — that is a lot of days!' },
  { number: 15, word: 'Fifteen', emoji: '1️⃣5️⃣', audioText: 'This is number fifteen.', funFact: 'Fifteen is ten and five more. If you have fifteen blocks and share them equally with a friend, you each get seven and a half!' },
  { number: 16, word: 'Sixteen', emoji: '1️⃣6️⃣', audioText: 'This is number sixteen.', funFact: 'Sixteen is four groups of four. You could share sixteen strawberries equally between four friends — they would each get four!' },
  { number: 17, word: 'Seventeen', emoji: '1️⃣7️⃣', audioText: 'This is number seventeen.', funFact: 'Seventeen is ten and seven more. Can you count seventeen hops on one foot? Give it a try!' },
  { number: 18, word: 'Eighteen', emoji: '1️⃣8️⃣', audioText: 'This is number eighteen.', funFact: 'Eighteen is ten and eight more. Three groups of six make eighteen. You are really good at big numbers!' },
  { number: 19, word: 'Nineteen', emoji: '1️⃣9️⃣', audioText: 'This is number nineteen.', funFact: 'Nineteen comes just before twenty. It is almost twenty! If you took one away from twenty, you would have nineteen.' },
  { number: 20, word: 'Twenty', emoji: '2️⃣0️⃣', audioText: 'This is number twenty.', funFact: 'Twenty is two tens! If you have two groups of ten things and put them together, that makes twenty. Hold up all your fingers twice — that is twenty!' },
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
  { id: 'circle', name: 'Circle', emoji: '⭕', audioText: 'This is a circle.', funFact: 'A circle is a perfectly round shape with no corners and no straight edges. Balls, wheels, and the sun are all circle shapes!', sides: 0 },
  { id: 'square', name: 'Square', emoji: '🟦', audioText: 'This is a square.', funFact: 'A square has four equal sides and four corners. Window panes, tiles on a floor, and slices of bread are often square shapes!', sides: 4 },
  { id: 'triangle', name: 'Triangle', emoji: '🔺', audioText: 'This is a triangle.', funFact: 'A triangle has three straight sides and three corners. The roof of a house is shaped like a triangle, and slices of pizza too!', sides: 3 },
  { id: 'rectangle', name: 'Rectangle', emoji: '▬', audioText: 'This is a rectangle.', funFact: 'A rectangle has four sides and four corners, but two sides are longer than the other two. Books, doors, and television screens are rectangle shapes!', sides: 4 },
  { id: 'star', name: 'Star', emoji: '⭐', audioText: 'This is a star.', funFact: 'A star has five sharp points sticking out all around. We draw stars to show something is great — like a gold star on your schoolwork!', sides: 5 },
  { id: 'heart', name: 'Heart', emoji: '❤️', audioText: 'This is a heart.', funFact: 'Your heart is inside your chest and works all day and all night to pump blood around your body. You can feel it beating if you put your hand on your chest. It goes lub-dub, lub-dub!', sides: 0 },
  { id: 'diamond', name: 'Diamond', emoji: '💎', audioText: 'This is a diamond.', funFact: 'A diamond shape has four sides that are all the same length, but it stands on one of its corners. Playing cards use diamond shapes!', sides: 4 },
  { id: 'oval', name: 'Oval', emoji: '🥚', audioText: 'This is an oval.', funFact: 'An oval is a stretched-out circle, a bit like an egg. Mirrors, rugby balls, and eggs are oval shapes!', sides: 0 },
  { id: 'pentagon', name: 'Pentagon', emoji: '⬠', audioText: 'This is a pentagon.', funFact: 'A pentagon has five straight sides and five corners. The shape of a house when you include the roof is a pentagon!', sides: 5 },
  { id: 'hexagon', name: 'Hexagon', emoji: '⬡', audioText: 'This is a hexagon.', funFact: 'A hexagon has six sides and six corners. Honeybees make their honeycomb out of tiny hexagon cells — they are brilliant builders!', sides: 6 },
  { id: 'octagon', name: 'Octagon', emoji: '🛑', audioText: 'This is an octagon.', funFact: 'An octagon has eight sides and eight corners. The red stop signs you see on roads are octagons!', sides: 8 },
  { id: 'crescent', name: 'Crescent', emoji: '🌙', audioText: 'This is a crescent.', funFact: 'A crescent is a curved shape like a smile or the moon when it is partly hidden. The moon often looks like a crescent in the night sky!', sides: 0 },
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
  { id: 'red', name: 'Red', hex: '#FF3333', emoji: '🔴', audioText: 'This is red.', funFact: 'Red is a bright, bold colour. Firetrucks, strawberries, apples, and roses are red. Red often means stop or danger — like at a traffic light!' },
  { id: 'orange', name: 'Orange', hex: '#FF8C00', emoji: '🟠', audioText: 'This is orange.', funFact: 'An orange is a round, juicy fruit with a tough orange skin you peel off. Inside it is full of sweet, tangy juice. Oranges are great for your body!' },
  { id: 'yellow', name: 'Yellow', hex: '#FFD700', emoji: '🟡', audioText: 'This is yellow.', funFact: 'Yellow is a cheerful, sunny colour. The sun, bananas, lemons, and sunflowers are yellow. Yellow is one of the brightest colours you can see!' },
  { id: 'green', name: 'Green', hex: '#22C55E', emoji: '🟢', audioText: 'This is green.', funFact: 'Green is the colour of nature. Grass, leaves, frogs, peas, and cucumbers are green. Looking at green things can make you feel calm and peaceful!' },
  { id: 'blue', name: 'Blue', hex: '#3B82F6', emoji: '🔵', audioText: 'This is blue.', funFact: 'Blue is a cool, calm colour. The sky above you and the ocean are blue. Blueberries, jeans, and forget-me-not flowers are blue too!' },
  { id: 'purple', name: 'Purple', hex: '#9333EA', emoji: '🟣', audioText: 'This is purple.', funFact: 'Purple is a rich, royal colour. Grapes, lavender, plums, and some butterflies are purple. Long ago only kings and queens could wear purple clothes!' },
  { id: 'pink', name: 'Pink', hex: '#EC4899', emoji: '🩷', audioText: 'This is pink.', funFact: 'Pink is a soft, gentle colour. Flamingos, strawberry ice cream, cherry blossoms, and piglets are all pink. Pink is a mix of red and white!' },
  { id: 'brown', name: 'Brown', hex: '#92400E', emoji: '🟤', audioText: 'This is brown.', funFact: 'Brown is a warm, earthy colour. Soil, chocolate, tree trunks, bears, and wooden furniture are brown. Brown things often feel cosy and natural!' },
  { id: 'white', name: 'White', hex: '#E5E7EB', emoji: '⚪', audioText: 'This is white.', funFact: 'White is a clean, bright colour. Snow, clouds, polar bears, and daisies are white. White reflects all the colours of light — that is why it looks so bright!' },
  { id: 'black', name: 'Black', hex: '#1F2937', emoji: '⚫', audioText: 'This is black.', funFact: 'Black is a dark, strong colour. The night sky, blackboards, coal, and penguin feathers are black. When all the lights go off, everything looks black!' },
  { id: 'gray', name: 'Gray', hex: '#9CA3AF', emoji: '🩶', audioText: 'This is gray.', funFact: 'Gray is a gentle in-between colour — not as dark as black and not as light as white. Elephants, rainy clouds, and some cats and rabbits are gray!' },
  { id: 'gold', name: 'Gold', hex: '#F59E0B', emoji: '🥇', audioText: 'This is gold.', funFact: 'Gold is a shiny, sparkly colour that looks like treasure! Trophies, medals, and stars are often gold because it means you have done something brilliant!' },
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
  { id: 'apple', name: 'Apple', emoji: '🍎', category: 'Fruit', audioText: 'This is an apple.', funFact: 'An apple is a round fruit that grows on trees. It is sweet and crunchy and you can eat it with the skin on. Apples make a great lunchbox snack!' },
  { id: 'banana', name: 'Banana', emoji: '🍌', category: 'Fruit', audioText: 'This is a banana.', funFact: 'A banana is a long, curved yellow fruit. It is soft, sweet, and easy to peel. Monkeys love bananas and so do many children!' },
  { id: 'orange', name: 'Orange', emoji: '🍊', category: 'Fruit', audioText: 'This is an orange.', funFact: 'An orange is a round, juicy fruit with a tough orange skin you peel off. Inside it is full of sweet, tangy juice. Oranges are great for your body!' },
  { id: 'grapes', name: 'Grapes', emoji: '🍇', category: 'Fruit', audioText: 'These are grapes.', funFact: 'Grapes are tiny round fruits that grow in big bunches on vines. They can be green or purple and they are sweet and juicy. Raisins are just dried grapes!' },
  { id: 'strawberry', name: 'Strawberry', emoji: '🍓', category: 'Fruit', audioText: 'This is a strawberry.', funFact: 'A strawberry is a small, red fruit shaped like a heart with a leafy green top. It is sweet and smells wonderful. Strawberries are delicious with cream!' },
  { id: 'watermelon', name: 'Watermelon', emoji: '🍉', category: 'Fruit', audioText: 'This is a watermelon.', funFact: 'A watermelon is a very large, round fruit with a green skin and bright red inside full of juice. It is wonderfully refreshing to eat in summer!' },
  { id: 'pineapple', name: 'Pineapple', emoji: '🍍', category: 'Fruit', audioText: 'This is a pineapple.', funFact: 'A pineapple has spiky, tough skin on the outside and sweet, yellow, juicy fruit inside. It grows on a plant close to the ground and has a spiky crown of leaves on top!' },
  { id: 'mango', name: 'Mango', emoji: '🥭', category: 'Fruit', audioText: 'This is a mango.', funFact: 'A mango is a large, oval fruit with smooth skin that can be yellow, orange, or red. Inside it is bright orange and very sweet and juicy. Mangoes are loved all over the world!' },
  { id: 'cherry', name: 'Cherry', emoji: '🍒', category: 'Fruit', audioText: 'These are cherries.', funFact: 'Cherries are tiny, round, red fruits with a small hard stone in the middle. They often come in pairs on the same stalk and taste wonderfully sweet!' },
  { id: 'lemon', name: 'Lemon', emoji: '🍋', category: 'Fruit', audioText: 'This is a lemon.', funFact: 'A lemon is a bright yellow fruit with a very sour taste. People use lemon juice to make lemonade, add flavour to cooking, and to make cakes!' },
  { id: 'pear', name: 'Pear', emoji: '🍐', category: 'Fruit', audioText: 'This is a pear.', funFact: 'A pear is a soft, sweet fruit that is round at the bottom and narrow at the top. It is green or yellow and grows on trees. Pears are gentle and easy to eat!' },
  { id: 'peach', name: 'Peach', emoji: '🍑', category: 'Fruit', audioText: 'This is a peach.', funFact: 'A peach is a round, soft fruit with a fuzzy skin that is yellow and pink. Inside it is sweet and juicy with a large stone in the middle. Peaches smell wonderful!' },
  { id: 'blueberry', name: 'Blueberry', emoji: '🫐', category: 'Fruit', audioText: 'These are blueberries.', funFact: 'Blueberries are tiny, round, dark blue fruits that grow on bushes. They are sweet and a little tangy and are perfect to pop in your mouth or sprinkle on porridge!' },
  { id: 'kiwi', name: 'Kiwi', emoji: '🥝', category: 'Fruit', audioText: 'This is a kiwi.', funFact: 'A kiwi is a small fruit with rough, brown, hairy skin. When you cut it open, inside is bright green with tiny black seeds and it tastes sweet and tangy!' },
  { id: 'coconut', name: 'Coconut', emoji: '🥥', category: 'Fruit', audioText: 'This is a coconut.', funFact: 'A coconut is a large fruit with a very hard brown shell. Inside there is sweet white flesh and a refreshing drink called coconut water. Coconuts grow on tall palm trees!' },
  { id: 'pomegranate', name: 'Pomegranate', emoji: '🍈', category: 'Fruit', audioText: 'This is a pomegranate.', funFact: 'A pomegranate has a tough, leathery red skin. When you open it up, inside are hundreds of tiny, juicy, jewel-like red seeds that are sweet and delicious to eat!' },
  { id: 'fig', name: 'Fig', emoji: '🍑', category: 'Fruit', audioText: 'This is a fig.', funFact: 'A fig is a soft, pear-shaped fruit with a chewy sweet inside full of tiny seeds. Figs grow on trees and can be eaten fresh or dried. They taste like jam!' },
  { id: 'papaya', name: 'Papaya', emoji: '🧡', category: 'Fruit', audioText: 'This is a papaya.', funFact: 'A papaya is a large, oval fruit with smooth orange-yellow skin. Inside it is bright orange and very sweet. It grows on tall trees in warm, sunny places!' },
  { id: 'guava', name: 'Guava', emoji: '🍏', category: 'Fruit', audioText: 'This is a guava.', funFact: 'A guava is a small, round or oval fruit with green or yellow skin. Inside it can be white or pink and it smells amazing — sweet and floral. Guavas are very good for you!' },
  { id: 'plum', name: 'Plum', emoji: '🍇', category: 'Fruit', audioText: 'This is a plum.', funFact: 'A plum is a small, round fruit with smooth purple or red skin and soft, juicy fruit inside. It has a stone in the middle. Plums are sweet and a little bit sharp!' },
  { id: 'apricot', name: 'Apricot', emoji: '🟠', category: 'Fruit', audioText: 'This is an apricot.', funFact: 'An apricot is a small, round, orange fruit with smooth velvety skin and a sweet, gentle flavour. It is like a smaller, softer peach and it has a stone in the middle!' },
  { id: 'lychee', name: 'Lychee', emoji: '❤️', category: 'Fruit', audioText: 'This is a lychee.', funFact: 'A lychee is a small fruit with a rough pink-red shell that you peel off. Inside is soft, white, sweet flesh that tastes like roses and grapes. Lychees are a special treat!' },
  { id: 'melon', name: 'Melon', emoji: '🍈', category: 'Fruit', audioText: 'This is a melon.', funFact: 'A melon is a large, round or oval fruit with a thick, tough skin. Inside the flesh is soft, sweet, and very juicy — perfect for eating on a hot summer day!' },
  { id: 'raspberry', name: 'Raspberry', emoji: '🍓', category: 'Fruit', audioText: 'This is a raspberry.', funFact: 'A raspberry is a small, soft, red fruit made up of lots of tiny little bubbles all clustered together. They are sweet and slightly tangy and perfect for eating by the handful!' },
];

// ─── Vegetables ────────────────────────────────────────────────────────────
export const vegetablesData: LearningItem[] = [
  { id: 'carrot', name: 'Carrot', emoji: '🥕', category: 'Vegetable', audioText: 'This is a carrot.', funFact: 'A carrot is a long, orange vegetable that grows underground. It is crunchy and sweet and rabbits love them! You can eat carrots raw as a crunchy snack or cooked in soup.' },
  { id: 'broccoli', name: 'Broccoli', emoji: '🥦', category: 'Vegetable', audioText: 'This is broccoli.', funFact: 'Broccoli is a green vegetable that looks just like a tiny tree with a thick stalk and bushy green top. It is very good for your body and tastes great when cooked!' },
  { id: 'corn', name: 'Corn', emoji: '🌽', category: 'Vegetable', audioText: 'This is corn.', funFact: 'Corn grows on tall, green stalks as a long cob covered in rows of yellow kernels. You can eat it boiled or roasted. Popcorn is made from corn kernels that pop open with heat!' },
  { id: 'potato', name: 'Potato', emoji: '🥔', category: 'Vegetable', audioText: 'This is a potato.', funFact: 'A potato is a round vegetable that grows underground. It has brown or yellow skin and white inside. You can make it into chips, mash, soup, or baked potato — so many ways to enjoy it!' },
  { id: 'tomato', name: 'Tomato', emoji: '🍅', category: 'Vegetable', audioText: 'This is a tomato.', funFact: 'A tomato is a round, red, juicy fruit that is used in cooking like a vegetable. We use tomatoes to make ketchup, pasta sauce, and pizza topping!' },
  { id: 'cucumber', name: 'Cucumber', emoji: '🥒', category: 'Vegetable', audioText: 'This is a cucumber.', funFact: 'A cucumber is a long, smooth, green vegetable with crunchy flesh inside. It tastes cool and refreshing and is lovely sliced in salads or eaten as a snack with dips!' },
  { id: 'pepper', name: 'Bell Pepper', emoji: '🫑', category: 'Vegetable', audioText: 'This is a bell pepper.', funFact: 'A bell pepper is a hollow, crunchy vegetable with shiny smooth skin. It can be red, green, yellow, or orange. It is sweet and crunchy and lovely to eat raw or cooked!' },
  { id: 'eggplant', name: 'Eggplant', emoji: '🍆', category: 'Vegetable', audioText: 'This is an eggplant.', funFact: 'An eggplant is a shiny, purple vegetable with smooth skin and soft white flesh inside. It is used in lots of cooked dishes and is also called an aubergine!' },
  { id: 'mushroom', name: 'Mushroom', emoji: '🍄', category: 'Vegetable', audioText: 'This is a mushroom.', funFact: 'A mushroom has a round top called a cap and a short stalk. It grows in damp, shady places. Mushrooms come in many shapes and sizes and are lovely in cooked dishes!' },
  { id: 'onion', name: 'Onion', emoji: '🧅', category: 'Vegetable', audioText: 'This is an onion.', funFact: 'An onion is a round vegetable with papery skin and layers inside. When you peel and cut an onion, it makes your eyes water! It gives lots of flavour to cooking.' },
  { id: 'garlic', name: 'Garlic', emoji: '🧄', category: 'Vegetable', audioText: 'This is garlic.', funFact: 'Garlic is a small, white bulb made up of lots of little cloves. It has a very strong smell and flavour and is used in cooking all over the world to make food taste delicious!' },
  { id: 'spinach', name: 'Spinach', emoji: '🌿', category: 'Vegetable', audioText: 'This is spinach.', funFact: 'Spinach is a leafy green vegetable with smooth, dark green leaves. It is very healthy and grows quickly. You can eat it raw in salads or cooked in pasta and soup!' },
  { id: 'peas', name: 'Peas', emoji: '🟢', category: 'Vegetable', audioText: 'These are peas.', funFact: 'Peas are small, round, bright green vegetables that grow inside long green pods. You pop open the pod to find a row of little peas inside. Peas are sweet and soft when cooked!' },
  { id: 'cabbage', name: 'Cabbage', emoji: '🥬', category: 'Vegetable', audioText: 'This is cabbage.', funFact: 'A cabbage is a round vegetable made up of tightly packed green or purple leaves. It is crunchy when raw and soft when cooked. Cabbage is used in lots of different dishes around the world!' },
  { id: 'cauliflower', name: 'Cauliflower', emoji: '🥦', category: 'Vegetable', audioText: 'This is cauliflower.', funFact: 'Cauliflower is a white vegetable that looks like broccoli but white instead of green. It has a compact, bumpy head and green leaves around the outside. It is soft and mild when cooked!' },
  { id: 'pumpkin', name: 'Pumpkin', emoji: '🎃', category: 'Vegetable', audioText: 'This is a pumpkin.', funFact: 'A pumpkin is a large, round, orange vegetable. It has a tough shell, orange flesh inside, and lots of seeds. We carve pumpkins into faces for Halloween and use the flesh to make soup and pie!' },
  { id: 'sweetpotato', name: 'Sweet Potato', emoji: '🍠', category: 'Vegetable', audioText: 'This is a sweet potato.', funFact: 'A sweet potato is an orange vegetable that grows underground. It is soft, sweet, and a lovely orange colour when cooked. It is different from a regular potato — sweeter and more colourful!' },
  { id: 'radish', name: 'Radish', emoji: '🔴', category: 'Vegetable', audioText: 'This is a radish.', funFact: 'A radish is a small, round or long vegetable with bright red or white skin and white crunchy flesh. It has a peppery, slightly sharp taste and is lovely sliced in salads!' },
  { id: 'beetroot', name: 'Beetroot', emoji: '🟣', category: 'Vegetable', audioText: 'This is a beetroot.', funFact: 'A beetroot is a round, dark purple-red vegetable that grows underground. When you cut it open it is a deep, rich purple colour. It is earthy and sweet and turns everything it touches pink!' },
  { id: 'lettuce', name: 'Lettuce', emoji: '🥬', category: 'Vegetable', audioText: 'This is lettuce.', funFact: 'Lettuce is a leafy green vegetable with soft, crispy leaves. It is the main ingredient in a salad. There are many types — some with round heads, some with long leaves, in different shades of green!' },
  { id: 'celery', name: 'Celery', emoji: '🌱', category: 'Vegetable', audioText: 'This is celery.', funFact: 'Celery is a crunchy green vegetable with long, curved stalks and feathery leaves on top. It makes a satisfying crunching sound when you bite it. It is lovely with peanut butter as a snack!' },
  { id: 'asparagus', name: 'Asparagus', emoji: '🌿', category: 'Vegetable', audioText: 'This is asparagus.', funFact: 'Asparagus is a tall, thin green vegetable that grows in spears up from the ground. The tips are tender and tasty. It has a gentle, earthy flavour and is wonderful roasted or steamed!' },
];

// ─── Animals ───────────────────────────────────────────────────────────────
export const animalsData: LearningItem[] = [
  { id: 'lion', name: 'Lion', emoji: '🦁', category: 'Animal', audioText: 'This is a lion.', funFact: 'A lion is a big, powerful wild cat with a golden coat. Male lions have a thick, fluffy mane of fur around their head. Lions live in Africa and make a very loud, impressive roar!' },
  { id: 'elephant', name: 'Elephant', emoji: '🐘', category: 'Animal', audioText: 'This is an elephant.', funFact: 'An elephant is the biggest animal on land. It has a long trunk it uses to drink water, pick up food, and give itself a shower! Elephants are very gentle and clever animals.' },
  { id: 'giraffe', name: 'Giraffe', emoji: '🦒', category: 'Animal', audioText: 'This is a giraffe.', funFact: 'A giraffe is the tallest animal in the world with a very long neck and long legs. It has a brown and cream patchy pattern. Its long neck helps it eat leaves from the very tops of trees!' },
  { id: 'penguin', name: 'Penguin', emoji: '🐧', category: 'Animal', audioText: 'This is a penguin.', funFact: 'A penguin is a bird with black and white feathers that looks like it is wearing a smart little suit. Penguins cannot fly but they are excellent swimmers and love waddling on ice!' },
  { id: 'dolphin', name: 'Dolphin', emoji: '🐬', category: 'Animal', audioText: 'This is a dolphin.', funFact: 'A dolphin is a friendly, clever sea animal that loves to swim fast and leap out of the water. Dolphins make clicking and whistling sounds to talk to each other and they love to play!' },
  { id: 'tiger', name: 'Tiger', emoji: '🐯', category: 'Animal', audioText: 'This is a tiger.', funFact: 'A tiger is a large wild cat with bright orange fur and black stripes. Every tiger has its own unique stripe pattern. Tigers are very strong swimmers and love playing in water!' },
  { id: 'bear', name: 'Bear', emoji: '🐻', category: 'Animal', audioText: 'This is a bear.', funFact: 'A bear is a large, furry animal with a big round body, short tail, and strong paws. Bears love to eat fish, berries, and honey. In winter, they sleep in a cosy den!' },
  { id: 'rabbit', name: 'Rabbit', emoji: '🐰', category: 'Animal', audioText: 'This is a rabbit.', funFact: 'A rabbit is a small, soft animal with long ears, a fluffy tail, and twitchy nose. Rabbits love to hop around, nibble on grass and carrots, and live in burrows underground!' },
  { id: 'frog', name: 'Frog', emoji: '🐸', category: 'Animal', audioText: 'This is a frog.', funFact: 'A frog is a small, smooth, green animal that loves to live near ponds and rivers. It has big eyes, long back legs for jumping, and makes a funny croaking sound!' },
  { id: 'owl', name: 'Owl', emoji: '🦉', category: 'Animal', audioText: 'This is an owl.', funFact: 'An owl is a bird with big round eyes and a round face that can turn almost all the way around. Owls are active at night and make a soft hooting sound in the dark!' },
  { id: 'parrot', name: 'Parrot', emoji: '🦜', category: 'Animal', audioText: 'This is a parrot.', funFact: 'A parrot is a brightly coloured bird with red, green, blue, and yellow feathers. Parrots are very clever and can learn to copy human words and sounds!' },
  { id: 'zebra', name: 'Zebra', emoji: '🦓', category: 'Animal', audioText: 'This is a zebra.', funFact: 'A zebra looks like a horse covered in black and white stripes. Every zebra has its own unique pattern of stripes — no two are exactly the same! Zebras live in Africa.' },
  { id: 'kangaroo', name: 'Kangaroo', emoji: '🦘', category: 'Animal', audioText: 'This is a kangaroo.', funFact: 'A kangaroo is an animal from Australia with strong back legs for jumping, a long tail, and a pouch on its tummy. The baby, called a joey, lives in the pouch!' },
  { id: 'panda', name: 'Panda', emoji: '🐼', category: 'Animal', audioText: 'This is a panda.', funFact: 'A giant panda is a large, fluffy black and white bear from China. Pandas love eating bamboo leaves and shoots all day long. Baby pandas are tiny and pink when they are born!' },
  { id: 'crocodile', name: 'Crocodile', emoji: '🐊', category: 'Animal', audioText: 'This is a crocodile.', funFact: 'A crocodile is a large, scaly reptile that lives near rivers and swamps. It has a long, flat body, a big wide mouth full of sharp teeth, and short but strong legs!' },
  { id: 'butterfly', name: 'Butterfly', emoji: '🦋', category: 'Animal', audioText: 'This is a butterfly.', funFact: 'A butterfly is an insect with four beautiful wings decorated with colourful patterns. It starts life as a caterpillar, then wraps itself in a cocoon and emerges as a butterfly!' },
  { id: 'shark', name: 'Shark', emoji: '🦈', category: 'Animal', audioText: 'This is a shark.', funFact: 'A shark is a large fish that lives in the ocean. It has a pointed nose, sharp teeth, and a triangle-shaped fin on its back that sticks up above the water when it swims close to the surface!' },
  { id: 'gorilla', name: 'Gorilla', emoji: '🦍', category: 'Animal', audioText: 'This is a gorilla.', funFact: 'A gorilla is the largest ape, with a big, strong body covered in dark fur. Gorillas are gentle and clever — they use sticks and stones as tools, and even learn sign language!' },
  { id: 'camel', name: 'Camel', emoji: '🐪', category: 'Animal', audioText: 'This is a camel.', funFact: 'A camel is a large animal with one or two humps on its back. Camels live in hot, sandy deserts. Their humps store fat to give them energy when food is scarce, and they can go a long time without water!' },
  { id: 'peacock', name: 'Peacock', emoji: '🦚', category: 'Animal', audioText: 'This is a peacock.', funFact: 'A peacock is a beautiful bird with bright blue and green feathers. The male peacock has an enormous tail that it fans out into a huge, colourful display to show off to other peacocks!' },
  { id: 'flamingo', name: 'Flamingo', emoji: '🦩', category: 'Animal', audioText: 'This is a flamingo.', funFact: 'A flamingo is a tall, slim bird with bright pink feathers and very long, thin legs. It often stands on one leg. Flamingos eat in groups and love wading in shallow, warm water!' },
  { id: 'wolf', name: 'Wolf', emoji: '🐺', category: 'Animal', audioText: 'This is a wolf.', funFact: 'A wolf is a wild animal that looks like a large dog with thick, grey fur. Wolves live in family groups called packs and howl to communicate with each other across long distances!' },
  { id: 'fox', name: 'Fox', emoji: '🦊', category: 'Animal', audioText: 'This is a fox.', funFact: 'A fox is a clever, quick animal with reddish-orange fur, a pointed nose, big ears, and a bushy tail. Foxes are curious and adventurous — they can often be seen in parks and gardens!' },
  { id: 'deer', name: 'Deer', emoji: '🦌', category: 'Animal', audioText: 'This is a deer.', funFact: 'A deer is a gentle, graceful animal with long, slender legs and large eyes. Male deer grow impressive branching antlers on their heads. Deer are shy and live in forests and meadows!' },
];

// ─── Vehicles ──────────────────────────────────────────────────────────────
export const vehiclesData: LearningItem[] = [
  { id: 'car', name: 'Car', emoji: '🚗', category: 'Vehicle', audioText: 'This is a car.', funFact: 'A car has four wheels, a steering wheel, and an engine. Families use cars to travel to school, the shops, and on holidays. You buckle your seatbelt to stay safe!' },
  { id: 'bus', name: 'Bus', emoji: '🚌', category: 'Vehicle', audioText: 'This is a bus.', funFact: 'A bus is a big vehicle that carries lots of people at once along set routes. You get on at a bus stop, pay your fare, find a seat, and ride to where you want to go!' },
  { id: 'airplane', name: 'Airplane', emoji: '✈️', category: 'Vehicle', audioText: 'This is an airplane.', funFact: 'An airplane has wings, a long body, and powerful engines that let it fly high in the sky. It takes people to faraway places across countries and oceans in just a few hours!' },
  { id: 'train', name: 'Train', emoji: '🚂', category: 'Vehicle', audioText: 'This is a train.', funFact: 'A train has a long line of carriages that run on metal tracks called rails. Trains carry people between cities and towns. You can look out of the window and watch the countryside go by!' },
  { id: 'boat', name: 'Boat', emoji: '⛵', category: 'Vehicle', audioText: 'This is a boat.', funFact: 'A boat floats on water and is used for travelling across rivers, lakes, and seas. Some boats use sails to catch the wind, and some have engines. Small boats rock gently on the waves!' },
  { id: 'bicycle', name: 'Bicycle', emoji: '🚲', category: 'Vehicle', audioText: 'This is a bicycle.', funFact: 'A bicycle has two wheels, pedals, and handlebars. You sit on the seat and push the pedals to make the wheels turn and go forward. Always wear a helmet when you ride a bicycle!' },
  { id: 'truck', name: 'Truck', emoji: '🚛', category: 'Vehicle', audioText: 'This is a truck.', funFact: 'A truck is a very large, powerful vehicle used to carry heavy loads from place to place. The front part is where the driver sits and the back part is a big container for carrying things!' },
  { id: 'helicopter', name: 'Helicopter', emoji: '🚁', category: 'Vehicle', audioText: 'This is a helicopter.', funFact: 'A helicopter has spinning blades on top instead of wings. These spinning blades let it go straight up into the air, fly in any direction, and hover perfectly still in one spot!' },
  { id: 'rocket', name: 'Rocket', emoji: '🚀', category: 'Vehicle', audioText: 'This is a rocket.', funFact: 'A rocket is a very powerful vehicle that blasts off into outer space. It makes a huge roar and leaves a trail of fire and smoke as it zooms up through the sky and out of the Earth!' },
  { id: 'ambulance', name: 'Ambulance', emoji: '🚑', category: 'Vehicle', audioText: 'This is an ambulance.', funFact: 'An ambulance is a special vehicle used to carry sick or injured people to hospital quickly. It has flashing lights and a loud siren so other cars move out of the way to let it through!' },
  { id: 'firetruck', name: 'Fire Truck', emoji: '🚒', category: 'Vehicle', audioText: 'This is a fire truck.', funFact: 'A fire truck is a big red vehicle that rushes to fires to help put them out. It carries long hoses, ladders, and tanks of water. Firefighters ride in fire trucks to keep people safe!' },
  { id: 'submarine', name: 'Submarine', emoji: '🤿', category: 'Vehicle', audioText: 'This is a submarine.', funFact: 'A submarine is a special vehicle that can travel underwater. It looks like a long metal tube. The crew inside can see out through windows called portholes and dive deep into the ocean!' },
  { id: 'tractor', name: 'Tractor', emoji: '🚜', category: 'Vehicle', audioText: 'This is a tractor.', funFact: 'A tractor is a powerful vehicle used on farms. It has very large back wheels to grip muddy soil. Farmers use tractors to pull ploughs, plant seeds, and help harvest crops!' },
  { id: 'motorcycle', name: 'Motorcycle', emoji: '🏍️', category: 'Vehicle', audioText: 'This is a motorcycle.', funFact: 'A motorcycle is a two-wheeled vehicle with an engine and handlebars to steer. The rider sits astride it and always wears a helmet and special clothing to stay safe on the road!' },
  { id: 'scooter', name: 'Scooter', emoji: '🛵', category: 'Vehicle', audioText: 'This is a scooter.', funFact: 'A scooter is a small, two-wheeled vehicle that is easy to ride in towns and cities. It is smaller than a motorbike and great for short journeys. Some scooters run on electricity!' },
  { id: 'hotairballoon', name: 'Hot Air Balloon', emoji: '🎈', category: 'Vehicle', audioText: 'This is a hot air balloon.', funFact: 'A hot air balloon floats up into the sky using a large, colourful balloon full of hot air. A basket hangs underneath for people to stand in. Rides in hot air balloons are very peaceful!' },
  { id: 'ship', name: 'Ship', emoji: '🚢', category: 'Vehicle', audioText: 'This is a ship.', funFact: 'A ship is a very large boat that travels across seas and oceans. Ships can carry hundreds of passengers or huge amounts of cargo. Some ships are so big they have restaurants, pools, and cinemas on board!' },
  { id: 'snowmobile', name: 'Snowmobile', emoji: '🏂', category: 'Vehicle', audioText: 'This is a snowmobile.', funFact: 'A snowmobile is a vehicle for travelling over snow and ice. Instead of wheels it has skis at the front and a moving belt called a track at the back. It is used in cold, snowy places!' },
  { id: 'taxi', name: 'Taxi', emoji: '🚕', category: 'Vehicle', audioText: 'This is a taxi.', funFact: 'A taxi is a car that you can hire to take you anywhere you want to go. You tell the driver where you want to go, they drive you there, and you pay at the end of the journey!' },
  { id: 'spaceshuttle', name: 'Space Shuttle', emoji: '🛸', category: 'Vehicle', audioText: 'This is a space shuttle.', funFact: 'A space shuttle is a special vehicle that can fly into outer space, orbit the Earth, and then come back down to land on a runway like an airplane. Astronauts travel to space in space shuttles!' },
];

// ─── Body Parts ─────────────────────────────────────────────────────────────
export const bodyPartsData: LearningItem[] = [
  { id: 'head', name: 'Head', emoji: '🗣️', category: 'Body Part', audioText: 'This is the head.', funFact: 'Your head is at the very top of your body. Your brain is inside your head and it controls everything you do — thinking, moving, dreaming, and feeling!' },
  { id: 'eyes', name: 'Eyes', emoji: '👀', category: 'Body Part', audioText: 'These are the eyes.', funFact: 'Your eyes are how you see the world around you. They let you read books, watch television, see the faces of people you love, and enjoy all the beautiful colours around you!' },
  { id: 'ears', name: 'Ears', emoji: '👂', category: 'Body Part', audioText: 'These are the ears.', funFact: 'Your ears are how you hear sounds. They let you listen to music, hear people talking to you, and enjoy lovely sounds like birdsong, laughter, and the rain!' },
  { id: 'nose', name: 'Nose', emoji: '👃', category: 'Body Part', audioText: 'This is the nose.', funFact: 'Your nose is how you smell things. It lets you enjoy lovely smells like flowers, fresh bread, and your favourite food cooking. Your nose also helps you breathe!' },
  { id: 'mouth', name: 'Mouth', emoji: '👄', category: 'Body Part', audioText: 'This is the mouth.', funFact: 'Your mouth is how you eat food, talk, and smile! Your tongue helps you taste sweet, salty, sour, and savoury flavours. Smiling is one of the best things your mouth can do!' },
  { id: 'teeth', name: 'Teeth', emoji: '🦷', category: 'Body Part', audioText: 'These are the teeth.', funFact: 'Your teeth help you bite and chew your food so you can swallow it. Brushing your teeth twice a day keeps them clean, white, and healthy. You will grow two sets of teeth in your life!' },
  { id: 'tongue', name: 'Tongue', emoji: '👅', category: 'Body Part', audioText: 'This is the tongue.', funFact: 'Your tongue sits inside your mouth and helps you taste your food and make the sounds of words when you speak. Without your tongue you would not be able to say most words!' },
  { id: 'hair', name: 'Hair', emoji: '💇', category: 'Body Part', audioText: 'This is hair.', funFact: 'Hair grows on top of your head and keeps your head warm. Hair can be straight, curly, wavy, long, or short. It comes in many colours — black, brown, blonde, red, and more!' },
  { id: 'neck', name: 'Neck', emoji: '🧣', category: 'Body Part', audioText: 'This is the neck.', funFact: 'Your neck connects your head to your body. It holds your head up and lets you turn your head to look around you. Without your neck you could not look left, right, up, or down!' },
  { id: 'shoulders', name: 'Shoulders', emoji: '💪', category: 'Body Part', audioText: 'These are the shoulders.', funFact: 'Your shoulders are the rounded joints at the top of your arms. They let you lift your arms, throw a ball, carry a bag, and give someone a hug. Shoulders are very flexible!' },
  { id: 'arms', name: 'Arms', emoji: '💪', category: 'Body Part', audioText: 'These are the arms.', funFact: 'Your arms hang from your shoulders and end at your hands. You use your arms to reach for things, carry things, throw, catch, wave, and give people big warm hugs!' },
  { id: 'hands', name: 'Hands', emoji: '🤲', category: 'Body Part', audioText: 'These are the hands.', funFact: 'Your hands are at the end of your arms. You use your hands for everything — writing, drawing, eating, clapping, building, and touching things to feel if they are soft, smooth, or rough!' },
  { id: 'fingers', name: 'Fingers', emoji: '🤙', category: 'Body Part', audioText: 'These are the fingers.', funFact: 'You have five fingers on each hand. Your fingers help you grip and pick things up. Each fingertip has a unique swirly pattern called a fingerprint — yours is unlike anyone else in the world!' },
  { id: 'chest', name: 'Chest', emoji: '🫀', category: 'Body Part', audioText: 'This is the chest.', funFact: 'Your chest is the front part of your upper body. Inside your chest are your heart and your lungs — two very important organs that keep you alive every single moment!' },
  { id: 'heart', name: 'Heart', emoji: '❤️', category: 'Body Part', audioText: 'This is the heart.', funFact: 'Your heart is inside your chest and works all day and all night to pump blood around your body. You can feel it beating if you put your hand on your chest. It goes lub-dub, lub-dub!' },
  { id: 'lungs', name: 'Lungs', emoji: '🫁', category: 'Body Part', audioText: 'These are the lungs.', funFact: 'Your lungs are inside your chest and they help you breathe. When you breathe in, your lungs fill up with air. When you breathe out, they push the air back out again. Breathe in... and out!' },
  { id: 'stomach', name: 'Stomach', emoji: '🫃', category: 'Body Part', audioText: 'This is the stomach.', funFact: 'Your stomach is in your tummy area. When you eat food, it goes down to your stomach where it gets broken down and turned into energy for your body. When your tummy rumbles, it means it is hungry!' },
  { id: 'back', name: 'Back', emoji: '🧍', category: 'Body Part', audioText: 'This is the back.', funFact: 'Your back is the rear part of your body from your neck to your bottom. Inside your back is your spine — a column of small bones stacked up that helps you stand tall and straight!' },
  { id: 'legs', name: 'Legs', emoji: '🦵', category: 'Body Part', audioText: 'These are the legs.', funFact: 'Your legs connect your body to your feet. You use your legs to walk, run, jump, skip, kick, and dance. Your legs carry you everywhere you want to go!' },
  { id: 'knees', name: 'Knees', emoji: '🦵', category: 'Body Part', audioText: 'These are the knees.', funFact: 'Your knees are the bendy joints in the middle of your legs. They let you bend your legs so you can sit, crouch, climb stairs, kick a ball, and do all kinds of active things!' },
  { id: 'feet', name: 'Feet', emoji: '🦶', category: 'Body Part', audioText: 'These are the feet.', funFact: 'Your feet are at the bottom of your legs and they carry your whole body as you walk and run. Each foot has five toes that help you balance and push off the ground when you move!' },
  { id: 'toes', name: 'Toes', emoji: '🦶', category: 'Body Part', audioText: 'These are the toes.', funFact: 'You have five toes on each foot. Your toes help you keep your balance when you stand and walk. They grip the ground gently as you move and wiggle when you are tickled!' },
  { id: 'brain', name: 'Brain', emoji: '🧠', category: 'Body Part', audioText: 'This is the brain.', funFact: 'Your brain is inside your head and is the most important part of your body. It controls everything you do — thinking, dreaming, moving, remembering, feeling, and learning new things!' },
  { id: 'skin', name: 'Skin', emoji: '🤝', category: 'Body Part', audioText: 'This is skin.', funFact: 'Skin covers your whole body and protects everything inside. It comes in many beautiful shades and colours. Your skin can feel things — whether they are hot, cold, rough, smooth, or tickly!' },
];

// ─── Professions ───────────────────────────────────────────────────────────
export const professionsData: LearningItem[] = [
  { id: 'doctor', name: 'Doctor', emoji: '👨‍⚕️', category: 'Profession', audioText: 'This is a doctor.', funFact: 'A doctor looks after people when they are poorly. They listen to your heart, check your temperature, and give you medicine to help you feel better. Doctors work in hospitals and clinics!' },
  { id: 'teacher', name: 'Teacher', emoji: '👩‍🏫', category: 'Profession', audioText: 'This is a teacher.', funFact: 'A teacher helps children learn new things at school every day. They teach reading, writing, maths, science, art, and much more. Teachers are very important and kind people!' },
  { id: 'firefighter', name: 'Firefighter', emoji: '👨‍🚒', category: 'Profession', audioText: 'This is a firefighter.', funFact: 'A firefighter rushes to put out fires and help people who are in danger. They wear special fireproof suits, helmets, and breathing masks to stay safe in smoke and flames!' },
  { id: 'policeofficer', name: 'Police Officer', emoji: '👮', category: 'Profession', audioText: 'This is a police officer.', funFact: 'A police officer works to keep people safe and to help those who are in trouble. They wear a uniform and a badge so you can recognise them easily if you need help!' },
  { id: 'nurse', name: 'Nurse', emoji: '👩‍⚕️', category: 'Profession', audioText: 'This is a nurse.', funFact: 'A nurse works in a hospital or clinic caring for patients. Nurses take temperatures, give medicines, dress wounds, and make sure patients are comfortable and getting better!' },
  { id: 'chef', name: 'Chef', emoji: '👨‍🍳', category: 'Profession', audioText: 'This is a chef.', funFact: 'A chef cooks delicious meals in a restaurant or hotel kitchen. They wear a white jacket and a tall white hat. Chefs are very creative and love inventing new and tasty dishes!' },
  { id: 'engineer', name: 'Engineer', emoji: '👷', category: 'Profession', audioText: 'This is an engineer.', funFact: 'An engineer designs and builds things — like bridges, buildings, machines, and gadgets. When you cross a bridge or ride in a car, an engineer helped make those things work!' },
  { id: 'pilot', name: 'Pilot', emoji: '🧑‍✈️', category: 'Profession', audioText: 'This is a pilot.', funFact: 'A pilot flies aeroplanes and helicopters. They sit in a special seat at the front called the cockpit and use lots of buttons, levers, and screens to control the aircraft safely!' },
  { id: 'farmer', name: 'Farmer', emoji: '🧑‍🌾', category: 'Profession', audioText: 'This is a farmer.', funFact: 'A farmer grows fruits, vegetables, and grain, and looks after animals like cows, pigs, and chickens. Farmers wake up very early and work hard so shops are full of food for everyone!' },
  { id: 'artist', name: 'Artist', emoji: '🧑‍🎨', category: 'Profession', audioText: 'This is an artist.', funFact: 'An artist creates beautiful things like paintings, drawings, sculptures, and illustrations. Artists use their imagination to express ideas and feelings through what they make!' },
  { id: 'scientist', name: 'Scientist', emoji: '🧑‍🔬', category: 'Profession', audioText: 'This is a scientist.', funFact: 'A scientist asks questions about the world and does experiments to find the answers. Scientists discover how things work, create new medicines, and make amazing inventions!' },
  { id: 'dentist', name: 'Dentist', emoji: '🦷', category: 'Profession', audioText: 'This is a dentist.', funFact: 'A dentist takes care of your teeth. They check your mouth, clean your teeth, and fix any problems. Visiting the dentist twice a year keeps your smile healthy and bright!' },
  { id: 'musician', name: 'Musician', emoji: '🎵', category: 'Profession', audioText: 'This is a musician.', funFact: 'A musician plays musical instruments or sings to create music that people love to hear. They can play in an orchestra, a band, or on their own. Music can make people feel happy or calm!' },
  { id: 'librarian', name: 'Librarian', emoji: '📚', category: 'Profession', audioText: 'This is a librarian.', funFact: 'A librarian looks after a library and helps people find the perfect books to read. They organise all the books, help with research, and run story-time sessions for children!' },
  { id: 'astronaut', name: 'Astronaut', emoji: '🧑‍🚀', category: 'Profession', audioText: 'This is an astronaut.', funFact: 'An astronaut travels up into outer space on a rocket! They float around in zero gravity, look down at our beautiful blue Earth from above, and carry out important experiments!' },
  { id: 'lawyer', name: 'Lawyer', emoji: '⚖️', category: 'Profession', audioText: 'This is a lawyer.', funFact: 'A lawyer knows all about the rules and laws of a country. They help people understand their rights and speak on their behalf when there is a disagreement or problem to sort out!' },
  { id: 'architect', name: 'Architect', emoji: '📐', category: 'Profession', audioText: 'This is an architect.', funFact: 'An architect designs buildings — from houses and schools to skyscrapers and museums. They draw detailed plans showing exactly how a building should look and be built!' },
  { id: 'veterinarian', name: 'Veterinarian', emoji: '🐾', category: 'Profession', audioText: 'This is a veterinarian.', funFact: 'A veterinarian — often called a vet — is a doctor for animals! They check if pets and farm animals are healthy, give them vaccinations, and help them when they are poorly!' },
  { id: 'postman', name: 'Post Worker', emoji: '📬', category: 'Profession', audioText: 'This is a post worker.', funFact: 'A post worker collects and delivers letters and parcels to homes and businesses. They travel lots of routes every day making sure that people receive their mail and packages!' },
  { id: 'author', name: 'Author', emoji: '✍️', category: 'Profession', audioText: 'This is an author.', funFact: 'An author writes books, stories, and poems for people to read and enjoy. Authors use their imagination and a love of words to create characters, adventures, and whole new worlds!' },
];

// ─── Objects in the House ──────────────────────────────────────────────────
export const householdItemsData: LearningItem[] = [
  { id: 'sofa', name: 'Sofa', emoji: '🛋️', category: 'Household', audioText: 'This is a sofa.', funFact: 'A sofa is a comfy piece of furniture with a soft cushioned seat and a back to lean on. Families sit on the sofa together to watch television, read books, and have cuddles!' },
  { id: 'table', name: 'Table', emoji: '🪑', category: 'Household', audioText: 'This is a table.', funFact: 'A table has a flat top and legs underneath to hold it up. Families sit around a table to eat meals together. Tables are also used for doing homework, drawing, and playing games!' },
  { id: 'chair', name: 'Chair', emoji: '🪑', category: 'Household', audioText: 'This is a chair.', funFact: 'A chair has a seat, a back to lean against, and usually four legs. You sit on a chair at the table, at a desk, and in classrooms. Chairs come in all shapes, sizes, and colours!' },
  { id: 'bed', name: 'Bed', emoji: '🛏️', category: 'Household', audioText: 'This is a bed.', funFact: 'A bed is where you sleep at night! It has a soft mattress, a pillow for your head, and cosy blankets to keep you warm. Getting a good night sleep helps your body and brain grow!' },
  { id: 'lamp', name: 'Lamp', emoji: '💡', category: 'Household', audioText: 'This is a lamp.', funFact: 'A lamp gives off light so you can see in the dark. You switch it on when a room is dim. Lamps come in many shapes — some stand on the floor, some sit on tables, and some hang from the ceiling!' },
  { id: 'television', name: 'Television', emoji: '📺', category: 'Household', audioText: 'This is a television.', funFact: 'A television is a screen that shows moving pictures, cartoons, films, and programmes. You use a remote control to change the channel and turn the volume up or down!' },
  { id: 'refrigerator', name: 'Refrigerator', emoji: '🧊', category: 'Household', audioText: 'This is a refrigerator.', funFact: 'A refrigerator — or fridge — keeps food cold so it stays fresh and safe to eat. It is plugged in and runs all the time. Inside you find milk, fruit, vegetables, and leftovers!' },
  { id: 'stove', name: 'Stove', emoji: '🍳', category: 'Household', audioText: 'This is a stove.', funFact: 'A stove — or cooker — has rings or a flat top for heating pots and pans, and an oven below for baking. Grown-ups use it to cook your meals. Hot things on the stove can burn, so be careful!' },
  { id: 'microwave', name: 'Microwave', emoji: '📡', category: 'Household', audioText: 'This is a microwave.', funFact: 'A microwave is a small box that heats food very quickly using special energy waves you cannot see. In just a couple of minutes it can warm up your soup or leftovers!' },
  { id: 'washingmachine', name: 'Washing Machine', emoji: '🫧', category: 'Household', audioText: 'This is a washing machine.', funFact: 'A washing machine washes your clothes by tumbling them around in water with soap. You put dirty clothes in, close the door, and it cleans them. Before washing machines people washed clothes by hand!' },
  { id: 'mirror', name: 'Mirror', emoji: '🪞', category: 'Household', audioText: 'This is a mirror.', funFact: 'A mirror has a very smooth, shiny surface that reflects your image so you can see yourself. People look in mirrors to check their hair and clothes. Mirrors hang on walls and stand in bathrooms!' },
  { id: 'clock', name: 'Clock', emoji: '🕐', category: 'Household', audioText: 'This is a clock.', funFact: 'A clock shows the time. It has hands that point to numbers going around the face, or a digital screen showing the numbers. Clocks help us know when to wake up, eat, and go to school!' },
  { id: 'bookshelf', name: 'Bookshelf', emoji: '📚', category: 'Household', audioText: 'This is a bookshelf.', funFact: 'A bookshelf is a piece of furniture with flat shelves for storing books. Books are arranged on the shelves so you can easily find the one you want to read. Some bookshelves hold hundreds of books!' },
  { id: 'telephone', name: 'Telephone', emoji: '📞', category: 'Household', audioText: 'This is a telephone.', funFact: 'A telephone lets you talk to people who are far away just by speaking into it and listening. Mobile phones are small telephones you can carry in your pocket and take everywhere!' },
  { id: 'computer', name: 'Computer', emoji: '💻', category: 'Household', audioText: 'This is a computer.', funFact: 'A computer is an electronic machine that can do many things — writing, drawing, searching for information, playing games, and talking to people far away by video call!' },
  { id: 'door', name: 'Door', emoji: '🚪', category: 'Household', audioText: 'This is a door.', funFact: 'A door is a flat panel that opens and closes to let you into or out of a room or building. You turn the handle or push a button to open it. Doors keep rooms private and block out noise and cold!' },
  { id: 'window', name: 'Window', emoji: '🪟', category: 'Household', audioText: 'This is a window.', funFact: 'A window is an opening in a wall filled with glass that lets light in. You can look out of a window to see the garden or street outside. Some windows open to let fresh air in!' },
  { id: 'bathtub', name: 'Bathtub', emoji: '🛁', category: 'Household', audioText: 'This is a bathtub.', funFact: 'A bathtub — or bath — is a large container you fill with warm water to wash yourself. Having a bath is relaxing and gets you clean. Some baths have taps to add bubbles for a bubble bath!' },
  { id: 'toilet', name: 'Toilet', emoji: '🚽', category: 'Household', audioText: 'This is a toilet.', funFact: 'A toilet is used to flush away waste. After using it you flush the handle or button to wash everything away with water. Always wash your hands after using the toilet!' },
  { id: 'umbrella', name: 'Umbrella', emoji: '☂️', category: 'Household', audioText: 'This is an umbrella.', funFact: 'An umbrella keeps you dry in the rain. You hold the handle and press a button or push it open so it spreads out like a dome above your head. When it stops raining, you fold it back up!' },
];

// ─── School Objects ─────────────────────────────────────────────────────────
export const schoolItemsData: LearningItem[] = [
  { id: 'pencil', name: 'Pencil', emoji: '✏️', category: 'School', audioText: 'This is a pencil.', funFact: 'A pencil has a wooden outside and a grey graphite centre that leaves marks when you write or draw. Pencils are great because you can rub out mistakes with an eraser and try again!' },
  { id: 'pen', name: 'Pen', emoji: '🖊️', category: 'School', audioText: 'This is a pen.', funFact: 'A pen is like a pencil but it uses ink instead of graphite. When you write with a pen, the ink flows out through a tiny ball at the tip. Pens make neat, clear lines that you cannot rub out!' },
  { id: 'book', name: 'Book', emoji: '📖', category: 'School', audioText: 'This is a book.', funFact: 'A book is a collection of pages with words and pictures, held together with a cover. Reading books is wonderful — you can learn new things, visit imaginary places, and meet incredible characters!' },
  { id: 'backpack', name: 'Backpack', emoji: '🎒', category: 'School', audioText: 'This is a backpack.', funFact: 'A backpack is a bag you wear on your back using two shoulder straps. You put your books, pencil case, lunch, and other things in it to carry them to school. It leaves your hands free!' },
  { id: 'ruler', name: 'Ruler', emoji: '📏', category: 'School', audioText: 'This is a ruler.', funFact: 'A ruler is a flat, straight tool with centimetre and millimetre markings along the edge. You use a ruler to draw straight lines and to measure how long things are!' },
  { id: 'scissors', name: 'Scissors', emoji: '✂️', category: 'School', audioText: 'These are scissors.', funFact: 'Scissors have two sharp blades joined in the middle that you open and close with your fingers and thumb to cut paper, card, and cloth. Always hold scissors carefully and walk slowly with them!' },
  { id: 'eraser', name: 'Eraser', emoji: '🧹', category: 'School', audioText: 'This is an eraser.', funFact: 'An eraser is a soft, rubbery block that rubs away pencil marks so you can correct mistakes. It is one of the most useful things in a pencil case — everyone makes mistakes and that is perfectly fine!' },
  { id: 'crayons', name: 'Crayons', emoji: '🖍️', category: 'School', audioText: 'These are crayons.', funFact: 'Crayons are short, colourful sticks made of wax that you use to colour in pictures. They come in lots of beautiful colours and are smooth and satisfying to use on paper!' },
  { id: 'glue', name: 'Glue', emoji: '🧴', category: 'School', audioText: 'This is glue.', funFact: 'Glue is a sticky substance used to stick things together — paper, card, fabric, and more. It is liquid when you apply it and dries firm and hard. Glue makes craft projects come to life!' },
  { id: 'paintbrush', name: 'Paintbrush', emoji: '🖌️', category: 'School', audioText: 'This is a paintbrush.', funFact: 'A paintbrush has a handle and soft bristles at the end that hold paint. You dip it in paint and brush it across paper or canvas to create colourful paintings and artwork!' },
  { id: 'calculator', name: 'Calculator', emoji: '🧮', category: 'School', audioText: 'This is a calculator.', funFact: 'A calculator is a small electronic device that does maths very quickly. You press the number buttons and it adds, subtracts, multiplies, or divides the numbers for you instantly!' },
  { id: 'globe', name: 'Globe', emoji: '🌍', category: 'School', audioText: 'This is a globe.', funFact: 'A globe is a round model of the Earth on a stand that spins around. You can look at a globe to find every country, ocean, and continent in the world. It is like a tiny planet in your classroom!' },
  { id: 'microscope', name: 'Microscope', emoji: '🔬', category: 'School', audioText: 'This is a microscope.', funFact: 'A microscope is a scientific instrument that magnifies tiny things to make them look very big. Scientists use microscopes to see things too small for the naked eye, like germs and cells!' },
  { id: 'chalkboard', name: 'Chalkboard', emoji: '🏫', category: 'School', audioText: 'This is a chalkboard.', funFact: 'A chalkboard is a large, dark green or black board on the classroom wall. Teachers write on it with chalk sticks that leave white or coloured marks. The marks wipe off with a duster!' },
  { id: 'lunchbox', name: 'Lunch Box', emoji: '🥪', category: 'School', audioText: 'This is a lunch box.', funFact: 'A lunchbox is a small box or bag for carrying your lunch to school. Inside you might have a sandwich, fruit, a snack, and a drink. Opening your lunchbox at lunchtime is always exciting!' },
];

// ─── Sports & Games ─────────────────────────────────────────────────────────
export const sportsData: LearningItem[] = [
  { id: 'football', name: 'Football', emoji: '⚽', category: 'Sport', audioText: 'This is football.', funFact: 'Football is played by two teams of eleven players who try to kick a round ball into the other team goal. It is the most popular sport in the world and is played in almost every country!' },
  { id: 'basketball', name: 'Basketball', emoji: '🏀', category: 'Sport', audioText: 'This is basketball.', funFact: 'Basketball is played on a court where two teams try to throw a ball through a high hoop. Players dribble the ball by bouncing it and pass it to teammates to score points!' },
  { id: 'tennis', name: 'Tennis', emoji: '🎾', category: 'Sport', audioText: 'This is tennis.', funFact: 'Tennis is played on a court with a net in the middle. Players use a racket to hit a small ball over the net to each other. The ball must bounce only once before you hit it back!' },
  { id: 'swimming', name: 'Swimming', emoji: '🏊', category: 'Sport', audioText: 'This is swimming.', funFact: 'Swimming is moving through water using your arms and legs. There are different ways to swim — breaststroke, front crawl, backstroke, and butterfly. Swimming is brilliant exercise for your whole body!' },
  { id: 'cycling', name: 'Cycling', emoji: '🚴', category: 'Sport', audioText: 'This is cycling.', funFact: 'Cycling means riding a bicycle. You pedal to make the wheels turn and use handlebars to steer. Cycling is a fun way to get around and to enjoy being outdoors and seeing new places!' },
  { id: 'running', name: 'Running', emoji: '🏃', category: 'Sport', audioText: 'This is running.', funFact: 'Running is moving fast on your feet by taking long, quick strides. You can run in races, run around in the playground, or just run for fun! Running makes your heart and legs strong!' },
  { id: 'gymnastics', name: 'Gymnastics', emoji: '🤸', category: 'Sport', audioText: 'This is gymnastics.', funFact: 'Gymnastics involves doing flips, cartwheels, handstands, and balancing on beams and bars. Gymnasts are very flexible and strong. Gymnastic movements are graceful, athletic, and impressive!' },
  { id: 'cricket', name: 'Cricket', emoji: '🏏', category: 'Sport', audioText: 'This is cricket.', funFact: 'Cricket is played by two teams. A bowler throws the ball at a wicket and the batter tries to hit it with a flat bat. It is a popular sport in countries like India, England, and Australia!' },
  { id: 'baseball', name: 'Baseball', emoji: '⚾', category: 'Sport', audioText: 'This is baseball.', funFact: 'Baseball is played with a bat and ball. A pitcher throws the ball and a batter tries to hit it. If they hit it well, they run around four bases on a diamond-shaped field to score a run!' },
  { id: 'volleyball', name: 'Volleyball', emoji: '🏐', category: 'Sport', audioText: 'This is volleyball.', funFact: 'Volleyball is played by two teams who hit a ball back and forth over a high net using their hands and arms. Each team tries to make the ball land on the other team side of the court!' },
  { id: 'golf', name: 'Golf', emoji: '⛳', category: 'Sport', audioText: 'This is golf.', funFact: 'Golf is a sport where players use long clubs to hit a small white ball into a hole in the ground. Golf courses have 18 holes and players try to get the ball in each hole using as few hits as possible!' },
  { id: 'skiing', name: 'Skiing', emoji: '⛷️', category: 'Sport', audioText: 'This is skiing.', funFact: 'Skiing involves sliding down snowy slopes on long, flat pieces called skis attached to your boots. Skiers lean and bend their knees to steer and can go very fast down snowy mountains!' },
  { id: 'boxing', name: 'Boxing', emoji: '🥊', category: 'Sport', audioText: 'This is boxing.', funFact: 'Boxing is a sport where two people wear padded gloves and take turns trying to land punches on each other while defending themselves. It requires speed, strength, skill, and good technique!' },
  { id: 'karate', name: 'Karate', emoji: '🥋', category: 'Sport', audioText: 'This is karate.', funFact: 'Karate is a martial art from Japan where people learn punches, kicks, and blocks. Students wear a white uniform called a gi and earn different coloured belts as they improve their skills!' },
  { id: 'archery', name: 'Archery', emoji: '🏹', category: 'Sport', audioText: 'This is archery.', funFact: 'Archery is the sport of shooting arrows at a target using a bow. Archers stand a set distance from the target and aim carefully. The centre of the target, called the bullseye, scores the most points!' },
  { id: 'tabletennis', name: 'Table Tennis', emoji: '🏓', category: 'Sport', audioText: 'This is table tennis.', funFact: 'Table tennis — also called ping pong — is played on a table with a small net across the middle. Players use a small bat to hit a tiny, light ball back and forth. It is very fast and exciting!' },
  { id: 'badminton', name: 'Badminton', emoji: '🏸', category: 'Sport', audioText: 'This is badminton.', funFact: 'Badminton is played with rackets and a shuttlecock — a small cone with feathers that flies through the air. Players hit the shuttlecock back and forth over a net without letting it touch the ground!' },
  { id: 'hockey', name: 'Hockey', emoji: '🏒', category: 'Sport', audioText: 'This is hockey.', funFact: 'Hockey is played by two teams who use sticks to hit a puck or ball into the other team goal. Ice hockey is played on an ice rink with skates and is very fast and exciting!' },
  { id: 'rugby', name: 'Rugby', emoji: '🏉', category: 'Sport', audioText: 'This is rugby.', funFact: 'Rugby is a team sport where players carry an oval ball, pass it sideways or backwards, and try to touch it down over the opponent goal line to score a try. Players can also kick the ball through tall posts!' },
  { id: 'chess', name: 'Chess', emoji: '♟️', category: 'Sport', audioText: 'This is chess.', funFact: 'Chess is a board game for two players. Each player has sixteen pieces that move in different ways. Players take turns moving pieces to capture the other player king — that is called checkmate!' },
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

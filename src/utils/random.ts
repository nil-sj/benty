export function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function randomItem<T>(array: T[], exclude?: T): T {
  if (array.length === 1) return array[0];
  let item: T;
  do {
    item = array[Math.floor(Math.random() * array.length)];
  } while (item === exclude);
  return item;
}

export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function pickN<T>(array: T[], n: number): T[] {
  return shuffle(array).slice(0, n);
}

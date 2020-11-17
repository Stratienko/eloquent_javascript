export function min(a: number, b: number): number {
  return a < b ? a : b;
}

export function isEven(number: number): boolean {
  const step = number < 0 ? -2 : 2;

  if (number === 0) return true;

  if (number === 1 || number === -1) return false;

  return isEven(number - step);
}

export function countChar(source: string, char: string): number {
  let count = 0;

  for (let i = 0; i < source.length; i++) {
    if (source[i] === char) count++;
  }

  return count;
}

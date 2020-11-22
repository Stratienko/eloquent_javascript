/**
 * Analog of Math.min function
 * @param {number}a first value
 * @param {number}b second value
 * @return {number}the lesser of two
 */
export function min(a: number, b: number): number {
  return a < b ? a : b;
}

/**
 * Recursively checks the parity of the number
 * @param {number}number number to analyse
 * @return {boolean} is number even
 */
export function isEven(number: number): boolean {
  const step = number < 0 ? -2 : 2;

  if (number === 0) return true;

  if (number === 1 || number === -1) return false;

  return isEven(number - step);
}

/**
 * Counts the character in the string
 * @param {string}source string to search in
 * @param {string}char the character to count
 * @return {number} the character count
 */
export function countChar(source: string, char: string): number {
  let count = 0;

  for (let i = 0; i < source.length; i++) {
    if (source[i] === char) count++;
  }

  return count;
}

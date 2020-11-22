/**
 *
 * @param {number}start from
 * @param {number}end to
 * @return {number[]} array of numbers
 */
export function range(start: number, end: number): number[] {
  const rangeArray: number[] = [];

  for (let i = start; i <= end; i++) {
    rangeArray.push(i);
  }

  return rangeArray;
}

/**
 *
 * @param {number[]}args numbers to sum
 * @return {number} sum of numbers
 */
export function sum(...args: number[]): number {
  let sum = 0;

  for (const number of args) {
    sum += number;
  }

  return sum;
}

/**
 *
 * @param {any[]}source array to reverse
 * @return {any[]} reversed array
 */
export function reverseArray(source: any[]): any[] {
  const reversed = [];

  for (const item of source) {
    reversed.unshift(item);
  }

  return reversed;
}

/**
 * Reverses source array
 * @param {any[]}source array to reverse
 */
export function reverseInPlace(source: any[]): void {
  for (let i = 0; i < Math.floor(source.length / 2); i++) {
    const oldItem = source[i];

    source[i] = source[source.length - 1 - i];

    source[source.length - 1 - i] = oldItem;
  }
}

export type List = {
  value: any;
  rest: List | null;
};

/**
 *
 * @param {any[]}array values array
 * @return {List} listed values
 */
export function arrayToList(array: any[] = []): List {
  let list: List | null = null;

  for (let i = array.length - 1; i >= 0; i--) {
    list = {
      value: array[i],
      rest: list,
    };
  }

  return list || {value: undefined, rest: list};
}

/**
 *
 * @param {List}list source list
 * @return {any[]} list values array
 */
export function listToArray(list: List): any[] {
  const array: any[] = [];

  // eslint-disable-next-line require-jsdoc
  function addValueToArray(subList: List): void {
    array.push(subList.value);

    if (!subList.rest) return;

    addValueToArray(subList.rest);
  }

  addValueToArray(list);

  return array;
}

/**
 *
 * @param {any}value value to add to the list
 * @param {List | null}rest target list
 * @return {List} updated list
 */
export function prepend(value: any, rest: List | null): List {
  return {
    value,
    rest,
  };
}

/**
 * Returns the list value by its index
 * @param {List | null}list source
 * @param {number}index value index
 * @return {any}
 */
export function nth(list: List | null, index: number): any {
  if (!list) return null;

  if (index == 0) return list.value;

  return nth(list.rest, index - 1);
}

/**
 * Recursively checks the equality of objects
 * @param {any}source
 * @param {any}target
 * @return {boolean}
 */
export function deepEqual(source: any, target: any): boolean {
  if (source === target) return true;

  if (typeof source !== typeof target) return false;

  if (typeof source === 'object' && source !== null && target !== null) {
    if (Object.keys(source).length !== Object.keys(target).length) {
      return false;
    }

    for (const key of Object.keys(source)) {
      return deepEqual(source[key], target[key]);
    }
  }

  return false;
}

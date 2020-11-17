export function range(start: number, end: number): number[] {
  const rangeArray: number[] = [];

  for (let i = start; i <= end; i++) {
    rangeArray.push(i);
  }

  return rangeArray;
}

export function sum(...args: number[]): number {
  let sum = 0;

  for (const number of args) {
    sum += number;
  }

  return sum;
}

export function reverseArray(source: any[]): any[] {
  const reversed = [];

  for (const item of source) {
    reversed.unshift(item);
  }

  return reversed;
}

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

export function arrayToList(array: any[] = []): List {
  let list: List | null = null;

  for (let i = array.length - 1; i >= 0; i--) {
    list = {
      value: array[i],
      rest: list,
    };
  }

  return list || { value: undefined, rest: list };
}

export function listToArray(list: List): any[] {
  const array: any[] = [];

  function addValueToArray(subList: List): void {
    array.push(subList.value);

    if (!subList.rest) return;

    addValueToArray(subList.rest);
  }

  addValueToArray(list);

  return array;
}

export function prepend(value: any, rest: List | null): List {
  return {
    value,
    rest,
  };
}

export function nth(list: List | null, n: number): any {
  if (!list) return null;

  if (n == 0) return list.value;

  return nth(list.rest, n - 1);
}

export function deepEqual(source: any, target: any): boolean {
  if (source === target) return true;

  if (typeof source !== typeof target) return false;

  if (typeof source === "object" && source !== null && target !== null) {
    if (Object.keys(source).length !== Object.keys(target).length) {
      return false;
    }

    for (const key of Object.keys(source)) {
      return deepEqual(source[key], target[key]);
    }
  }

  return false;
}

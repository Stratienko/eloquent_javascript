import {sum} from '../data-structures';
import {Scripts} from '../resources';
import {resources} from './../resources/index';

/**
 * Counts the characters in the specified script
 * @param {object}script script object
 * @return {number} script character count
 */
export function characterCount(script: Scripts[number]): number {
  return script.ranges.reduce((acc, [from, to]) => {
    return acc + (to - from);
  }, 0);
}

/**
 * Counts the number array's average value
 * @param {number[]}sourceArray source number array
 * @return {number} average value
 */
export function average(sourceArray: number[]):number {
  return sum(...sourceArray) / sourceArray.length;
}

/**
 * Checks the script of the character by its code
 * @param {number}charCode character code
 * @return {object | null} script object
 */
export function characterScript(charCode: number): Scripts[number] | null {
  for (const script of resources.scripts) {
    if (script.ranges
        .some(([from, to]) => from < charCode && charCode < to)) {
      return script;
    }
  }

  return null;
}

type GroupByResult = {name: string | undefined, count: number}[]

/**
 * Groups the characters by the condition
 * @param {string}text source string
 * @param {function}condition condition to group by
 * @return {object} grouping result
 */
export function groupBy(
    text: string, condition: (char: string) => string | undefined,
): GroupByResult {
  const results: GroupByResult = [];

  for (const char of text) {
    const groupName = condition(char);
    const scriptIndex = results.findIndex((el) => el.name === groupName);
    const isKnown = scriptIndex >= 0;

    if (isKnown) {
      results[scriptIndex].count++;
    } else {
      results.push({
        name: groupName,
        count: 1,
      });
    }
  }

  return results.filter((el) => el.name);
}

/**
 *
 * @param {string}text source text
 * @return {string} the detection result
 */
export function detectTextScripts(text: string): string {
  let result = '';

  const textScripts = groupBy(text, (char = '') => {
    return characterScript(char.codePointAt(0)!)?.name;
  });

  const characterCount = sum(...textScripts.map((el) => el.count));

  for (const script of textScripts) {
    result += `${script.name}: ${Math.round(
        script.count / (characterCount / 100),
    )}% `;
  }

  return result;
}

/**
 *
 * @param {[any[]]}unflatted  source array
 * @return {any[]} flattens the array
 */
export function flat(unflatted: Array<any>[]): any[] {
  return unflatted.reduce((acc, curr) => {
    return acc.concat(...curr);
  }, []);
}

/**
 *
 * @param {number}start initial value
 * @param {function}condition
 * @param {function}updater
 * @param {function}callback
 */
export function loop(
    start: number,
    condition: (i: number) => boolean,
    updater: (i: number) => number,
    callback: (i: number) => any,
):void {
  if (!condition(start)) return;

  callback(start);

  loop(updater(start), condition, updater, callback);
}

/**
 *
 * @param {any[]}array source array
 * @param {function}prediction prediction function
 * @return {boolean}
 */
export function every<T extends unknown>(
    array: T[],
    prediction: (element: T) => boolean,
):boolean {
  let result = true;

  for (const el of array) {
    result = prediction(el);

    if (!result) break;
  }

  return result;
}

/**
 *
 * @param {string}text source text
 * @return {string} the detection result
 */
export function detectTextDirection(text: string): string {
  let result = '';

  const textScripts = groupBy(text, (char = '') => {
    return characterScript(char.codePointAt(0)!)?.direction;
  });

  const characterCount = sum(...textScripts.map((el) => el.count));

  for (const script of textScripts) {
    result += `${script.name}: ${Math.round(
        script.count / (characterCount / 100),
    )}% `;
  }

  return result;
}

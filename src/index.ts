import * as programStructure from './program-structure';
import * as functions from './functions';
import * as dataStructures from './data-structures';
import * as highOrderFunctions from './high-order-functions';
import {resources} from './resources/index';

// Program structure

// programStructure.buildHashtagTriangle(15);
// programStructure.fizzBuzz();
// programStructure.drawChessBoard(8);

// Functions

// console.log(functions.min(4, 12));
// console.log(functions.isEven(4));
// console.log(functions.countChar("HELLO", "L"));

// Data structures: objects and arrays

// const {
//   sum,
//   range,
//   reverseArray,
//   reverseInPlace,
//   arrayToList,
//   listToArray,
//   prepend,
//   nth,
//   deepEqual,
// } = dataStructures;

// console.log(sum(...range(1, 10)) === 55);
// console.log(reverseArray([1, 2, 3]));
// let source = [1, 2, 3, 4];
// reverseInPlace(source);
// console.log(source);
// console.log(arrayToList([1, 2, 3]));
// console.log(listToArray(arrayToList([1, 2, 3])));
// console.log(prepend(10, prepend(20, null)));
// console.log(nth(arrayToList([1, 2, 3]), 0));
// console.log(deepEqual({ a: { b: 1, c: 1 } }, { a: { b: 1, c: 1 } }));

// High order functions

// const {
//   characterCount,
//   average,
//   characterScript,
//   detectTextScripts,
//   flat,
//   loop,
//   every,
//   detectTextDirection,
// } = highOrderFunctions;

// console.log(resources.scripts.reduce((acc, curr) =>
//   characterCount( acc ) > characterCount( curr ) ?
//   acc :
//   curr,
// ));
// console.log(
//     Math.round(
//         average(
//             resources.scripts
//                 .filter((script) => script.living)
//                 .map((script) => script.year))));
// console.log(
//     Math.round(
//         average(
//             resources.scripts
//                 .filter((script) => !script.living)
//                 .map((script) => script.year))));
// console.log(characterScript(112));
// console.log(detectTextScripts('Aenean sagittis? Привет, мир! How are you?'));
// console.log(flat([[1, 2], [3, 4]]));
// loop(-5, (i) => i <= 5, (i) => i + 1, console.log);
// console.log(every<number>([1, 2, 3, 4], (el) => el > 0));
// console.log(detectTextDirection('Aenean sagittis? Привет, мир! How are you?'));

export {
  programStructure,
  functions,
  dataStructures,
  highOrderFunctions,
  resources,
};

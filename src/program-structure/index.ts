/**
 * Prints the hashtag triangle to the console
 * @param {number}baseSize base of triangle size
 */
export function buildHashtagTriangle(baseSize: number): void {
  for (let hashtag = "#"; hashtag.length <= baseSize; hashtag += "#") {
    console.log(hashtag);
  }
}

/**
 * Prints Fizz for the numbers those are multiples of three
 *
 * Prints Buzz for the numbers those are multiples of five
 */
export function fizzBuzz(): void {
  for (let i = 0; i <= 100; i++) {
    let result = "";

    if (i % 3 === 0) {
      result += "Fizz";
    }

    if (i % 5 === 0) {
      if (!result) {
        result += "Buzz";
      }
    }

    console.log(`${i}: ${result}`);
  }
}

/**
 * Draws the hashtag chess board with given size
 * @param {number}size board border size
 */
export function drawChessBoard(size: number): void {
  let board = "";

  for (let x = 0; x < size; x++) {
    let row = "";

    while (row.length < size) {
      row += "# ";
    }

    row = x % 2 === 0 ? row : row.split("").reverse().join("");

    board = board.concat(row + "\n");
  }

  console.log(board);
}

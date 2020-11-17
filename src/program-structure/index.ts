export function buildHashtagTriangle(): void {
  for (let hashtag = "#"; hashtag.length <= 7; hashtag += "#") {
    console.log(hashtag);
  }
}

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

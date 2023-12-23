function unroll(squareArray) {
    if (squareArray.length === 0) return;

    let resultUnRoll = [];

    // loop untile squareArray is empty
    console.log(squareArray.length);

    while (squareArray.length > 0) {
        //get the top row
        resultUnRoll = [...resultUnRoll, squareArray.shift()];
        //get the last column
        resultUnRoll = [...resultUnRoll, squareArray.map(row => row.pop())];

        //get the bottom row and revers it
        resultUnRoll = [...resultUnRoll, squareArray.pop().reverse()];

        //get the first column
        resultUnRoll = [...resultUnRoll, squareArray.map(row => row.shift()).reverse()];

    }

    return resultUnRoll.flat();

}



module.exports = unroll;

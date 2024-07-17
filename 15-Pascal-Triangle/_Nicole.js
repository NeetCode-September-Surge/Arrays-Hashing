/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let pascal = [] //initialize your result array
    if(numRows === 0) return pascal //if there are no rows passed in, return an empty array (pascal)

    pascal.push([1]) //first row will always be [1]

    //generate the other rows starting from the second row
    for(let i = 1; i < numRows; i++) { 
        let prevRow = pascal[i -1] //get prev row from pascal
        let nextRow = [1] //new row will start with 1
        //loop through previous to generate nextRow values (start from 2nd element)
        for(let j = 1; j < prevRow.length; j++) {
            nextRow.push(prevRow[j-1] + prevRow[j]) //next row vals will be the sum of the two nums above it 
        }
        nextRow.push(1) // array (rows) will always end with 1
        pascal.push(nextRow) //add rows to pascal array
    }
    return pascal //return pascal
};

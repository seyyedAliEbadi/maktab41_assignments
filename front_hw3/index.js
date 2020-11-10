// Delete item by index in an array
function deleteByIndex(arr, index) {
    console.log(arr);
    if (index > -1) {
        arr.splice(index, 1);
    }
    console.log(arr)
}

// Combining two or more arrays
function combineArr() {
    let concatArr = [];
    for (item of arguments) {
        console.log(item)
        concatArr = concatArr.concat(item);
    }

    console.log(concatArr)
}
let myArr = ['a', 'b', 'c'];
deleteByIndex(myArr, 2)
combineArr([1, 2, 3], [4, 5, 6, 7], [8, 9, 10])
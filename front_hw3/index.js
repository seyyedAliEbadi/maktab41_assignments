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

// Flatten infinite number of arrays
function flatArr(arr) {
    return arr.flat(Infinity)
}

// Find item in an array
function findByItem(arr, temp) {
    if (arr.indexOf(temp) != -1) {
        return { index: arr.indexOf(temp), item: temp }
    }
}


let myArr = ['a', 'b', 'c'];
deleteByIndex(myArr, 2)

combineArr([1, 2, 3], [4, 5, 6, 7], [8, 9, 10])

let result = findByItem(myArr, 'b');
console.log(result)

let flattened_arr = flatArr([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]);
console.log(flattened_arr)
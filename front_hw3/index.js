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

// Replace item in an array
function repItem(arr, currentItem, newItem) {
    let copiedArr = arr.map((x) => x);
    let index = copiedArr.indexOf(currentItem);
    copiedArr[index] = newItem;
    return copiedArr
}

// Extract numbers of a string
function extNum(string) {
    return string.match(/\d+/g).map(Number);
}

// Remove duplicate items in an array
function remDupItem(arr) {
    return arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    })
}

let myArr = ['a', 'b', 'c'];
deleteByIndex(myArr, 2)

combineArr([1, 2, 3], [4, 5, 6, 7], [8, 9, 10])

let result = findByItem(myArr, 'b');
console.log(result)

let flattened_arr = flatArr([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]);
console.log(flattened_arr)

let arr_copy = repItem([1, 2, 3, 4, 5], 3, 10)
console.log(arr_copy)

console.log(extNum("This is a test 2 string to extract 3 numbers"))

console.log(remDupItem([1, 1, 3, 4, 4, 5, 6, 7, 7]))
function isEqual(x, y) {
    if (x === y) {
        return true
    }
    return false
}

//test cases
console.log(isEqual(4, 4), "should be True")
console.log(isEqual(0, 0), "should be True")
console.log(isEqual(-4, -4), "should be True")
console.log(isEqual(4, -4), "should be False")
console.log(isEqual(0, 1), "should be False")
console.log(isEqual(1, '1'), "should be False")
console.log(isEqual("", ""), "should be True")
console.log(isEqual([1], [1]), "should be False")
/**
 * Finds the longest string in an array of strings
 * @param {string[]} list - array of strings
 * @returns {string} longest string
 */
function longestInList(list) {
    let longest = []
    if (list.length === 0) { // list === [] does NOT work here
        return []
    }
    longest.push(list[0])
    for (word of list) {
        //console.log(word, word.length) // Interesting. Number variable has an undefined length
        if (word.length === longest[0].length && word !== longest[0])
        {
            longest.push(word)
        }
        else if (word.length > longest[0].length)
        {
            longest = []
            longest.push(word)
        }
        else {
            continue
        }
    }
return longest
}

//test cases
console.log(longestInList(["England", "Wales", "Scotland", "Northern Ireland"]), "should be \"Northern Ireland\"")
console.log(longestInList(["the", "quick", "brown", "fox"]), "should be \"quick\"")
console.log(longestInList(["hello", "hi", "greetings", "hey"]),"should be \"greetings\"")
console.log(longestInList([]), "should be []")
console.log(longestInList([1,2,3,45,77]), "should be [1,2,3,45,77]") //should it really though?
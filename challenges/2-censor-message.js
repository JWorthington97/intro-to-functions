/**
 * Replaces any occurences of strings from `banList` in the input string with '*****'
 * @param {string} string - input string
 * @param {string[]} banList - strings to replace with '*****' if found
 * @returns {string} input string with any strings found in `banList` replaces with '*****'
 */
function censorMessage(string, banList) {
    let words = string.split(" ")
    for (word in words) {
        if (banList.includes(words[word].toLowerCase())) {
            words[word] = "*****"
        }
    }
    return words.join(" ")
}

//test cases
console.log(censorMessage("don't mess with cats", ["mess"]), "should be \"don't ***** with cats\"")
console.log(censorMessage("Are you sure that this is safe", ["are", "is"]), "should be \"***** you sure that this ***** safe\"")
console.log(censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"]), "should be \"I CANNOT ***** *****\"")
console.log(censorMessage("Why do this", []), "should be \"Why do this\"")

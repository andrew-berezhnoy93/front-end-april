function isArray(item) {
    return (typeof item !== undefined && item && item.constructor === Array);
};

console.log(isArray('w3resource'));
console.log(isArray([1, 2, 4, 0]));


function cloneArray(array) {
    if (!isArray(array)) {
    throw new Error('Enter an array!')
    }



    var clone = [],
        i = 0,
        len = array.length;

    for (; i < len; i++) {
        if (array[i].length && array[i].constructor === Array) {
            clone[i] = cloneArray(array[i]);

        } else {
            clone[i] = array[i];
        }
    }

    return clone;

};

console.log(cloneArray([1, 2, 4, 0]));
console.log(cloneArray([1, 2, [4, 0]]));



var ArraysTasks = {
    isArray: isArray,
    cloneArray: cloneArray,
    getFirstElements: getFirstElements,
    getLastElements: getLastElements,
    join: join,
    setDashes: setDashes,
    sort: sort,
    mostFrequent: mostFrequent,
    swapLetter: swapLetter,
    getNestedArray: getNestedArray,
    sumSquares: sumSquares,
    sumArrayInteger: sumArrayInteger,
    addToArray: addToArray,
    removeDuplicate: removeDuplicate,
    displayColor: displayColor,
    leapYear: leapYear,
    shuffleArray: shuffleArray,
    binarySearch: binarySearch,
    sumOfInvidual: sumOfInvidual,
    findDuplicate: findDuplicate,
    flattenNested: flattenNested,
    computeUnion: computeUnion,
    difference: difference,
    removeFalse: removeFalse,
    sortByTitle: sortByTitle,
    pairOfEqualsSum: pairOfEqualsSum,
    retrieveValue: retrieveValue,
    longestSubstring: longestSubstring,
    suppliedBounds: suppliedBounds,
    merge: merge,
    removeElement: removeElement,
    findElement: findElement,
    keepOriginal: keepOriginal,
    nthLargest: nthLargest,
    randomElement: randomElement,
    fillSpecifiedNumeric: fillSpecifiedNumeric,
    fillSpecifiedString: fillSpecifiedString,
    move: move,
    filter: filter,
    arrayRange: arrayRange,
    rangeBetween: rangeBetween
};

module.exports = ArraysTasks;


  module.exports = function longestConsecutiveLength(array) { 

    const set = new Set(array);

    let longestLength = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;

            while (set.has (currentNum + 1)) {
                currentNum++;
                currentLength++;
            }

            longestLength = Math.max(currentLength, longestLength);
        }
      }
    

    return longestLength;
  }
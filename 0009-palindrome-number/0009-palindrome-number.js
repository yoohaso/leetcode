/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    const reverse = Number(String(x).split('').reverse().join(''));
    return x === reverse;
};
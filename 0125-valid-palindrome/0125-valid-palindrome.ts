function distinguishAlphanumeric(char: string) {
    const isLetter = char.toUpperCase() !== char.toLowerCase();
    const isNumber = !Number.isNaN(Number(char));
    return isLetter || isNumber;
}

function isPalindrome(s: string): boolean {
    // letter와 number가 아닌 character, 공백은 모두 제거
    // 대문자 -> 소문자
    // 앞에서 읽었을 때와 뒤부터 읽었을 때 문자가 같아야함
    const str = s.toLowerCase().replaceAll(' ', '');

    let leftPointer = 0;
    let rightPointer = str.length - 1;

    while (leftPointer < rightPointer) {
        const leftChar = str[leftPointer];
        const rightChar = str[rightPointer];
        
        const isLeftAlphanumeric = distinguishAlphanumeric(leftChar);
        const isRightAlphanumeric = distinguishAlphanumeric(rightChar);

        if (isLeftAlphanumeric && isRightAlphanumeric) {
            if (leftChar === rightChar) { 
                leftPointer++; 
                rightPointer--;
            } else {
                return false;
            }
        } else if (!isLeftAlphanumeric && isRightAlphanumeric) {
            leftPointer++;
        } else if (isLeftAlphanumeric && !isRightAlphanumeric) {
            rightPointer--;
        } else {
            leftPointer++;
            rightPointer--;
        }
    }

    return true;
};
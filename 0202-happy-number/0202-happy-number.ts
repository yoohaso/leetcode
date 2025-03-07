function isHappy(n: number): boolean {
    let integerArr = String(n).split('');
    let leftPointerIndex = 0;
    let rightPointerIndex = integerArr.length - 1;

    let value = 0;
    const hash = {};

    while (value !== 1 || !hash[value]) {
        if (leftPointerIndex < rightPointerIndex) {
            value += Math.pow(Number(integerArr[leftPointerIndex]), 2) + Math.pow(Number(integerArr[rightPointerIndex]), 2);
            leftPointerIndex++;
            rightPointerIndex--;
        } else if (leftPointerIndex === rightPointerIndex) {
            value += Math.pow(Number(integerArr[leftPointerIndex]), 2);
            integerArr = String(value).split('');

            if (hash[value]) {
                return false;
            } else {
                hash[value] = true;
            }

            if (value !== 1) {
                value = 0;
                leftPointerIndex = 0;
                rightPointerIndex = integerArr.length - 1;
            }
        } else {
            integerArr = String(value).split('');

            if (hash[value]) {
                return false;
            } else {
                hash[value] = true;
            }

            if (value !== 1) {
                value = 0;
                leftPointerIndex = 0;
                rightPointerIndex = integerArr.length - 1;
            }
        }
    }

    return true;
};
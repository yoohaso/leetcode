function removeDuplicates(nums: number[]): number {
    // 오름차순 숫자 배열
    // 중복 숫자 즉시 제거
    // 숫자 순서는 그대로 유지
    // 예문으로 이해한 바는
    // 배열에서 중복 숫자를 _로 바꾸고 이들을 뒤로 정렬을 시켜놔야하고
    // 함수는 숫자의 개수를 리턴해야함
    // 인자로 들어온 배열에 변화를 줘야함

    let prevNum;
    const DUPLICATION_SIGN = 101;

    nums.forEach((num, index) => {
        if (prevNum === num) {
            nums[index] = DUPLICATION_SIGN;
        } else {
            prevNum = num;
        }
    });

    nums.sort((a, b) => a - b);

    return nums.filter((num) => num !== DUPLICATION_SIGN).length;
};
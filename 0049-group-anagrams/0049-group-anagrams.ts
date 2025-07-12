function groupAnagrams(strs: string[]): string[][] {
    /*
    * 동일한 문자들로 구성된 문자열들을 모아놓은 배열들의 집합(배열)을 반환하라
    * 어떻게 해야 문자로 구성되었다는 것을 확인할 수 있을까?
    * 문자열의 길이가 다르다면 다른 문자
    * 문자열 자체를 동일 규칙으로 재정렬하면 될 것 같은데.. string.split('').sort().join('');
    * 1. 순회를 하면서 다음을 수행한다.
    *  a. 문자를 재정렬한 버전을 만든다.
    *  b. 이 재정렬한 버전과 일치하는 문자가 맵에 있는지 확인한다.
    *  c. 있다면 일치하는 문자의 배열에 원본 문자를 추가한다.
    *  d. 없다면 재정렬한 버전의 문자열을 key로 하고 값으로 원본 문자열을 가진 배열을 만든다.
    */

    if (strs.length === 0) {
        return [strs];
    }

    function rearrangeStr(str: string) {
        return str.split('').sort().join('')
    }

    const hashMap = new Map();

    for (const str of strs) {
        const rearrangedStr = rearrangeStr(str);

        if (hashMap.has(rearrangedStr)) {
            hashMap.set(rearrangedStr, [...hashMap.get(rearrangedStr), str]);
        } else {
            hashMap.set(rearrangedStr, [str]);
        }
    }

    return [...Object(hashMap).values()];
};
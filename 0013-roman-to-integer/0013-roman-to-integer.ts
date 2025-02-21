function romanToInt(s: string): number {
    // 로마숫자를 정수로 바꾸기
    // 로마숫자는 큰수(왼쪽), 작은수(오른쪽)
    // 뺄셈은 6개의 사례
    // IV, IX (-1 + 5), (-1 + 10)
    // XL, XC (-10 + 50), (-10 + 100)
    // CD, CM (-100 + 500), (-100 + 1000)
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    const subtractionRoman = {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900,
    };

    let index = 0;
    let integer = 0;

    while (s[index]) {
        const symbol = s[index];
        const rightSymbol = s[index + 1];

        if (subtractionRoman[symbol + rightSymbol]) {
            integer += subtractionRoman[symbol + rightSymbol];
            index += 2;
        } else {
            integer += roman[symbol];
            index++;
        }
    }

    return integer;
};
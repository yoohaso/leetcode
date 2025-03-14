function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const letterCountTable = {};

    for (let i = 0; i < s.length; i++) {
        const sLetter = s[i];
        const tLetter = t[i];

        if (!letterCountTable[sLetter]) {
            letterCountTable[sLetter] = 1;
        } else {
            letterCountTable[sLetter]++;
        }

        if (!letterCountTable[tLetter]) {
            letterCountTable[tLetter] = -1;
        } else {
            letterCountTable[tLetter]--;
        }
    }

    for (const letter in letterCountTable) {
        const count = letterCountTable[letter];
        
        if (count !== 0) {
            return false;
        }
    }

    return true;
};
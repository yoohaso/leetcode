function canConstruct(ransomNote: string, magazine: string): boolean {
    const magazineLetterTable: { [key: string]: number }= {};

    for (let i = 0; i < magazine.length; i++) {
        const letter = magazine[i];

        if (magazineLetterTable[letter]) {
            magazineLetterTable[letter]++;
        } else {
            magazineLetterTable[letter] = 1;
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        const letter = ransomNote[i];

        if (magazineLetterTable[letter]) {
            magazineLetterTable[letter]--;
        } else if (magazineLetterTable[letter] === undefined) {
            return false;
        } else if (magazineLetterTable[letter] < 1) {
            return false;
        }
    }

    return true;
};
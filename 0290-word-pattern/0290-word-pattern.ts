function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(' ');
    const patternToWord = new Map();
    const wordToPattern = new Map();

    if (pattern.length !== words.length) {
        return false;
    }

    for (let i = 0; i < pattern.length; i++) {
        if (!patternToWord.has(pattern[i]) && !wordToPattern.has(words[i])) {
            patternToWord.set(pattern[i], words[i]);
            wordToPattern.set(words[i], pattern[i]);
        } else if (patternToWord.get(pattern[i]) !== words[i]) {
            return false;
        }
    }

    return true;
};
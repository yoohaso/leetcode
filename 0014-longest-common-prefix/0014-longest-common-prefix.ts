function longestCommonPrefix(strs: string[]): string {
    let prefix = '';
    let pointer = '';

    const basis = strs[0];

    for (let i = 0; i < basis.length; i++) {
        pointer = basis.substring(0, i + 1);

        for (let j = 1; j < strs.length; j++) {
            if (pointer !== strs[j].substring(0, i + 1)) {
                return prefix;
            }
        }

        prefix = pointer;
    }

    return prefix;
};

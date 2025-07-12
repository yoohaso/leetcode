function simplifyPath(path: string): string {
    // ..은 이전 또는 부모 디렉토리
    // - ..이 나오면 담아놓은 데에서 pop을 해야할듯
    // 디렉토리의 구분은 / 로 하기, 오른쪽 끝에는 안 붙어도 됨

    /**
    1. path를 / 로 나눈 배열을 만든다.
    2. 결과 배열을 만든다.
    3. 해당 배열을 순회하면서 다음을 수행한다.
        a. ..이 나오면 결과 배열에서 pop을 한다.
        b. 아니면 결과 배열에 문자를 담는다.
    4. 결과 배열을 / 로 합쳐서 반환한다.
     */ 

    const directories = path.split('/').filter(name => name !== '');
    const results = [];

    for (const directory of directories) {
        if (directory === '..') {
            results.pop();
        } else if (directory === '.') {
            continue;
        } else {
            results.push(directory);
        }
    }

    return '/' + results.join('/');
};

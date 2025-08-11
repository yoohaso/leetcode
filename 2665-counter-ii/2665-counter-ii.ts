type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let currentValue = init;
    
    function increment() {
        return ++currentValue;
    };

    function decrement() {
        return --currentValue;
    };

    function reset() {
        currentValue = init;
        return currentValue;
    };

    return {
        increment,
        decrement,
        reset,
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
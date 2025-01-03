/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let currentCounter = 0;
    function increment(){
        currentCounter = currentCounter + 1;
        return init + currentCounter;
    }

    function decrement(){
        currentCounter = currentCounter - 1;
        return init + currentCounter;
    }

    function reset(){
        currentCounter = 0;
        return init;
    }

    return {
        increment, decrement, reset
    }

};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
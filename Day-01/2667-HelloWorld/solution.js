var createHelloWorld = function() {
    
    // THIS is the function being returned
    return function(...args) { 
        const st = "Hello World";
        return st;
    }
};
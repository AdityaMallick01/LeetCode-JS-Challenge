/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let toBe = function(a) {
        if (val === a) return true;
        else throw new Error("Not Equal");
    };

    let notToBe = function(a) {
        if (val !== a) return true;
        else throw new Error("Equal");
    };
     return { toBe, notToBe };
    
    };

// IIFE -> immediately invoked function expression

(function() {
    var foo = "bla";

    function first() {
        log("Calling first. foo => '" + foo + "'");
    }

    function second() {
        log("Calling second. foo => '" + foo + "'");
    }

    first();
    second();
})();


log("Calling first()");
try {
    first();
} catch (err) {
    log("ERR: " + err);
}





















window.test = function() {
    log("Test");
};

test();

// Note: globals are defined on the "window" object in a browser!

// BUT ... observe this:

if (window.someMethod) {
    log("'someMethod' exists");
} else {
    log("'someMethod' does not exist");
}

try {
    if (someOtherMethod) {
        log("'someOtherMethod' exists");
    } else {
        log("'someOtherMethod' does not exist");
    }

    log("This does never appear");

} catch (err) {
    log("ERR:" + err);
    log("Direct references to undefined values will cause exceptions (next lines). Always check for window.xxx instead!");
}






















// this could also be myApp.helpers.createCounter ... but I'm using it without namespaces for the sake of brevity!

function Counter(initialValue) {
    var _value = initialValue || 0;

    this.increment = function () {
        _value++;
        return _value;
    };
}


var myCounter = new Counter(10);
var myCounter2 = new Counter(100);

log("myCounter.increment(): " + myCounter.increment());
log("myCounter2.increment(): " + myCounter2.increment());

log("Now we change the increment method of myCounter2 to become something else");

myCounter2.increment = function() {
    return 42;
};


log("myCounter.increment(): " + myCounter.increment());
log("myCounter2.increment(): " + myCounter2.increment());

log("--> Each method seems to have its own copy of the method!")
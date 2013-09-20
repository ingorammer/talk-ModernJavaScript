// this could also be myApp.helpers.createCounter ... but I'm using it without namespaces for the sake of brevity!

function Counter(initialValue) {
    this._value = initialValue || 0;
}


// disadvantage: no more closures!
Counter.prototype.increment = function () {
    this._value++;
    return this._value;
};


// ===


var myCounter = new Counter(10);
var myCounter2 = new Counter(100);

if (myCounter.increment == myCounter2.increment) {
    log("Both increment-methods are the same!");
} else {
    log("These are two different increment methods!?");
}

log("myCounter.increment(): " + myCounter.increment());
log("myCounter2.increment(): " + myCounter2.increment());

log("Now we change the increment method of the prototype to become something else");

Counter.prototype.increment = function () {
    return 42;
};

log("myCounter.increment(): " + myCounter.increment());
log("myCounter2.increment(): " + myCounter2.increment());

log("But a change to an individual object would still override the prototype!");

myCounter.increment = function () {
    return 123;
};

log("myCounter.increment(): " + myCounter.increment());
log("myCounter2.increment(): " + myCounter2.increment());

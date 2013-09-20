// this could also be myApp.helpers.createCounter ... but I'm using it without namespaces for the sake of brevity!

function Counter(initialValue) {
    var _value = initialValue || 0;

    this.increment = function () {
        _value++;
        return _value;
    };
}



// IMPORTANT: Upper case naming is the only guide for a user of your class!

var myCounter = new Counter(10);

var value = myCounter.increment();
log("Value: " + value);

value = myCounter.increment();
log("Value: " + value);

var myCounter2 = new Counter(100);

value = myCounter.increment();
log("Value (myCounter2): " + value);

// AND now for something interesting, let's compare the two functions

if (myCounter.increment == myCounter2.increment) {
    log("Both increment-methods are the same!");
} else {
    log("These are two different increment methods!?");
}

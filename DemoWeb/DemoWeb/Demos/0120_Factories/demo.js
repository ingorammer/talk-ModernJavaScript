// this could also be myApp.helpers.createCounter ... but I'm using it without namespaces for the sake of brevity!

function createCounter(initialValue) {
    return {
        _value: initialValue || 0,
        increment: function () {
            this._value++;
            return this._value;
        }
    };
};


var myCounter = createCounter(10);

var value = myCounter.increment();
log("Value:" + value);

var value = myCounter.increment();
log("Value:" + value);


// And now, watch this in the console and see how it can be modified!
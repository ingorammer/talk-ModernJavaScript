// this could also be myApp.helpers.createCounter ... but I'm using it without namespaces for the sake of brevity!

function createCounter(initialValue) {
    var _value = initialValue || 0;
    
    return {
        increment: function () {
            _value++;
            return _value;
        }
    };
};


var myCounter = createCounter(10);

var value = myCounter.increment();
log("Value:" + value);

var value = myCounter.increment();
log("Value:" + value);


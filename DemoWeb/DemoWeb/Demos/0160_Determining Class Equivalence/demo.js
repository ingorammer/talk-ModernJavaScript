function Counter(initialValue) {
    var _value = initialValue;


    this.increment = function () {
        _value++;
        return _value;
    };
}

function SomeOtherCounter(initialValue) {
    this._value = initialValue;
}

SomeOtherCounter.prototype.increment = function () {
    this._value++;
    return this._value;
};


var myCounter = new Counter();
var myCounter2 = new Counter();
var myOtherCounter = new SomeOtherCounter();

log("Type of myCounter: " + typeof (myCounter));
log("Type of myOtherCounter: " + typeof (myOtherCounter));
log("Are they the same? -> " + (typeof (myCounter) === typeof (myOtherCounter)));

log("Not very helpful ... hmmm .... ");

log("Compare constructor (should be false)! -> " + (myCounter.constructor === myOtherCounter.constructor));
log("Compare constructor (should be true)! -> " + (myCounter.constructor === myCounter2.constructor));


log("Also with instanceof: ");

log("myCounter instanceof Counter: " + (myCounter instanceof Counter));
log("myCounter instanceof SomeOtherCounter: " + (myCounter instanceof SomeOtherCounter));
log("myOtherCounter instanceof SomeOtherCounter: " + (myOtherCounter instanceof SomeOtherCounter));
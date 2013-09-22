
var object1 = {
    increment: function() {
        this._value = (this._value + 1) || 1;
        return this._value;
    }
};

var object2 = {};

var val = object1.increment();
val = object1.increment();
val = object1.increment();
log("Incremented value: " + val);

object2.increment = object1.increment;

val = object2.increment();
val = object2.increment();
log("Incremented value: " + val);

log("Now, you can look at object1 and object2 in the debugger");

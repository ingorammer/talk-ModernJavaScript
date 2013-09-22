var myUser = {
    firstName: "Markus",
    lastName: "Mustermann"
};

for (var key in myUser) {
    log(key + " = " + myUser[key]);
}

Object.prototype.toJsonString = function () {
    return JSON.stringify(this);
};

log(" ======= ANOTHER ENUMERATION ========");

for (var key in myUser) {
    log(key + " = " + myUser[key]);
}

log(" ======= END ENUMERATION ========");


for (var key in myUser) {
    if (myUser.hasOwnProperty(key)) {
        log(key + " = " + myUser[key]);
    }
}


/*
Mozilla:

One mis-feature that is often used is to extend Object.prototype or one of the other built in prototypes.

This technique is called monkey patching and breaks encapsulation. While used by popular frameworks such as 
Prototype.js, there is still no good reason for cluttering built-in types with additional non-standard functionality.

The only good reason for extending a built-in prototype is to backport the features of newer JavaScript 
engines; for example Array.forEach etc.
*/
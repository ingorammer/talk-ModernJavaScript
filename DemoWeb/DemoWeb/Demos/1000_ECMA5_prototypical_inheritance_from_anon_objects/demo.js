// ECMA5 compat: http://kangax.github.io/es5-compat-table/#

var someUser = {
    firstName: "Markus",
    lastName: "Mustermann",
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
};


log(someUser.getFullName());


var myUser = Object.create(someUser);
log(myUser.getFullName());

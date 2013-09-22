function SomeUser() {

}

Object.defineProperties(SomeUser.prototype, {
    firstName: { writable: true },
    lastName: { writable: true },
    fullName: {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        set: function (value) {
            throw new Error("Can not set ...");
        }
    }
});

var myUser = new SomeUser();
myUser.firstName = "Markus";
myUser.lastName = "Mustermann";

log(myUser.fullName);


log("Setting fullname");
try {
    myUser.fullName = "John Doe";
    log(myUser.fullName);
} catch (err) {
    log("ERR:" + err);
}

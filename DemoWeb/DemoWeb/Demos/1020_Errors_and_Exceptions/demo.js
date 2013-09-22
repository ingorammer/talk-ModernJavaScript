function SomeUser() {
    this.throwError = function () {
        throw new Error("yes!");
    };

    this.test = function () {
        try {
            this.throwError();
        } catch (err) {
            log("Oops ... something happened.");
            throw err;    // NOTE: this is OK in JavaScript, but would be bad in C#
        }
    };
}

var usr = new SomeUser();

try {
    usr.test();
} catch (err) {
    log("ERR:" + err);
    log(err.message);
    
    log(err.stack);
}
// #1 --> Functions can be values, #2 "real" functions are reordered

var test = function () {
    log("Foo");
};

function test() {
    log("Bar");
}

test();


































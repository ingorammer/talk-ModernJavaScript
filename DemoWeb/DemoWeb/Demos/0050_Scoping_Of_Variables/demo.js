
var foo = "bla";

function first() {
    log("Calling first. foo => '" + foo + "'");
    var foo = "baz";
    log("Inside first. foo => '" + foo + "'");
}

function second() {
    log("Calling second. foo => '" + foo + "'");
    foo = "blubb";
    log("Inside second. foo => '" + foo + "'");

}

first();
second();





















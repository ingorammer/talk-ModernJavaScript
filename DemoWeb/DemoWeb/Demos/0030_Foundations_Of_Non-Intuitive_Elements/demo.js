// thruthy and false

function checkConditions(condition, text) {
    if (condition) {
        log(text + " -> TRUE");
    } else {
        log(text + " -> FALSE");
    }
}

checkConditions(true, "true");
checkConditions(false, "false");
checkConditions(null, "null");
checkConditions(window.some_undefined_value, "window.some_undefined_value");
checkConditions(0, "0");
checkConditions(1, "1");
checkConditions(-1, "-1");
checkConditions("", '""');
checkConditions("X", '"X"');
log("");

log("And now, we get tricky:");
checkConditions(0 == "0", '0 == "0"');
checkConditions(0, "0");
checkConditions("0", '"0"');
log("");

log("Therefore use === for exact comparisons instead:");
checkConditions(0 === "0", '0 === "0"');

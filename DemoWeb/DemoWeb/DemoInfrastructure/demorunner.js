function log(text) {
    $("#log").append("<li>" + text + "</li>");
    if (console) console.log(text);
};


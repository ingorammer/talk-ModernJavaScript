var someHelper = {

    doSomething: function() {
        log("In doSomething().");
        this.doSomethingElse();
    },
    doSomethingElse: function() {
        log("In doSomethingElse().");
    },


    bindToEvent: function () {
        $("#clickMeButton").click(function () {
            this.handleClick();
        });
    },
    handleClick: function () {
        log("handled the click ...");
    }
    
};

someHelper.doSomething();
someHelper.bindToEvent();

log("The click handler won't work as expected!")
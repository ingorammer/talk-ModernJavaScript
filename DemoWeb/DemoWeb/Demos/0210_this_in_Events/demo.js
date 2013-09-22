var someHelper = {
    bindToEvents: function() {
        $("#clickMeButton").click(this.handleClick);
    },
    
    handleClick: function() {
        log("handled the click ... BUT:");
        log("This: " + this);

        this.doSomethingElse();
    },
    
    doSomethingElse: function () {
        log("This is never called ...");
    }
};

someHelper.bindToEvents();

log("The method handleClick() will show an interesting 'this'")
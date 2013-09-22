var someHelper = {
    bindToEvents: function () {
        var that = this;
        
        $("#clickMeButton").click(function() {
            that.handleClick();
        });
    },
    
    handleClick: function() {
        log("handled the click ... and NOW ...");
        this.doSomethingElse();
    },
    
    doSomethingElse: function () {
        log("This is now working  ...");
    }
};

someHelper.bindToEvents();

log("We're capturing 'this' in a closure as 'that'")
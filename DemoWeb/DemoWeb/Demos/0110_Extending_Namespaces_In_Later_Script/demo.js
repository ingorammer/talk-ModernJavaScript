(function() {
    window.myApp = window.myApp || {};
    myApp.controllers = myApp.controllers || {};

    myApp.controllers.employeeController =
    {
        load: function (id) {
            log("Loading employee " + id);
        }
    };
})();


// ====== some other script file
(function() {
    window.myApp = window.myApp || {};
    myApp.controllers = myApp.controllers || {};

    myApp.controllers.customerController =
    {
        load: function(id) {
            log("Loading customer " + id);
        }
    };
})();

// ====== some other script file uses these elements

myApp.controllers.employeeController.load(12);
myApp.controllers.customerController.load(15);


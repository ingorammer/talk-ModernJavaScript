var myApp = {};
myApp.controllers = {};

myApp.controllers.employeeController = {
    load: function (id) {
        log("Loading employee " + id);
    }
};


// ====== some other script

myApp.controllers.employeeController.load(12);


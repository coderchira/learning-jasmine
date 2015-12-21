describe("This is to test the mainController", function () {
    var svcController;
    var myScope;
    // instantiates the module
    beforeEach(module("myApp"));
    beforeEach(inject(function ($controller, $rootScope) {
        svcController = $controller;
        //var myCtrl = $controller("mainController", { $scope: myscope });
        // instantiating the scope
        myScope = $rootScope.$new();
    }));
    beforeEach(function () {
        // instantiating the controller
        var myCtrl = svcController("mainController", { $scope: myScope });
        
    });
    it("should return the value of username", function () {
        expect(myScope.user.username).toEqual("Ruchira");
        expect(myScope.user.password).toEqual("038218");
    })
})
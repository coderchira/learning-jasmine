(function () {
    var mainController = angular.module("myApp").controller("mainController", function ($scope) {
        console.log("we are inside the controller");
        $scope.user = {
            username: "Ruchira",
            password:"106456"
        }
    })
})();
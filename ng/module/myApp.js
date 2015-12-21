(function () {
    var myApp = angular.module("myApp", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
        .when("/", { templateUrl: "/ng/views/login.html", controller: "mainController" })
        .when("/login", { templateUrl: "/ng/views/login.html", controller: "mainController" })
        .otherwise({ redirectTo: "/" });
    })
})();
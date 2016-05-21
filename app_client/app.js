(function(){

    angular.module("infiniteSocialApp", ["ngRoute", "firebase"]);

    function config ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "epg/epg.view.html",
                controller: "epgCtrl",
                controllerAs: "vm"
            })
            .when("/portal", {
                templateUrl: "/portal/portal.view.html",
                controller: "portalCtrl",
                controllerAs: "vm"
            })
           .when("/register", {
                templateUrl: "/auth/register/register.template.html",
                controller: "registerCtrl",
                controllerAs: "vm"
            })
           .when("/login", {
                templateUrl: "/auth/login/login.template.html",
                controller: "loginCtrl",
                controllerAs: "vm"
            })
           .otherwise({redirectTo: "/"});

        $locationProvider.html5Mode(true);
    };

    angular
        .module("infiniteSocialApp")
        .config(["$routeProvider", "$locationProvider", config]);
})();
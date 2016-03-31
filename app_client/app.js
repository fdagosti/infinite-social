(function(){

    angular.module("infiniteSocialApp", ["ngRoute", "ui.tinymce"]);

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
           .otherwise({redirectTo: "/"});

        $locationProvider.html5Mode(true);
    };

    angular
        .module("infiniteSocialApp")
        .config(["$routeProvider", "$locationProvider", config]);
})();
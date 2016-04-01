

angular.module('infiniteSocialApp').controller('epgCtrl', function($scope, infiniteData) {

    var vm = this;
    vm.pageHeader = {
        title: "EPG Screen"
    };

    vm.social = {
        friends : 345,
        notifs: ["trop fort", "c'est bon ca", "ouais"]
    };

    vm.videoRecos = infiniteData.videoRecos();

});
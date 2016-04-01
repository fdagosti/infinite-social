
var handler;
angular.module('infiniteSocialApp').controller('epgCtrl', function($scope, infiniteData, $rootScope) {
    var vm = this;
    vm.pageHeader = {
        title: "EPG Screen"
    };

    vm.social = {
        friends : 345,
        notifs: ["trop fort", "c'est bon ca", "ouais"]
    };

    vm.currentProfile = infiniteData.currentProfile();
    vm.videoRecos = infiniteData.videoRecos();

    $scope.$on('$destroy', handler);
    handler = $rootScope.$on('profile-change', function(){
        console.log("profile has changed from EPG");
        vm.currentProfile = infiniteData.currentProfile();
    });

});
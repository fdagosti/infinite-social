
var hand;
angular.module('infiniteSocialApp').controller('portalCtrl', function($scope, infiniteData, $rootScope) {

    var vm = this;
    vm.pageHeader = {
        title: "Profile Portal"
    };


    vm.currentProfile = infiniteData.currentProfile();

    $scope.$on('$destroy', hand);
    hand = $rootScope.$on('profile-change', function(){
        console.log("profile has changed from EPG");
        vm.currentProfile = infiniteData.currentProfile();
    });
});
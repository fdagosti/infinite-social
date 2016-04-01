(function(){
angular.module('infiniteSocialApp').controller('navCtrl', function($scope, infiniteData) {
	var vm = this;
console.log("Salut tout le monde");
	vm.profiles = infiniteData.getProfiles();
	
	vm.changeProfile = function(idx){
		
			infiniteData.setCurrentProfile(idx);
		
	};

});
})();
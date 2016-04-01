(function () {

  angular
    .module('infiniteSocialApp')
    .directive('navigation', navigation);

  function navigation () {
    return {
      restrict: 'EA',
      templateUrl: '/common/directives/navigation/navigation.template.html',
      controller: 'navCtrl',
      controllerAs: "toto"
    };
  }

})();
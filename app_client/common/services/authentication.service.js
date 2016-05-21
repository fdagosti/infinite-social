(function() {
    angular
    .module("infiniteSocialApp")
    .factory("authentication", authentication);

    authentication.$inject = ["$window", "$http","$rootScope", "$firebaseAuth"];
    function authentication($window, $http, $rootScope, $firebaseAuth) {
        
    // // Initialize Firebase
    //   var config = {
    //     apiKey: "AIzaSyC2EG-3RE2p-7od-IbGGvm9Xm05knq2WHI",
    //     authDomain: "infinite-social-66d8a.firebaseapp.com",
    //     databaseURL: "https://infinite-social-66d8a.firebaseio.com",
    //     storageBucket: "infinite-social-66d8a.appspot.com",
    //   };
    // firebase.initializeApp(config);

    // var ref = firebase.database().ref();
    var ref = new Firebase("https://infinite-social.firebaseio.com");

     console.log("firebase configured "+ref);
     console.log($firebaseAuth);
    var auth = $firebaseAuth(ref);
    console.log(auth);

       var register = function(user) {
            return auth.$createUser(user);
        }; //register

        var login = function(user) {
            return auth.$authWithPassword(user);
        }; //login

        var logout = function(){
            
        }; // logout

        

        

        return {

            register: register,
            login: login,
            logout: logout,
        };
    }
})();
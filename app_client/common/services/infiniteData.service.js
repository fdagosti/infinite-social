(function(){

    angular
       .module('infiniteSocialApp')
       .service('infiniteData', infiniteData);

    infiniteData.$inject = ["$http", "$rootScope"];   
    function infiniteData ($http, $rootScope) {
       var videoRecos = function (lat, lng) {
         return [
    [
        {
            img: "http://media.senscritique.com/media/000012353851/source_big/Mission_Impossible.jpg",
            title: "Mission Impossible",
            description: "bla bli blou"
        },
        {
            img: "http://media.senscritique.com/media/000012353851/source_big/Mission_Impossible.jpg",
            title: "Mission Impossible",
            description: "bla bli blou"
        },
        {
            img: "http://img.actucine.com/wp-content/uploads/2015/06/Mission-Impossible-5-150604-07.jpg",
            title: "Mission Impossible",
            description: "bla bli blou"
        },
        {
            img: "http://media.senscritique.com/media/000012353851/source_big/Mission_Impossible.jpg",
            title: "Mission Impossible",
            description: "bla bli blou"
        },

    ],
    [
        {
            img: "http://media.senscritique.com/media/000012353851/source_big/Mission_Impossible.jpg",
            title: "Mission Impossible",
            description: "bla bli blou"
        },
        {
            img: "http://media.senscritique.com/media/000012353851/source_big/Mission_Impossible.jpg",
            title: "Mission Impossible",
            description: "bla bli blou"
        },
        {
            img: "http://media.senscritique.com/media/000012353851/source_big/Mission_Impossible.jpg",
            title: "Mission Impossible",
            description: "bla bli blou"
        },
        {
            img: "http://media.senscritique.com/media/000012353851/source_big/Mission_Impossible.jpg",
            title: "Mission Impossible",
            description: "bla bli blou"
        },

    ],
    [
      {
            img: "http://media.senscritique.com/media/000012353851/source_big/Mission_Impossible.jpg",
            title: "Mission Impossible",
            description: "bla bli blou"
        },
        {
            img: "http://media.senscritique.com/media/000012353851/source_big/Mission_Impossible.jpg",
            title: "Mission Impossible",
            description: "bla bli blou"
        },
        {
            img: "http://media.senscritique.com/media/000012353851/source_big/Mission_Impossible.jpg",
            title: "Mission Impossible",
            description: "bla bli blou"
        },
        {
            img: "http://media.senscritique.com/media/000012353851/source_big/Mission_Impossible.jpg",
            title: "Mission Impossible",
            description: "bla bli blou"
      },

    ],

    ];
       };

       var socialData = function(locationid) {
        
       }; 

       var profiles = function(locationid, data) {
          
       };

       var profiles = {
        currentProfile : 0,
        profileList: [
        {
          name : "Francois"
        },
        {
          name : "Rachid"
        },
        {
          name : "Thomas"
        },
        {
          name : "Mohammed"
        },
       ]
     };

     var getProfiles = function(){
      return profiles;
     };

       var currentProfile = function(){
          return profiles.profileList[profiles.currentProfile];
       };

       var setCurrentProfile = function(profileName){
        console.log(profileName);

          profiles.currentProfile = profileName;
          $rootScope.$emit('profile-change');

          console.log("profile = "+profiles.currentProfile);
       };

       return {
         videoRecos : videoRecos,
         socialData : socialData,
         profiles : profiles,
         currentProfile : currentProfile,
         setCurrentProfile: setCurrentProfile,
         getProfiles:getProfiles
       };
    };
})();
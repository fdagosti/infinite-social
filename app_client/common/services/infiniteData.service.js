(function(){

    angular
       .module('infiniteSocialApp')
       .service('infiniteData', infiniteData);

    infiniteData.$inject = ["$http"];   
    function infiniteData ($http) {
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

       

       return {
         videoRecos : videoRecos,
         socialData : socialData,
         profiles : profiles
       };
    };
})();
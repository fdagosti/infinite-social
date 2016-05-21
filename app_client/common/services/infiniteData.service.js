(function(){

    angular
       .module('infiniteSocialApp')
       .service('infiniteData', infiniteData);

    infiniteData.$inject = ["$http", "$rootScope", "authentication"];   
    function infiniteData ($http, $rootScope, authentication) {
      authentication.login();
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

       var profiles = {
        currentProfile : 0,
        profileList: [
        {
          name : "Francois",
          social: {
          friends : 345,
        notifs: ["Francois, tu es beau", "laura a publie une photo", "ca te dit une bouffe ce soir ?"],
        },
          videoRecos : [
    [
        {
            img: "http://media.senscritique.com/media/000012353851/source_big/Mission_Impossible.jpg",
            title: "Mission Impossible",
            description: "bla bli blou"
        },
        {
            img: "http://media.senscritique.com/media/000008032023/source_big/Le_Bon_la_Brute_et_le_Truand.jpg",
            title: "Le bon la brute et le truand",
            description: "bla bli blou"
        },
        {
            img: "http://fr.web.img6.acsta.net/medias/nmedia/18/36/10/96/19649758.jpg",
            title: "Le diner de cons",
            description: "bla bli blou"
        },
        {
            img: "http://frothygirlz.com/wp-content/uploads/2009/07/brazil.jpg",
            title: "Brazil",
            description: "bla bli blou"
        },

    ]],
        },
        {
          name : "Rachid",
           social: {
          friends : 2,
        notifs: ["Rachid a change de profil", "Vous avez un message", "Great dinner yesterday !!"],
      },
          videoRecos: [
    [
        {
            img: "https://cnet4.cbsistatic.com/hub/i/r/2015/11/19/a899c919-8f1d-446f-a74c-5615651677d9/resize/570xauto/2ff9db5646572d3ad0c18430576a09ed/star-wars-poster-1977.jpg",
            title: "Star Wars",
            description: "bla bli blou"
        },
        {
            img: "http://www.loopio.fr/images/rubriques/cat-petit-pony.jpg",
            title: "Mon petit poney",
            description: "bla bli blou"
        },
        {
            img: "http://img15.hostingpics.net/pics/224122canalmanga4820.jpg",
            title: "One Piece",
            description: "bla bli blou"
        },
        {
            img: "http://www.topnormandie.com/wp-content/uploads/2015/11/La-Reine-des-neiges-est-le-plus-gros-succes-de-tous-les-temps-pour-un-film-d-animation_portrait_w532.jpg",
            title: "la reine des neiges",
            description: "bla bli blou"
        },

    ]],
        },
        {
          name : "Thomas",
           social: {
          friends : 3457,
        notifs: ["Thomas, please see this job offer", "is your girlfriend satisfied ?", "Super match hier !!!"],
      },
          videoRecos: [
    [
        {
            img: "http://fr.web.img2.acsta.net/pictures/13/12/18/10/01/110035.jpg",
            title: "La belle et la Bete",
            description: "bla bli blou"
        },
        {
            img: "http://www.commeaucinema.com/images/news_insert/348498_799771_266519.jpg",
            title: "Conan le barbare",
            description: "bla bli blou"
        },
        {
            img: "http://images.jedessine.com/_uploads/_tiny_galerie/20130209/vign-tchoupi-mku_fe7.jpg",
            title: "Tchoupi",
            description: "bla bli blou"
        },
        {
            img: "http://images.fan-de-cinema.com/affiches/large/99/25243.jpg",
            title: "Ce que veulent les femmes",
            description: "bla bli blou"
        },

    ]],
        },
        {
          name : "Mohammed",
           social: {
          friends : 35,
        notifs: ["Mohammed is now happy", "Amelie veut devenir votre amie", "Vous avez 5 notfication en attente"],
      },
          videoRecos: [
    [
        {
            img: "http://static.srcdn.com/slir/w700-h350-q90-c700:350/wp-content/uploads/Dragon-Ball-Super-Anime.jpg",
            title: "Dragon Ball",
            description: "bla bli blou"
        },
        {
            img: "http://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX640_SY720_.jpg",
            title: "The Avengers",
            description: "bla bli blou"
        },
        {
            img: "http://fr.web.img6.acsta.net/medias/nmedia/18/88/95/51/20264212.jpg",
            title: "James Bond",
            description: "bla bli blou"
        },
        {
            img: "http://fr.web.img6.acsta.net/medias/nmedia/00/02/54/95/affiche2.jpg",
            title: "Lord of the rings",
            description: "bla bli blou"
        },

    ]],
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
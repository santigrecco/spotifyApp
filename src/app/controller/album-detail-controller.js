// import {Fav} from './classes/favs';
class Fav {
     constructor(name, album, albumCover, id, albumId){
       this.name = name;
       this.album = album;
       this.albumCover = albumCover;
       this.id = id;
       this.albumId = albumId;
     }
}


export function albumDetailController($scope, $rootScope, $routeParams, ApiService){
    this.state = {};
    $scope.adc = this.state;
    $scope.playing = {};
    // animation config
        $scope.pageClass = 'last';
        // document.getElementsByClassName('container')[0]
        //           .classList.remove('backward');

    // animation config

    if(localStorage.getItem('favs') != undefined){
      this.state.favs = JSON.parse(localStorage.getItem('favs'));
      this.state.favs = this.state.favs.map(function(el){
         return new Fav(el.name, el.album, el.albumCover, el.id, el.albumId);
      });
    }else{
      this.state.favs = [];
    }


    ApiService.searchAlbum($routeParams.albumId)
      .then((response)=>{
        this.state.tracks = response.data.tracks.items;
        this.state.album = response.data;
        console.log(response);
      })

     $scope.isFav = (id)=>{
         return this.state.favs.map(function(el){
             return el.id;
         }).indexOf(id) != -1;
     }

     $scope.toggleFav = (track)=>{
         let fav = new Fav(track.name, this.state.album.name,
             this.state.album.images[0].url, track.id, this.state.album.id);
             console.log(fav);
         if($scope.isFav(track.id)){
             let index = this.state.favs.map(function(el){
                 return el.id;
             }).indexOf(track.id);
             this.state.favs.splice(index, 1);
             localStorage.setItem('favs', JSON.stringify(this.state.favs));
        }else{
            this.state.favs.push(fav);
            localStorage.setItem('favs', JSON.stringify(this.state.favs));
        }
     }

     $scope.playToggle = (track)=>{
        if(track != $scope.playing){
          $scope.playing = track;
          $rootScope.$emit('pause', track.id);
          $rootScope.$emit('play', {track: track, album:this.state.album});
        }else{
          $scope.playing = {};
          $rootScope.$emit('pause', track.id);
        }
     }


}

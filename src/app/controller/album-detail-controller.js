// import {Fav} from './classes/favs';
class Fav {
     constructor(name, album, albumCover, id){
       this.name = name;
       this.album = album;
       this.albumCover = albumCover;
       this.id = id;
     }
}


export function albumDetailController($scope, $routeParams, ApiService){
    this.state = {};
    $scope.adc = this.state;
    if(localStorage.getItem('favs') != undefined){
      this.state.favs = JSON.parse(localStorage.getItem('favs'));
      this.state.favs = this.state.favs.map(function(el){
         return new Fav(el.name, el.album, el.albumCover, el.id);
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
             this.state.album.images[0].url, track.id);
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
}

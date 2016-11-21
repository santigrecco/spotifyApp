export function bandAlbumsController($scope, $window, $routeParams, $location, ApiService){
  this.state = {};

  // animation config
  $scope.pageClass = 'middle';
  // document.getElementsByClassName('container')[0]
  //             .classList.remove('backward');
  // $window.onbeforeunload = function(){
  // document.getElementsByClassName('container')[0]
  //               .classList.remove('backward');
  // }

// animation config
  $scope.bac = this.state;

  if(ApiService.artist == undefined){
    ApiService.searchArtistById($routeParams.bandId)
      .then((response)=>{
        this.state.artist = response.data;
      });
  }else{
    this.state.artist = ApiService.artist;
  }


  ApiService.searchArtistAlbums($routeParams.bandId)
    .then((response)=>{
      this.state.albums = response.data.items;
    });


    $scope.goAlbum = (album)=>{
      $location.path(`/album-detail/${album.id}`);
    }

}

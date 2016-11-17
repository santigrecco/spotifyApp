export function bandAlbumsController($scope, $routeParams, $location, ApiService){
  this.state = {};
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

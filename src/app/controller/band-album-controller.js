export function bandAlbumsController($scope, ApiService){
  this.state = {};
  $scope.bac = this.state;
  this.state.artist = ApiService.artist;

  console.log(this.state.artist);

  ApiService.searchArtistAlbums(this.state.artist.id)
    .then((response)=>{
      this.state.albums = response.data.items;
      console.log(response);
    });
}

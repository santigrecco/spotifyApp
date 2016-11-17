export function albumDetailController($scope, $routeParams, ApiService){
    this.state = {};
    $scope.adc = this.state;

    ApiService.searchAlbum($routeParams.albumId)
      .then((response)=>{
        this.state.tracks = response.data.tracks.items;
        this.state.album = response.data;
        console.log(response);
      })


}

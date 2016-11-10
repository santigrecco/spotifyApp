export function resultsController($scope, $rootScope, $window, $location,
   ApiService, State){

  this.state = {};
  $scope.rc = this.state;
  this.state.searched = $rootScope.artistName;
  console.log(this.state.searched);
  ApiService.searchArtist(this.state.searched)
    .then(function(response){
      this.state.artists = response.data.artists.items;
      console.log(this.state.artists);
    }.bind(this));
}

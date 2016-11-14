export function resultsController($scope, $rootScope, $window, $location,
   ApiService, State){

  $scope.pageClass = 'results';
  this.state = {};
  $scope.rc = this.state;
  this.state.searched = $rootScope.artistName;
  console.log(this.state.searched);
  ApiService.searchArtist(this.state.searched)
    .then(function(response){
      this.state.artists = response.data.artists.items;
    }.bind(this));


  // listener added for detecting a 'back' click and animate correctly
  window.addEventListener('popstate', function(){
    document.getElementsByClassName('container results')[0]
      .classList.add('results-backwards');
    
  });

  //IT MAY GENERATE AN ANIMATION BUG ON PUSHSTATE
  //fix code down

  // window.addEventListener('pushstate', function(){
  //   document.getElementsByClassName('container results')[0]
  //     .classList.remove('results-backwards');
  // });

}

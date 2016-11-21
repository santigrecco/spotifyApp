export function resultsController($scope, $rootScope, $window, $routeParams, $location,
   ApiService, State){

  this.state = {};

  $scope.rc = this.state;
  this.state.searched = $routeParams.search;

  // animation config
    $scope.pageClass = 'middle';
    // document.getElementsByClassName('container')[0]
    //             .classList.remove('backward');
    // $window.onbeforeunload = function(){
    //   document.getElementsByClassName('container')[0]
    //               .classList.remove('backward');
    // }

// animation config

  $scope.refreshList =  ()=>{
    ApiService.searchArtist($routeParams.search)
    .then((response) =>{
      this.state.artists = response.data.artists.items;
    });
  }
  $scope.refreshList();









}

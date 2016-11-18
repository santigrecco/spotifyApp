export function resultsController($scope, $rootScope, $window, $routeParams, $location,
   ApiService, State){

  this.state = {};

  $scope.rc = this.state;
  this.state.searched = $routeParams.search;
  //delete the class added for popstate
  document.getElementsByClassName('container')[0]
    .classList.remove('backward');

  $scope.pageClass = 'results';


  $scope.refreshList =  ()=>{
    ApiService.searchArtist($routeParams.search)
    .then((response) =>{
      this.state.artists = response.data.artists.items;
    });
  }
  $scope.refreshList();

  //event emitted by the input component for refreshing the the ApiService query

  // $rootScope.$on('refresh', $scope.refreshList);





  // listener added for detecting a 'back' click and animate correctly
  window.addEventListener('popstate', function(){
    document.getElementsByClassName('container results')[0]
      .classList.add('backward');
  });




}

export function resultsController($scope, $rootScope, $window, $location,
   ApiService, State){


  this.state = {};
  // if (State.get('rc') != undefined) {
  //   this.state = State.get('rc');
  // }
  $scope.rc = this.state;

  //delete the class added for popstate
  document.getElementsByClassName('container ')[0]
    .classList.remove('backward');

  $scope.pageClass = 'results';
  this.state.searched = ApiService.search;


  $scope.refreshList =  ()=>{
    ApiService.searchArtist(ApiService.search)
    .then((response) =>{
      this.state.artists = response.data.artists.items;
    });
  }
  $scope.refreshList();

  //event emitted by the input component for refreshing the the ApiService query

  $rootScope.$on('refresh', $scope.refreshList);





  // listener added for detecting a 'back' click and animate correctly
  window.addEventListener('popstate', function(){
    document.getElementsByClassName('container results')[0]
      .classList.add('backward');
  });




}

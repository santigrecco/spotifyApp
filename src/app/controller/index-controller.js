export function indexController($scope, $rootScope, $window, $cookies,
   ApiService, State){

  // $scope.ic.search = '';
  if (State.get('ic') != undefined) {
    this.state = State.get('ic');
  }
  $scope.ic = this.state;


  $scope.go = function(search){
    ApiService.searchArtist(search)
      .then(function(data){
        console.log(data);
      });
  }.bind(this);

  $window.onbeforeunload = function(){
    State.save('ic', this.state);
  }.bind(this);
}

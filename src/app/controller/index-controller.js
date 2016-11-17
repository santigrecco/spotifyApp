export function indexController($scope, $window, $location, ApiService, State){

  $scope.pageClass = 'index';


  // $scope.go = function(search){
  //   if(search == ''){
  //     alert('Error, search field is empty');
  //   }else{
  //     State.delete('ic');
  //     ApiService.search = search;
  //     $location.path(`/results/${search}`);
  //   }
  // }.bind(this);

  $window.onbeforeunload = function(){
    State.save('ic', this.state);
  }.bind(this);

}

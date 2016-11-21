export function indexController($scope, $window, $location, ApiService, State){

  // animation config
    $scope.pageClass = 'first';
    // document.getElementsByClassName('container')[0]
    //             .classList.remove('backward');

  // animation config
  // $scope.go = function(search){
  //   if(search == ''){
  //     alert('Error, search field is empty');
  //   }else{
  //     State.delete('ic');
  //     ApiService.search = search;
  //     $location.path(`/results/${search}`);
  //   }
  // }.bind(this);

  // $window.onbeforeunload = function(){
  //   // State.save('ic', this.state);
  //   document.getElementsByClassName('container')[0]
  //               .classList.remove('backward');
  // }.bind(this);

}

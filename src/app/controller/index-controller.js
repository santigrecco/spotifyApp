export function indexController($scope, $rootScope, $window, $location,
  ApiService, State){


  $scope.pageClass = 'index';

  $scope.show = true;
  this.state = {};
  if (State.get('ic') != undefined) {
    this.state = State.get('ic');
  }
  $scope.ic = this.state;

  $scope.go = function(search){
    if(search == ''){
      alert('Error, search field is empty');

    }else{
      State.delete('ic');
      $rootScope.artistName = search;
      $location.path('/results');
    }
  }.bind(this);

    $scope.changeState = function(){
        $scope.show = !$scope.show;
        console.log($scope.show);
    }

  $window.onbeforeunload = function(){
    State.save('ic', this.state);
    console.log('something');
  }.bind(this);
}

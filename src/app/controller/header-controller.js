export function headerController($scope, $location){
  $scope.home = function(){
    $location.path('/');
  }
}

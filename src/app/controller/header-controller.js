export function headerController($scope, $location){
  $scope.home = function(){
    $location.path('/');
  }

  $scope.$on('$locationChangeSuccess', function(){
    if($location.path().indexOf('/album-detail') != -1 || $location.path().indexOf('/band-album') != -1){
      $scope.showInput = true;
    }else{
      $scope.showInput = false;
    }
  })

}


export function StarDirective (){
  return  {
      restrict: 'E',
      link: dLink,
      scope: {
        fav: '&',
        toggle:'&'
      },
      templateUrl: '/app/directives/star.html',
      controller: controller
    };
}

function dLink($scope, $location){

}

function controller($scope, $location, ApiService) {
  $scope.refresh = function(){
    if($scope.fav()){
      $scope.url = '/star-golden.png';
    }else{
      $scope.url = '/star-grey.png';
    }
  }
  $scope.refresh();

  $scope.click = function(){
    $scope.toggle();
    if($scope.fav()){
      $scope.url = '/star-golden.png';
    }else{
      $scope.url = '/star-grey.png';
    }
  }
}

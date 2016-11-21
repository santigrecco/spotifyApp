export function footerPlayerController($scope, $rootScope) {
  $rootScope.$on('play', function(event, track){
    $scope.name = track.name;
    $scope.play = true;
  });

  $rootScope.$on('pause', function(event){
    $scope.play = false;
  });

}

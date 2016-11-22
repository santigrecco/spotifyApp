export function footerPlayerController($scope, $rootScope, $sce) {
  $rootScope.$on('play', function(event, data){
    $scope.name = data.track.name;
    $scope.img = data.album.images[0].url;
    $scope.audio = $sce.trustAsResourceUrl(data.track.preview_url);
    $scope.play = true;
  });

  $rootScope.$on('pause', function(event){
    $scope.play = false;
  });

}

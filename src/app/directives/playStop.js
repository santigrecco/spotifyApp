var urls = {
    play: '/play-button.png',
    pause: '/pause-button.png'
}



export function PlayStopDirective (){
  return  {
      restrict: 'E',
      link: dLink,
      scope: {
        play: '=',
        trackId:'<',
        playToggle: '&'
      },
      template: '<img class="play-icon"  ng-src="{{url}}" ng-click="click()"/>',
      controller: controller
    };
}

function dLink(){}

function controller($scope, $rootScope){
  if($scope.play){
    $scope.url = '/pause-button.png';
  }else{
    $scope.url = '/play-button.png';
  }

  $scope.click = function(){
    $scope.playToggle();
    if($scope.url == urls.play && !$scope.toggledByEvent){
      $scope.url = urls.pause;
      let unSuscribeEvent = $rootScope.$on('pause', function(event, id){
        if( id != $scope.trackId ){
          $scope.url = urls.play;
        }
        unSuscribeEvent();
      });
    }else{
      $scope.url = urls.play;
    }

  }
}

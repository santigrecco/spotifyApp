
export function ArtistDirective (){
  return  {
      restrict: 'E',
      link: dLink,
      scope: {
        artists: '=',
      },
      templateUrl: '/app/directives/artist.html',
      controller: controller
    };
}

function dLink($scope, $location, ApiService, State){




}

function controller($scope, $location, ApiService) {
  $scope.click = function(artist){
    ApiService.artist = artist;
    $location.path(`/band-albums/${artist.id}`);
  }
}

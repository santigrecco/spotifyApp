export function indexController($scope, ApiService){
  $scope.search = '';
  $scope.go = function(search){
    ApiService.searchArtist(search)
      .then(function(data){
        console.log(data);
      });

  }
}

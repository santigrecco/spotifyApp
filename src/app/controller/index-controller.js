export function indexController($scope, $window, $location, ApiService, State){

    $scope.pageClass = 'first';
    $scope.favs = [];
    if(localStorage.getItem('favs')){
      $scope.favs = JSON.parse(localStorage.getItem('favs'));
    }

    $scope.deleteFav = function(id){
      let index = $scope.favs.map(function(el){
        return el.id;
      }).indexOf(id);
      $scope.favs.splice(index, 1);
      localStorage.setItem('favs', JSON.stringify($scope.favs));
    }
}

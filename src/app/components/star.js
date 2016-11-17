export var starComponent =  {
    controller: starController,
    templateUrl: '/app/components/star.html',
    bindings: {
      fav: '='
    },
  }

  function starController($scope){
    console.log($scope.fav);
    if($scope.fav == true){
      console.log($scope.fav);
      $scope.url ="/star-golden.png";
    }else{
      console.log($scope.fav);
      $scope.url = "/star-grey.png";
    }
  }

export var inputComponent =  {
    controller: inputController,
    controllerAs: 'myCtrl',
    templateUrl: 'app/components/input.html',
    bindings: {
      refresh: '='
    }
  }

  function inputController($scope, $rootScope, $location,  ApiService){
    $scope.go = function(search){
      if(search == ''){
        alert('Error, search field is empty');
      }else{
        ApiService.search = search;
        $location.path('/results');
        $rootScope.$emit('refresh');
      }
    }.bind(this);
  }

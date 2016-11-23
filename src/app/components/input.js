export var inputComponent =  {
    controller: inputController,
    controllerAs: 'myCtrl',
    templateUrl: '/app/components/input.html',
    bindings: {
      refresh: '='
    }
  }

  function inputController($scope, $rootScope, $location,  ApiService){
    $scope.ic = this;
    this.search = '';
    this.error = false;
    $scope.go = function(search){
      if(search == ''){
        this.error = true;
      }else{
        ApiService.search = search;
        $location.path(`/results/${search}`);
      }
    }.bind(this);
  }

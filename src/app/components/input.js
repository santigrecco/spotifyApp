export var inputComponent =  {
    controller: inputController,
    controllerAs: 'myCtrl',
    templateUrl: '/app/components/input.html',
    bindings: {
      // refresh: '='
    }
  }

  function inputController($scope, $rootScope, $location, $timeout, ApiService){
    $scope.ic = this;
    this.search = '';
    this.error = false;

    $scope.go = function(search){
      if(search == ''){
        this.error = true;
        $timeout(()=>{
          this.error = false;
        }, 2000);

      }else{
        this.error = false;
        ApiService.search = search;
        $location.path(`/results/${search}`);
      }
    }.bind(this);
  }

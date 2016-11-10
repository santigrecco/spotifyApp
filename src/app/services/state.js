export function State ($cookies){
  this.save = function(name, obj){
    $cookies.putObject(name, obj);
    return 'state saved';
  }
  this.get = function(name){
    return $cookies.getObject(name);
  }
  this.delete = function(name){
    $cookies.remove(name);
  }
}

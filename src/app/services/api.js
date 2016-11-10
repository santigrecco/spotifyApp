export function ApiService($http) {
    this.baseUrl = 'https://api.spotify.com';
    this.searchArtist = function(search){
      var endpoint =this.baseUrl +'/v1/search?type=artist&q='+encodeURI(search);
      return $http.get(endpoint)
        .then(function(response){
          return response;
        }, function(error){
          console.log(error);
        });
    }

}

export function ApiService($http) {
    this.baseUrl = 'https://api.spotify.com';
    this.search;
    this.artist;
    this.album;

    this.searchArtist = (search) => {
      let endpoint =this.baseUrl +'/v1/search?type=artist&q='+encodeURI(search);
      return $http.get(endpoint)
        .then((response) =>{
          return response;
        }, function(error){
          console.log(error);
        });
    }

    this.searchArtistById = (id) =>{
      let endpoint = this.baseUrl + `/v1/artists/${id} `;
      return $http.get(endpoint)
        .then((response)=>{
          this.artist = response.data;
          return response;
        }, function(error){
          console.log(error);
        })
    }

    this.searchArtistAlbums = (id) => {
      let endpoint =  this.baseUrl + `/v1/artists/${id}/albums`;
      return $http.get(endpoint)
        .then((response)=>{
          return response;
        },(error)=>{
          console.log(error);
        })
    }

    this.searchAlbum = (id) =>{
      let endpoit = this.baseUrl + `/v1/albums/${id}`;
      return $http.get(endpoit)
      .then((response)=>{
          this.album = response;
          return response;
        }, function(error){
          console.log(error);
        })
    }

}

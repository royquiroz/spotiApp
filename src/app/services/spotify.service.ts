import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = []

  urlBusqueda:string = "https://api.spotify.com/v1/search"
  urlArtista: string = "https://api.spotify.com/v1/artists"

  constructor( private http:Http ) { }

  getArtistas( termino:string ) {

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQCuGYO_uGOm1XpB_Em09GUD4yvkLFG9P23xKklwcYck6eAyqdoi1ken605iNOsn5VdEigLRJ_IBxkyOOTAkHg' );


    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get(url, { headers })
            .map( res => {
              //console.log(res);
              this.artistas = res.json().artists.items;
              console.log(this.artistas)
            })

  }

}

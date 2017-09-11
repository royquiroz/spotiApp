import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = []

  urlToken: string = "https://accounts.spotify.com/api/token"
  urlBusqueda: string = "https://api.spotify.com/v1/search"
  urlArtista: string = "https://api.spotify.com/v1/artists"

  constructor(private http: Http) { }

  getArtistas(termino: string) {

    /*    let paramsToken = {
          client_id: "bd3bdc03a2d74dac8e922124aaf48035",
          client_secret: "9fe64272f17b469ebb4a519f27e099b9",
          grant_type: "client_credentials"
        }
    
        this.http.post(this.urlToken, paramsToken)
          .subscribe( res => {
            console.log(res);
          })
    */

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQCCsDVemVmPdz-Tpwqs_Px-obPI74oe4baffPIQQB0uLOy_hL3Nkqu4aFcWvPleuXcEiyjymvZhSNn1OGNw9w');

    let query = `?q=${termino}&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get(url, { headers })
      .map(res => {
        this.artistas = res.json().artists.items;
        console.log(this.artistas)
      })
  }


  getArtista(id: string) {

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQCCsDVemVmPdz-Tpwqs_Px-obPI74oe4baffPIQQB0uLOy_hL3Nkqu4aFcWvPleuXcEiyjymvZhSNn1OGNw9w');

    let query = `/${id}`;
    let url = this.urlArtista + query;

    return this.http.get(url, { headers })
      .map(res => {
        console.log(res.json())
        return res.json();
      })

  }


  getTop(id: string) {

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQCCsDVemVmPdz-Tpwqs_Px-obPI74oe4baffPIQQB0uLOy_hL3Nkqu4aFcWvPleuXcEiyjymvZhSNn1OGNw9w');

    let query = `/${id}/top-tracks?country=MX`;
    let url = this.urlArtista + query;

    return this.http.get(url, { headers })
      .map(res => {
        console.log(res.json().tracks)
        return res.json().tracks;
      })

  }

}

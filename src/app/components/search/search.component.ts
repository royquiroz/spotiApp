import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  termino: string = "";

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() { }
 
  buscarArtista() {
    this._spotifyService.getArtistas(this.termino)
      .subscribe()
  }


}
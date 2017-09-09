import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[]=[];

  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";

  token:string = "Bearer BQC9r9o7TiJ_TCodppT5g1A3t65X_Xwpj6ghdEheLjtr9m-7dPmMOImlzbGdiUomApU36SZml136a1cFfStPsA"

  canciones:any[] = [];

  constructor(private http:Http) { }

  getArtistas(termino:string){

    let headers = new Headers();
    headers.append('authorization',this.token);

    let query = `?q=${termino}&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get(url,{headers}) //obtener observable
      .map(res=>{ //pasar el observable a objeto
        //console.log(res.json().artists.items);
        this.artistas = res.json().artists.items;
        console.log(this.artistas);

        //return res.json().artists.items;
      })
  }

  getArtista(id:string){

    let headers = new Headers();
    headers.append('authorization',this.token);

    let query = `/${id}`;
    let url = this.urlArtista + query;

    return this.http.get(url,{headers}) //obtener observable
      .map(res=>{ //pasar el observable a objeto
        console.log(res.json());

        return res.json();
      })
  }

  getTop(id:string){

    let headers = new Headers();
    headers.append('authorization',this.token);

    let query = `/${id}/top-tracks?country=US`;
    let url = this.urlArtista + query;

    return this.http.get(url,{headers}) //obtener observable
      .map(res=>{ //pasar el observable a objeto
        console.log(res.json().tracks);

        //this.canciones = res.json().tracks;

        return res.json().tracks;
      })
  }

}

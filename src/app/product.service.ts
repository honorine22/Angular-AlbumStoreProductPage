import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Album } from "./album";
import "rxjs/add/operator/map";
@Injectable()
export class ProductService {
  private _albumUrl: string = "../assets/album.json";
  constructor(private _http: Http) {}
  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map(response => <Album>response.json());
  }
}

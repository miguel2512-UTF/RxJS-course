import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, mergeMap, of, zip } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ApiService {
  URL_API = 'https://swapi.dev/api'

  constructor (private http: HttpClient) {}

  getData() {
    // Si queremos transformar o mutar un observable se usa el operador .pipe()
    return this.http.get(`${this.URL_API}/people/2`).pipe(
        map((res: any) => ({
            nombre: res.name
        }))
    )
  }

  getAllData() {
    return this.http.get(`${this.URL_API}/people/2`).pipe(
      // Consultamos dos observables para conseguir el personaje y su especie
      mergeMap((res: any) => zip(of(res), this.http.get(res.species[0]))),
      map(([personaje, especie]: any[]) => ({
        personaje,
        especie
      }))
    )
  }
}
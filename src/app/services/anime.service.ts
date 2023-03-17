import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Anime } from '../interfaces/anime.interface';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private URL = 'https://animechan.vercel.app/api/quotes/anime?title=naruto'

  constructor(private http: HttpClient) { }

  ObtenerAnimes(): Observable<Anime[]>{
    return this.http.get<Anime[]>(`${this.URL}`).pipe(
      retry(1)
    )
  }
}

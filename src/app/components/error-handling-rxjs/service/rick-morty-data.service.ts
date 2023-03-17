import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, EMPTY, map, Observable, of, retry, throwError } from "rxjs";

export interface Character {
    id: number | null
    name: string
    status: string
    species: string
    type: string
    gender: string
    image: string
}

interface ResponseInfo {
    results: Character[]
}

const mockCharacter = {
    id: null,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: ""
}

@Injectable({
    providedIn: 'root'
})

export class RickMortyDataService {
    // Otra manera de inyectar un servicio
    private readonly http = inject(HttpClient)

    getData(): Observable<Character[]> {
        return this.http.get<ResponseInfo>('https://rickandmortyapi.com/api/character')
        .pipe(
            // Número de veces a repetir
            retry(1),
            map((res: ResponseInfo) => res?.results),
            catchError(() => EMPTY)
            // catchError(() => throwError(() => new Error('Ups, algo salió mal')) )
            // catchError(() => of([mockCharacter]))
        )
    }

    filterCharacter(name: string): Observable<Character[]> {
        return this.http.get<ResponseInfo>(`https://rickandmortyapi.com/api/character/?name=${name}`)
        .pipe(
            map((res: ResponseInfo) => res?.results),
            catchError(() => EMPTY)
        )
    }
}
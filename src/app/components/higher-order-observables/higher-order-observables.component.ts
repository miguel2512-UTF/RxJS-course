import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { map, Observable, switchMap } from "rxjs";

@Component({
    selector: 'app-higher-order',
    template: `
        <ng-container *ngIf="data$ | async as item">
            <ul>
                <li>
                    {{ item.name }}
                </li>
            </ul>
        </ng-container>
    `,
    styleUrls: []
})

export class HigherOrderObservablesComponent implements OnInit {
    // Obsevables de orden superior
    // Son aquellos que operan sobre otros observables 

    // Son utiles para crear nuevos observables a partir de un observable y para transformar
    // los datos emitidos por un observable.
    data$!: Observable<any>

    private readonly API = 'https://rickandmortyapi.com/api/character'
    
    constructor(private http: HttpClient){}

    ngOnInit(): void {
        this.data$ = this.http.get(this.API).pipe(
            map((response) => response),
            map(() => Math.floor(Math.random() * 20)),
            // Operadores de orden superior
            // switchMap, concatAll, etc.
            switchMap((id: number) => this.http.get(`${this.API}/${id}`))
        )
    }
}
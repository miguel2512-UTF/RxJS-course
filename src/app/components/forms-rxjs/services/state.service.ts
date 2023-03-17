import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class StateService {
    // Creamos un BeaviorSubject que por defecto tiene un valor inicial
    filtersSource = new BehaviorSubject(null)
    // Creamos el observable al cual estaremos suscritos en los componentes
    // donde deseemos transmitir/compartir la información
    filters$ = this.filtersSource.asObservable()

    constructor(){}
}
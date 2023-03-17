import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
    selector: 'app-behavior-subject',
    template: `
        <button (click)="myBehaviorSubject.next('Hello')">Click me! BehaviorSubject</button>
        {{ myBehaviorSubject | async }}
    `,
    styles: []
})

export class BehaviorSubjectComponent {
    // BehaviorSubject
    // Es una clase específica de Subject en RxJS
    // A diferencia de un Subject normal, un BehaviorSubject siempre tiene un valor inicial y
    // cuando un nuevo suscriptor se suscribe, inmediatamente recibe el valor más reciente.
    myBehaviorSubject = new BehaviorSubject<string>('Initial value')
}
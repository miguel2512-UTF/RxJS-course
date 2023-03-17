import { Component } from "@angular/core";
import { Subject } from "rxjs";

@Component({
    selector: 'app-subject',
    template: `
        <button (click)="mySubject.next('Hello')">Click me! Subject</button>
        {{ mySubject | async }}
    `,
    styles: []
})

export class SubjectComponent {
    // Subject
    // Es un tipo especial de observable en RxJS que permite tanto suscribirse a él
    // como emitir valores
    mySubject = new Subject<string>()
}
import { Component, inject, OnDestroy, OnInit } from "@angular/core";
import { interval, Observable, Subject, Subscription, take, takeUntil, tap } from "rxjs";
import { Character, RickMortyDataService } from "../error-handling-rxjs/service/rick-morty-data.service";

@Component({
    selector: 'app-unsuscribe',
    template: `
        <a [routerLink]="['/']">back</a>
        <button (click)="test()">unsubscribe</button>

        <h2>Pipe Async</h2>
        <!-- 
        Observable$ | async
        Es un operador que se suscribe al observable, obtiene la data y luego lo 
        completa/desuscribe automaticamente. 
        -->
        <ul *ngIf="myData$ | async as characters">
            <li *ngFor="let character of characters">
                {{ character.name }} - {{ character.status }}
            </li>
        </ul>
    `
})

export class UnSubscribeComponent implements OnInit, OnDestroy {
    // Memory Leak: Fuga de Memoria
    // Es necesario y recomendable desuscribirse de los observables para evitar fugas
    // de memoria y evitar pérdida de performance
    private destroy$ = new Subject<void>()
    private subscription: Subscription[] = []
    data$ = interval(1000)

    // Pipe Async => observable | async
    private dataService = inject(RickMortyDataService)

    myData$!: Observable<Character[]>

    ngOnInit(): void {
        // this.subscription.push(
        //     this.data$.pipe(
        //         // Toma el número de emisiones que indiquemos
        //         // take(6),
        //         tap((res: number) => console.log(res))
        //     )
        //     .subscribe()
        // )

        this.data$.pipe(
            takeUntil(this.destroy$),
            tap(res => console.log(res))
        )
        .subscribe()

        // No nos suscribimos
        this.myData$ = this.dataService.getData()
    }

    ngOnDestroy(): void {
        // this.subscription.unsubscribe()
        // this.subscription.forEach(sub => sub.unsubscribe())
        this.destroy$.next()
        this.destroy$.complete()
    }

    test() {
        this.subscription.forEach(sub => sub.unsubscribe())
    }
}
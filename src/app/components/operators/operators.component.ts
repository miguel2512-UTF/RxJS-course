import { Component, OnInit } from '@angular/core';
import { Observable, of, from, merge, concat, Subject, interval } from 'rxjs';
import { tap, map, filter, delay, takeUntil, single, startWith } from "rxjs/operators";

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit{
  /*
  Operadores:
  Son funciones que se pueden aplicar a los observables para transformar y filtrar los datos.

  Tipos de Operadores:
  - Creación: of, from, interval
  - Transformación: map
  - Filtrado: filter
  - Combinación: merge, concat
  - Agrupación: groupBy
  - Error Handling: retry, catchError
  - Terminal: first, last, takeWhile
  - Utility: tap
  */
  myArray = [10, 20, 30]
  private myArrayOf$!: Observable<any>
  private myArrayFrom$!: Observable<any>

  constructor(){}

  ngOnInit(): void {
    // Of -> Operador
    this.myArrayOf$ = of(this.myArray)
    this.myArrayOf$.subscribe(data => console.log('DataOf', data))
    // From -> Operador
    this.myArrayFrom$ = from(this.myArray)
    this.myArrayFrom$.subscribe(data => console.log('DataFrom', data))

    // Tap -> Operador
    this.myArrayFrom$.pipe(
      tap( data => console.log('DataTap', data))
    )
    .subscribe(data => console.log('DataTap2', data))

    // Map -> Operador
    this.myArrayFrom$.pipe(
      map(data => data * 2)
    )
    .subscribe(data => console.log('DataMap2', data))

    // Filter -> Operador
    const myArrayFilter = of(1, 2, 3, 4, 5)
    const evenNumbers = myArrayFilter.pipe(
      filter(x => x % 2 == 0)
    )

    evenNumbers.subscribe(res => console.log('DataFilter', res))

    // Merge -> Operador
    // Permite combinar cualquier número de observables en uno solo
    // Combina los observables aun así no esten completos
    const numbers1 = of(1, 2, 3, 4)
    const numbers2 = of(5, 6, 7)
    const mergeNumbers = merge(numbers1, numbers2)

    mergeNumbers.subscribe(res => console.log('My merge numbers', res))

    // Concat -> Operador
    // Permite combinar cualquier número de observables en uno solo
    // Se ejecuta secuencialmente, espera a que se completen los observables y los combina
    const concatNumbers = concat(numbers1, numbers2)

    concatNumbers.subscribe(res => console.log('My concat numbers', res))

    // Delay -> Operador
    const myDelayNumbers = of(1, 2, 3, 4)

    myDelayNumbers.pipe(
      // Delay de 5 segundos
      delay(5000),
      tap(num => console.log(num))
    )
    .subscribe()


    // Single -> Operador
    // Permite tomar solo un valor que cumpla con una condición específica, y luego completar
    // el observable.
    const mySingleArray$ = of(1, 2, 3, 4, 5, 6)  
    mySingleArray$.pipe(
      single((number: number) => number == 3),
      tap(res => console.log('My single',res))
    )
    .subscribe()

    // StartWith -> Operador
    // Es útil para establecer un valor inicial o para proporcionar un contexto para los valores
    // emitidos posteriormente
    const myStartWithArray$ = of(1, 2, 3, 4, 5, 6)
    myStartWithArray$.pipe(
      startWith(0),
      tap(res => console.log('my startWith',res))
    )
    .subscribe()
  }

  /*
  TakeUntil -> Operador
      
  Permite tomar un número especifico de valores emitidos por un observable,
  o tomar valores hasta que se emita un valor específico de otro observable.
      
  Es util para cancelar una suscripción a un observable cuando ocurre un evento
  específico, o para limitar la cantidad de valores que se procesan.
  */
  private stop$ = new Subject<number>()
  counter!: number

  start(){
    interval(1000).pipe(
      takeUntil(this.stop$),
      tap((val: number) => this.counter = val)
    )
    .subscribe()
  }

  stop(){
    this.stop$.next(0)
  }
}

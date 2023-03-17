import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Observable, Subject, switchMap } from 'rxjs';
import { Character, RickMortyDataService } from '../error-handling-rxjs/service/rick-morty-data.service';
import { customOperator } from './custom-operator';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm$ = new Subject<string>()
  characters$!: Observable<Character[]>

  constructor(private filterService: RickMortyDataService){
    this.characters$ = this.searchTerm$.pipe(
      //filter((term: string) => term.length >= 3),
      // debounceTime(400),
      // Si el nuevo valor emitido es igual al anterior, devuelve la respuesta del valor anterior
      // distinctUntilChanged(),

      // Usando operador custom
      customOperator(
        (term: string) => term.length >=3, 
        400, 
        (prev, curr) => prev == curr
      ),
      switchMap((term: string) => this.filterService.filterCharacter(term))
    ) 
  }

  search(event: Event) {
    const element = event.currentTarget as HTMLInputElement
    this.searchTerm$.next(element.value)
  } 
}

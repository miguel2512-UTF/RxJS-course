import { Component, OnInit } from '@angular/core';
import { Observable, share } from 'rxjs';
import { Character, RickMortyDataService } from '../error-handling-rxjs/service/rick-morty-data.service';

@Component({
  selector: 'app-caching',
  templateUrl: './caching.component.html',
  styleUrls: ['./caching.component.scss']
})
export class CachingComponent implements OnInit {
  // Mejorando el rendimiento de la aplicación con caching de datos
  data$!: Observable<Character[]>

  constructor(private dataService: RickMortyDataService){}

  ngOnInit(): void {
      this.data$ = this.dataService.getData().pipe(
        // Comparte la misma información con todos los suscriptores
        share()
      )
  }
}

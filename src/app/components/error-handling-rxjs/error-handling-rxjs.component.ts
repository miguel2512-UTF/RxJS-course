import { Component, inject, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { RickMortyDataService } from './service/rick-morty-data.service';

@Component({
  selector: 'app-error-handling-rxjs',
  templateUrl: './error-handling-rxjs.component.html',
  styleUrls: []
})

export class ErrorHandlingRxjsComponent implements OnInit {
  private rickMortyService = inject(RickMortyDataService)

  ngOnInit(): void {
      this.rickMortyService.getData().pipe(
        tap(res => console.log('Res Tap',res))
      )
      .subscribe({
        error: (error) => console.log('Error Subscribe', error)         
      })
  }
}

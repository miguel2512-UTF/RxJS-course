import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-report1',
  templateUrl: './report1.component.html',
  styleUrls: ['./report1.component.scss']
})
export class Report1Component implements OnInit {
  @Input() mensaje!: number

  value$: any

  constructor(private stateService: StateService){}

  ngOnInit(): void {
    // Nos suscribimos al observable para receibir el valor o la emisión
    // que hacemos en nuestra función filter() que se encuentra en el componente principal
    this.value$ = this.stateService.filters$.pipe(
      // Transformamos la data que recibimos solamente en este componente
      // Tip: Usar lo menos posible el tipo any
      map((res:any) => ({
        age: Number(res?.age) + 5 || null,
        originalAge: Number(res?.age) || null
      }))
    )
    // Cuando creamos un observable custom, debemos desuscribirnos manualmente
    // Ya sea usando .unsuscribe() u otro método
    // Razón: Si tenemos varios escuchadores/observadores suscritos a un observable y no nos 
    // desuscribimos. Al dirigirnos a otra página, estos seguiran suscritos usando recursos de memoria.
    //.subscribe(res => console.log('Filtros primer reporte:', res))
  }
}

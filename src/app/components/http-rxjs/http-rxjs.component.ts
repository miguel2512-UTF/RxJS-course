import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-http-rxjs',
  templateUrl: './http-rxjs.component.html',
  styleUrls: ['./http-rxjs.component.scss']
})
export class HttpRxjsComponent implements OnInit {
  // Cuando nos suscribimos a un observable que viene de una petición http
  // Angular automaticamente al recibir la información de este se desuscribe
  apiService = inject(ApiService)

  ngOnInit(): void {
      this.obtenerData()
      this.ObtenerEspecie()
  }

  obtenerData(){
    // Obtenemos la data modificada
    this.apiService.getData().subscribe(data => console.log(data))
  }

  // Obtenemos la data del personaje y su especie
  ObtenerEspecie(){
    this.apiService.getAllData().subscribe(data => console.log(data))
  }
}

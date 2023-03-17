import { Component } from '@angular/core';

@Component({
  selector: 'app-http-rxjs',
  templateUrl: './http-rxjs.component.html',
  styleUrls: ['./http-rxjs.component.scss']
})
export class HttpRxjsComponent {
  // Cuando nos suscribimos a un observable que viene de una petición http
  // Angular automaticamente al recibir la información de este se desuscribe
}

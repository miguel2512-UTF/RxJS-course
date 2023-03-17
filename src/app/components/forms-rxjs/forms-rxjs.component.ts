import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-forms-rxjs',
  templateUrl: './forms-rxjs.component.html',
  styleUrls: ['./forms-rxjs.component.scss']
})
export class FormsRxjsComponent {
  // Rxjs Aplicado En Formularios
  form!: FormGroup

  constructor(
    private stateService: StateService
  ){
    this.form = new FormGroup({
      name: new FormControl(''),
      age: new FormControl('')
    })
  }

  ngOnInit(){
    // Con debounceTime recibe un valor y espera un segundo para recibir otro valor
    // del observable
    this.form.get('name')?.valueChanges.pipe(
      // Tiempo de espera entre cada valor
      // debounceTime(tiempo en milisegundos)
      debounceTime(1000)
    )
    .subscribe(res => {
      console.log('value', res)
      // this.filter()
    }
    )
  }

  // Compartimos la información de nuestro Formulario con otros componentes
  filter(){
    // Siguiente valor que vamos a emitir
    this.stateService.filtersSource.next(this.form.value)
  }
}

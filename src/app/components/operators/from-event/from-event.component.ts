import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-from-event',
  template: `<button #myButton>Click me</button>`,
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit {
  @ViewChild('myButton', {static: true}) myButton!: ElementRef

  ngOnInit(): void {
    const document$ = fromEvent(this.myButton.nativeElement, 'click')
    document$.pipe(
      tap(res => console.log(res))
    )
    .subscribe()
  }
}

import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-hot',
  template: `
    <button (click)="start()">Start</button>
    <button (click)="stop()">Stop</button>
    <p>{{ counter }}</p>
  `,
  styleUrls: []
})
export class HotComponent implements OnInit {
  // Observable Caliente
  // Son aquellos que comienzan a emitir datos independientemente de si alguien se ha suscrito
  // a ellos o no.
  counter:number = 0
  private intervalSubscription!: Subscription

  ngOnInit(): void {
    this.start()
  }

  start() {
    this.intervalSubscription = interval(1000).subscribe(value => this.counter = value)
  }

  stop() {
    this.intervalSubscription.unsubscribe()
  }
}

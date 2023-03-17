import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

@Component({
  selector: 'app-cold',
  // Mediante el pipe Async nos suscribimos al observable para obtener la data.
  template: `<h1 *ngIf="data$ | async as myData">{{ myData.title }}</h1>`,
  styleUrls: []
})
export class ColdComponent implements OnInit {
  // Observable frío
  // Son aquellos que no comienzan a emitir datos hasta que alguien se suscriba a ellos.
  data$!: Observable<Post>

  constructor(private http: HttpClient){}

  ngOnInit(): void {
      this.data$ = this.http.get<Post>(`http://jsonplaceholder.typicode.com/posts/1`)
  }
}

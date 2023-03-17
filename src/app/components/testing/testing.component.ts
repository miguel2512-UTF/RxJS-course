import { Component, OnInit } from '@angular/core';
import { Observable, of, from, BehaviorSubject, Subject } from 'rxjs';
import { Anime } from 'src/app/interfaces/anime.interface';
import { AnimeService } from 'src/app/services/anime.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit{
  private subjectBehavior: BehaviorSubject<any> = new BehaviorSubject(5)
  private subjectSub: Subject<any> = new Subject()

  // Inyección del servicio
  constructor(private animeService: AnimeService, private apiService: ApiService){}

  ngOnInit(): void{
    // Subject
    this.subjectSub.subscribe(data => {
      console.log('Subject sub 1', data);
    })

    this.subjectSub.next(1)
    this.subjectSub.next(2);

    this.subjectSub.subscribe(data => {
        console.log('Subject sub 2:', data);
    });

    this.subjectSub.next(3);

    // Behavior Subject
    this.subjectBehavior.subscribe(data=>{
      console.log('Behavior sub 1', data);
    })

    this.subjectBehavior.next(1)
    this.subjectBehavior.next(2);

    this.subjectBehavior.subscribe(data => {
        console.log('Behavior sub 2:', data);
    });

    this.subjectBehavior.next(3);

    this.ObtenerAnimes()
    this.ObtenerData()
  }

  animes!: Anime[]

  // Listar Animes
  private ObtenerAnimes(){
    this.animeService.ObtenerAnimes().subscribe(
      data => this.animes = data
    )
  } 
  
  // Obtener Data modificada
  private ObtenerData(){
    this.apiService.getAllData().subscribe(
      data => console.log(data)
    )
  }
}

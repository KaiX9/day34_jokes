import { Component, inject } from '@angular/core';
import { JokeService } from './joke.service';
import { ApiResponse } from './models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  jokeSvc = inject(JokeService)

  resp$!: Observable<ApiResponse>
  prom$!: Promise<ApiResponse>
  countO: number = 0
  countP: number = 0

  getJokeAsObservable() {
    this.resp$ = this.jokeSvc.getJokeAsObservable()
    this.countO ++
  }

  getJokeAsPromise() {
    this.prom$ = this.jokeSvc.getJokeAsPromise()
    this.countP ++
  }

}

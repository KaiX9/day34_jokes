import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models';
import { JokeService } from '../joke.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jokeobs',
  templateUrl: './jokeobs.component.html',
  styleUrls: ['./jokeobs.component.css']
})
export class JokeobsComponent implements OnInit {

  resp$!: Observable<ApiResponse>
  jSvc = inject(JokeService)

  ngOnInit(): void {
    this.resp$ = this.jSvc.getJokeAsObservable();
  }  

}

import { Component, OnInit, inject } from '@angular/core';
import { ApiResponse } from '../models';
import { JokeService } from '../joke.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jokepromise',
  templateUrl: './jokepromise.component.html',
  styleUrls: ['./jokepromise.component.css']
})
export class JokepromiseComponent implements OnInit {

  prom$!: Promise<ApiResponse>
  jSvc = inject(JokeService)

  ngOnInit(): void {
    this.prom$ = this.jSvc.getJokeAsPromise();
  } 

}

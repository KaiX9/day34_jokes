import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  router = inject(Router)

  getJokeAsObservable() {
    this.router.navigate([ '/obs' ]);
  }

  getJokeAsPromise() {
    this.router.navigate([ '/promise' ]);
  }

}

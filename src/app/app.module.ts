import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JokeService } from './joke.service';
import { JokeobsComponent } from './components/jokeobs.component';
import { JokepromiseComponent } from './components/jokepromise.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'obs', component: JokeobsComponent },
  { path: 'promise', component: JokepromiseComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    JokeobsComponent,
    JokepromiseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

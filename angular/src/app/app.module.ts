import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Bai3Component } from './bai3/bai3.component';
import { PetComponent } from './pet/pet.component';
import { ProductComponent } from './product/product.component';
import { PipeComponent } from './pipe/pipe.component';
import { ArticleComponent } from './article/article.component';
import { NameCardComponent } from './name-card/name-card.component';
import { OutputComponent } from './output/output.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { TodoComponent } from './todo/todo.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Bai3Component,
    PetComponent,
    ProductComponent,
    PipeComponent,
    ArticleComponent,
    NameCardComponent,
    OutputComponent,
    ErrorComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountdownTimerComponent,
    TodoComponent,
    RegisterFormComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    // RouterModule.forRoot([
    //   {path: '', component: AppComponent},
    //   {path: '/home', component: HomeComponent},
    //   {path: '/bai3', component: Bai3Component},
    //   {path: '/pet', component: PetComponent},
    //   {path: '/product', component: ProductComponent},
    //   {path: '/pipe', component: PipeComponent},
    //   {path: '/Article', component: ArticleComponent},
    //   {path: '/NameCard', component: NameCardComponent},
    //   {path: '/Output', component: OutputComponent},
    //   {path: '**', component: ErrorComponent}
    // ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// app.module.ts
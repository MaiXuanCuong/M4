import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { Bai3Component } from './bai3/bai3.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { NameCardComponent } from './name-card/name-card.component';
import { OutputComponent } from './output/output.component';
import { PetComponent } from './pet/pet.component';
import { PipeComponent } from './pipe/pipe.component';
import { ProductComponent } from './product/product.component';
import { ProgressBarComponent} from './progress-bar/progress-bar.component';
import { RatingBarComponent} from './rating-bar/rating-bar.component';
import { CountdownTimerComponent} from './countdown-timer/countdown-timer.component';
import { TodoComponent} from './todo/todo.component';
import { RegisterFormComponent} from './register-form/register-form.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
const routes: Routes = [
      {path: 'home', component: HomeComponent},
      {path: 'bai3', component: Bai3Component},
      {path: 'pet', component: PetComponent},
      {path: 'product', component: ProductComponent},
      {path: 'pipe', component: PipeComponent},
      {path: 'Article', component: ArticleComponent},
      {path: 'NameCard', component: NameCardComponent},
      {path: 'Output', component: OutputComponent},
      {path: 'RatingBar', component: RatingBarComponent},
      {path: 'ProgressBar', component: ProgressBarComponent},
      {path: 'CountdownTimer', component: CountdownTimerComponent},
      {path: 'Todo', component: TodoComponent},
      {path: 'timelines',component: TimelinesComponent},
      {path: 'RegisterForm', component: RegisterFormComponent},
      {path: 'youtube',component: YoutubePlaylistComponent},
      {
        path: 'youtube',
        component: YoutubePlaylistComponent,
        children: [{
          path: ':id',
          component: YoutubePlayerComponent
        }]
      },
      {path: '**', component: ErrorComponent},
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

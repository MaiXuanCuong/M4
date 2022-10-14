import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Bai3Component } from './bai3/bai3.component';
import { PetComponent } from './pet/pet.component';
import { ProductComponent } from './product/product.component';
import { PipeComponent } from './pipe/pipe.component';
import { ArticleComponent } from './article/article.component';
import { NameCardComponent } from './name-card/name-card.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// app.module.ts
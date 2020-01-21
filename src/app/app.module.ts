import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ChangePostComponent } from './change-post/change-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowPostComponent,
    AddPostComponent,
    ChangePostComponent,
    DeletePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

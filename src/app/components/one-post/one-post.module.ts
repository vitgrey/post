import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OnePostRoutingModule } from './one-post-routing.module';
import { OnePostComponent } from './one-post.component';
import { ArticlesService } from 'src/app/services/articles.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OnePostRoutingModule
  ],
  declarations: [OnePostComponent],
  providers: [ArticlesService]
})

export class ArticleChangeModule { }

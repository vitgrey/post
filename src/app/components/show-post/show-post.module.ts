import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { ShowPostRoutingModule } from './show-post-routing.module'
import { ShowPostComponent } from './show-post.component'
import { ArticlesService } from 'src/app/services/articles.service'

@NgModule({
  imports: [
    CommonModule,
    ShowPostRoutingModule
  ],
  declarations: [ShowPostComponent],
  providers: [ArticlesService]
})

export class ArticleShowModule { }
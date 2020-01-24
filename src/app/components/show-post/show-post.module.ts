import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShowPostRoutingModule } from './show-post-routing.module';
import { ShowPostComponent } from './show-post.component';
import { ArticlesService } from 'src/app/services/articles.service';
import { SearchPipe } from './../../pipes/search.pipe';

@NgModule({
  imports: [
    CommonModule,
    ShowPostRoutingModule,
    FormsModule
  ],
  declarations: [
    ShowPostComponent,
    SearchPipe
  ],
  providers: [ArticlesService]
})

export class ArticleShowModule { }

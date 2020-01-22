import { Component, OnInit } from '@angular/core';
import { ArticlesModel } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.scss']
})
export class DeletePostComponent implements OnInit {
  public articles: ArticlesModel[] = []
  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.loadAllArticleList()
  }

  loadAllArticleList() {
    this.articles = this.articlesService.getAllArticles()
  }

  onClickArticleDelete(id) {
    this.articlesService.deleteArticleDetail(id);
    this.loadAllArticleList();
  }

}

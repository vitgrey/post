import { Component, OnInit } from '@angular/core';
import { ARTICLES } from './articles-data';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss']
})
export class ShowPostComponent implements OnInit {
  public articles = ARTICLES;
  constructor() { }

  ngOnInit() {
  }

}

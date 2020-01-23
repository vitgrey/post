import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'show-post',
    pathMatch: 'full'
  },
  {
    path: 'show-post',
    loadChildren: () => import('./components/show-post/show-post.module').then(mod => mod.ArticleShowModule)
  },
  {
    path: 'change-post',
    loadChildren: () => import('./components/change-post/change-post.module').then(mod => mod.ArticleChangeModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

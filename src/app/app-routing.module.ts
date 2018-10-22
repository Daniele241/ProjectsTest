import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {path: 'post', component: PostComponent},
  {path: 'post-list', component: PostListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

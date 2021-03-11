import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ErrorComponent } from './components/error/error.component';
import { ListPostComponent } from './components/list-post/list-post.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';

const routes: Routes = [
  {path: 'list', redirectTo: '/', pathMatch: 'full' },
  {path: '', component: ListPostComponent},
  {path: 'add',component: AddPostComponent },
  {path: 'update/:index',component: UpdatePostComponent }, 
  
  {path: '**',component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientPageComponent } from './client-page/client-page.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectPageComponent } from './project-page/project-page.component';

const routes: Routes = [
  {path:"", redirectTo:"create", pathMatch:"full"},
  {path:"create", component: NewProjectComponent},
  {path:"clients", component: ClientPageComponent},
  {path:"projects", component: ProjectPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

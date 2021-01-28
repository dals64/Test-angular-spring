import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import {NewProjectService} from './new-project.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ChartingComponent } from './charting/charting.component';
import { DeleteProjectComponent } from './delete-project/delete-project.component';

@NgModule({
  declarations: [
    AppComponent,
    NewProjectComponent,
    ClientPageComponent,
    ProjectPageComponent,
    EditProjectComponent,
    ChartingComponent,
    DeleteProjectComponent
  ],
  entryComponents:[
    EditProjectComponent,
    DeleteProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [NewProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }

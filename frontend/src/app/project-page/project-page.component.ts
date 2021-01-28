import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeleteProjectComponent } from '../delete-project/delete-project.component';
import { EditProjectComponent } from '../edit-project/edit-project.component';
import { NewProjectService } from '../new-project.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  public projectList;
  public items;
  public ids = [];

  public editData = {
    id:null,
    tache1: null,
    tache2: null,
    tache3: null,
    tache4: null,
    technique: null,
    performance: null,
    ergonomie: null,
    fonctionMetier: null,
    intuitivite: null,
    modif:null,
  }
  constructor(private http: HttpClient, public  dialog: MatDialog, private service: NewProjectService) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/findAllProjects').subscribe(
      data => {
        this.projectList = data
        this.items = data
      },
      error => console.log(error)
    )
  }

  expanded = false;
  showOptions(){
    var checkboxes = document.getElementById('options');
    if (!this.expanded) {
      checkboxes.style.display = "block";
      this.expanded = true
      
    } else {
      checkboxes.style.display = "none"
      this.expanded = false
    }
  }

  openDialog(project){
    this.editData.id = project.id
    this.editData.tache1 = project.tache1;
    this.editData.tache2 = project.tache2;
    this.editData.tache3 = project.tache3;
    this.editData.tache4 = project.tache4;
    this.editData.technique = project.technique;
    this.editData.performance = project.performance;
    this.editData.ergonomie = project.ergonomie;
    this.editData.fonctionMetier = project.fonctionMetier;
    this.editData.intuitivite = project.intuitivite;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    this.editData.modif = yyyy+'-'+mm+'-'+dd;

    console.log("la date: "+this.editData.modif)

    this.service.storeEdit(this.editData);
    
    this.dialog.open(EditProjectComponent);
  }

  openDeleteDialog(id){
    this.service.storeId(id);
    this.dialog.open(DeleteProjectComponent);
  }

  addToList(project){

    if (!this.ids.includes(project.id)) {
      this.ids.push(project.id)
    } else {
      const index = this.ids.indexOf(project.id)
      this.ids.splice(index,1)
    }
    console.log(this.ids)
    this.http.post('http://localhost:8080/findProjects', this.ids).subscribe(
      data => {
        this.projectList = data
      },
      error => console.log(error)
    )
    
  }

  all(){
    this.http.get('http://localhost:8080/findAllProjects').subscribe(
      data => {
        this.projectList = data
        this.items = data
      },
      error => console.log(error)
    )

    this.ids = []
  }


}

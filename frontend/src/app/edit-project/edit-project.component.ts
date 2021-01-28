import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewProjectService } from '../new-project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  constructor(private service: NewProjectService, private http : HttpClient, private router: Router) { }

  public error = false;
  public isOk = false;

  public editData = {
    id: null,
    tache1: null,
    tache2: null,
    tache3: null,
    tache4: null,
    technique: null,
    performance: null,
    ergonomie: null,
    fonctionMetier: null,
    intuitivite: null,
    modif: null,
  }

  ngOnInit(): void {
    this.editData = this.service.getEdit();
    console.log(this.editData.id)
  }

  edit(){
    this.validation();
    if (this.error===false) {
      this.http.post('http://localhost:8080/update', this.editData).subscribe(
        data => { 
          this.router.navigateByUrl('/projects')
          alert(data)
        },
        error => { alert(error.error.text) }
      );
    }else{
      this.isOk = this.error
    }
  }

  validationItem(liste) {
    let valid = false
    let entiers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let i = 0; i < liste.length; i++) {
      let element = liste[i];
      if (!entiers.includes(element)) {
        valid = true
        return valid
      } else {
        valid = false
      }
    }
    return valid
  }

  validation(){
    this.error = this.validationItem(this.editData.tache1)
    this.error = this.error || this.validationItem(this.editData.tache2)
    this.error = this.error || this.validationItem(this.editData.tache3)
    this.error = this.error || this.validationItem(this.editData.tache4)
    this.error = this.error ||this.validationItem(this.editData.performance)
    this.error = this.error || this.validationItem(this.editData.ergonomie)
    this.error = this.error || this.validationItem(this.editData.fonctionMetier)
    this.error = this.error || this.validationItem(this.editData.intuitivite)
    this.error = this.error || this.validationItem(this.editData.technique)
  }

}

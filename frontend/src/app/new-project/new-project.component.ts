import { Component, OnInit, setTestabilityGetter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public error = false;
  public isValid = false;
  public isOk = false;

  public formData = {
    client : null,
    projet : null,
    intervenant : null,
    echeance : null,
    charge : null,
    dateDebut : null,
    activite : null,
    technologie : null,
  }

  ngOnInit(): void {
  }

  submit(){

    if (this.formData.client===null || this.formData.client === "") {
      this.isValid = false
    } else if (this.formData.projet === null || this.formData.projet === ""){
      this.isValid = false
    } else if (this.formData.intervenant === null || this.formData.intervenant === "") {
      this.isValid = false
    } else if (this.formData.echeance === null || this.formData.echeance === "") {
      this.isValid = false
    } else if (this.formData.dateDebut === null || this.formData.dateDebut === "") {
      this.isValid = false
    } else if (this.formData.activite === null || this.formData.activite === "") {
      this.isValid = false
    } else if (this.formData.technologie === null || this.formData.technologie === "") {
      this.isValid = false
    } else if (this.formData.charge === null || this.formData.charge === "") {
      this.isValid = false
    }else{
      this.isValid = true;
    }

    this.isOk = !this.isValid

    if ((this.isValid === true) && (this.error===false)) {
      this.http.post('http://localhost:8080/addProject', this.formData).subscribe(
        data => { 
          alert(data)
          this.formData = {
            client: null,
            projet: null,
            intervenant: null,
            echeance: null,
            charge: null,
            dateDebut: null,
            activite: null,
            technologie: null,
          }
         },
        error => {
          alert(error.error.text)
          this.formData = {
            client: null,
            projet: null,
            intervenant: null,
            echeance: null,
            charge: null,
            dateDebut: null,
            activite: null,
            technologie: null,
          }
        }
      );
    }
  }

  validation(){
    let entiers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let i = 0; i < this.formData.charge.length; i++) {
      let element = this.formData.charge[i];
      if (!entiers.includes(element)) {
        this.error = true
      }else{
        this.error = false
      }
      
    }
  }
}


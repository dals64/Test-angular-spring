import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {

  public projectList;

  public editData = {
    tache1: null,
    tache2: null,
    tache3: null,
    tache4: null,
    technique: null,
    performance: null,
    ergonomie: null,
    fonctionMetier: null,
    intuitivite: null,
  }

  constructor(private http: HttpClient) { }

  public searchData = '';
  public items = [];

  ngOnInit(): void {
    this.http.get('http://localhost:8080/findAllProjects').subscribe(
      data => {
        console.log(data)
        this.projectList = data
        this.projectList.forEach(element => {
          if (!this.items.includes(element.client)){
            this.items.push(element.client)
          }
        });
      },
      error => console.log(error)
    )
  }

  onSubmit(){
    console.log(this.searchData)
    if(this.searchData === null || this.searchData === ""){
      this.ngOnInit()
    }else{
      this.http.post('http://localhost:8080/findByName/', this.searchData).subscribe(
        data => {
          this.projectList = data
        },
        error => console.log(error)
      );
    } 
  }

}

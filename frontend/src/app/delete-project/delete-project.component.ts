import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewProjectService } from '../new-project.service';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css']
})
export class DeleteProjectComponent implements OnInit {

  constructor(private service: NewProjectService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  delete(){
    let id = this.service.getId();
    this.http.delete('http://localhost:8080/delete/'+id).subscribe(
      data => { alert(data) },
      error => {alert(error.error.text)}
    )
  }

}

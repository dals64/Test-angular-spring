import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';

@Component({
  selector: 'app-charting',
  templateUrl: './charting.component.html',
  styleUrls: ['./charting.component.css']
})
export class ChartingComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public projectList;
  public data='';

  ngOnInit(): void {
    this.http.get('http://localhost:8080/findAllProjects').subscribe(
      data => {
        this.projectList = data
      },
      error => console.log(error)
    )
  }

  onChart(){

    let projet;

    this.http.get('http://localhost:8080/find/'+this.data).subscribe(
      data => {
        projet = data
        var myRadarChart = new Chart('myChart1', {
          type: 'doughnut',
          data: {
            labels: ['tache1', 'tache2', 'tache3', 'tache4'],
            datasets: [{
              label: 'Avancement du projet',
              backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 0, 132)', 'rgb(255, 99, 0)', 'rgb(0, 99, 132)'],
              borderColor: 'rgb(255, 99, 132)',
              data: [projet.tache1, projet.tache2, projet.tache3, projet.tache4]
            }]
          },
          options: {
            fill:false
          }
        });

        var myRadarChart = new Chart('myChart2', {
          type: 'radar',
          data: {
            labels: ['performance', 'Ergonomie', 'fonction Metier', 'technique', 'intuitivite'],
            datasets: [{
              label: 'Qualité',
              backgroundColor: ['rgb(252, 252, 252)'],
              borderColor: 'rgb(255, 99, 132)',
              data: [projet.performance, projet.ergonomie, projet.fonctionMetier, projet.technique, projet.intuitivite]
            }]
          },
          options: {
          }
        });


      },
      error => console.log(error)
    )

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
data:any;
data1:any;
data2:any;

  constructor() { 
    this.data2 = {
            labels: ['Facility1', 'Facility2', 'Facility3', 'Facility4', 'Facility5', 'Facility6', 'Facility6'],
            datasets: [
                {
                    label: 'Billed Cases',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: '#546582',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#639a66',
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: 'Pending Cases',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: '#a56968',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };
  }

  ngOnInit() {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Billed Cases',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#639a66'
                },
                {
                    label: 'Unbilled Cases',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#565656'
                }

            ]
        }

         this.data1 = {
            labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017'],
            datasets: [
                {
                    label: 'Billed Cases',
                    backgroundColor: '#a56968',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Pending Cases',
                    backgroundColor: '#639a66',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                },
                {
                    label: 'In Coding',
                    backgroundColor: '#546582',
                    borderColor: '#7CB342',
                    data: [10, 20, 5, 15, 50, 12, 56]
                }
            ]
        }
       }

     selectData(event) {
    //  this.messageService.add({severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
     }
  }



  
import { Component, OnInit } from '@angular/core';
import {DataExchangeService} from '../services/data-exchange.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
data:any;
data1:any;
data2:any;
showDashboard:boolean=true;
DashboardShow: boolean=true;

  constructor(private DEService: DataExchangeService) { 
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
                    data: [5, 10, 2, 10, 3, 4, 6]
                },
                {
                    label: 'Unbilled Cases',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: '#a56968',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: [1, 3, 6, 5, 3, 10, 9]
                }
            ]
        };
        this.DEService.dashBoardMsg.subscribe(message => {
      //debugger;
            this.DashboardShow = message;
      
          })
    }

  ngOnInit() {
        this.data = {
            labels: ['Week1', 'Week2', 'Week3', 'Week4'],
            datasets: [
                {
                    label: 'Billed Cases',
                    data: [15, 14, 2, 3, 7, 0, 10],
                    fill: false,
                    borderColor: '#639a66'
                },
                {
                    label: 'Unbilled Cases',
                    data: [5, 6, 8, 7, 0, 10, 0],
                    fill: false,
                    borderColor: '#565656'
                }

            ]
        }

         this.data1 = {
            labels: ["Mon","Tues","Wed","Thurs","Fri","Sat","Sun"],
            datasets: [
                {
                    label: 'Received',
                    backgroundColor: '#a56968',
                    borderColor: '#1E88E5',
                    data: [10,8,12,5,7,10,8]
                },
                {
                    label: 'Missing Documentation',
                    backgroundColor: '#0f0e0e',
                    borderColor: '#607d8b',
                    data: [2,3,4,1,3,2,1]
                },
                {
                    label: 'Coding Ready',
                    backgroundColor: '#639a66',
                    borderColor: '#7CB342',
                    data: [3,4,5,2,4,4,5]
                },
                {
                    label: 'Charges Entered',
                    backgroundColor: '#546582',
                    borderColor: '#7CB342',
                    data: [1,3,4,3,6,4,3]
                },
                {
                    label: 'Claim Billed',
                    backgroundColor: '#dfc987',
                    borderColor: '#7CB342',
                    data: [5,3,4,4,6,3,1]
                },
                {
                    label: 'Complete',
                    backgroundColor: '#94ccbc',
                    borderColor: '#7CB342',
                    data: [5,8,2,5,7,6,5]
                }
            ]
        }
       }

     selectData(event) {
    //  this.messageService.add({severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
     }
     redirectDashboard(value) {
    
        this.DashboardShow = value;
      }
  }



  
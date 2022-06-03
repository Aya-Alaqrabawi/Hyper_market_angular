import { Component, OnInit } from '@angular/core';

import {Chart} from 'node_modules/chart.js'
import { UserregisService } from 'src/app/service/userregis.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
    
    Num:number=0;
  constructor(public userRegisService:UserregisService,) { 
    
  }
  
  ngOnInit(): void {
    
    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['Market Staff','Salesperson','Marketing Team', 'IT Department', 'Managers'],
          datasets: [{
              label: '# of Workers',
              data: [60,45,20,20,5,5],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)' 
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  const myChart2 = new Chart("myChart2", {
    type: 'pie',
    data: {
        labels: ['Approximate sales of this month','Approximate sales of this year','Expected sales next month','Expected sales next month year'],
        datasets: [{
            label: 'Sales Chart',
            data: [30000,40000,45000,185000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(150, 114, 65, 0.5)'
            ],
            
        }]
    }, 
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
   
  this.userRegisService.getUserRegis();
  this.userRegisService.getAnuualCount();
  this.userRegisService.getAnuualSum();
  this.userRegisService.getMonthlySum();
  }

}

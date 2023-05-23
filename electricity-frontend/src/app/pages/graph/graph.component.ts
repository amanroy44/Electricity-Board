import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ApplicantServiceService } from 'src/app/services/applicant-service.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit{

  constructor(private service: ApplicantServiceService)   {}

  title = 'chart';
  status: string="";
  customer: any =[];
  tempArr = new Array(13);
  valueMap = new Map<any,any>();
 
  myChart = new Chart("myChart", {
    type: 'bar',
    data: {
      labels: [],
      datasets: [{
        label: '# of Votes',
        data: [],

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
  
 


  ngOnInit(): void {
  }

  onSelected(value:string): void{
    this.valueMap.clear();
    this.tempArr = new Array(13);
    this.myChart.destroy();
    this.status = value;
    this.getBarGraph();
  }

  getBarGraph(){
    Chart.register(...registerables);
    this.service.viewAllApplicant().subscribe((data)=> {
      this.customer = data;
      for(let i=0;i<this.customer.length;i++){
        if(this.customer[i].status == this.status){
          let key = Number(this.customer[i].date_of_application.substr(5,2));
          if(!this.valueMap.has(key)){
           this.valueMap.set(key,1);
          }
          else{
            this.valueMap.set(key, this.valueMap.get(key)+1);
          }
        }
      }
      for(let key of Array.from(this.valueMap.keys())){
        this.tempArr[key] = this.valueMap.get(key);
      }
      this.myChart = new Chart("myChart", {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [{
            label: '# of Votes',
            data: [this.tempArr[1], this.tempArr[2], this.tempArr[3], this.tempArr[4], this.tempArr[5], this.tempArr[6], this.tempArr[7], this.tempArr[8], this.tempArr[9], this.tempArr[10], this.tempArr[11], this.tempArr[12]],
  
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
    },
    (error)=> {
      console.log(error);
    })
  }
  

}

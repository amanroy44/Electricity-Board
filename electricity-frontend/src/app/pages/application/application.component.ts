import { Component , OnInit} from '@angular/core';
import { ApplicantServiceService } from 'src/app/services/applicant-service.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
 
})
export class ApplicationComponent {

  customer: any=[];
  flag:boolean = false;
  
    
  constructor(private service: ApplicantServiceService) {
    
  }

  
  
  ngOnInit(): void{
    this.getData();
  }


  getData(){
    this.service.viewAllApplicant().subscribe((data:any) => {
      this.customer = data;
    },
    (error:any) => {
      console.log("error");
    });
  }
  
  disable(){
    this.flag=true
  }

  

}

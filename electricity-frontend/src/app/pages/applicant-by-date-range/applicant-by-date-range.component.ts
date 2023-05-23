import { Component } from '@angular/core';
import { ApplicantServiceService } from 'src/app/services/applicant-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-applicant-by-date-range',
  templateUrl: './applicant-by-date-range.component.html',
  styleUrls: ['./applicant-by-date-range.component.css']
})
export class ApplicantByDateRangeComponent {

  constructor(private service: ApplicantServiceService) {}

  startDate: any="";
  endDate: any="";
  result: any =[];
  flag:boolean = false;

  getDate(){
    this.service.getApplicantByDate(this.startDate,this.endDate).subscribe((data)=> {
      this.result=data;
    },
    (error) => {
      Swal.fire("Error!!", "error in fetching data", "error");
      return;
    }
    )
    this.flag=true;
  }

}

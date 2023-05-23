import { NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { ApplicantServiceService } from 'src/app/services/applicant-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-single-applicant',
  templateUrl: './single-applicant.component.html',
  styleUrls: ['./single-applicant.component.css']
})
export class SingleApplicantComponent {

  constructor(private service: ApplicantServiceService) { }

  id:any = "";
  customer:any ={};
  flag:boolean=false;

  

  public submit(){
    this.flag=true;
    this.service.getApplicant(this.id).subscribe((data:any)=>{
      this.customer=data;
    },
    (error)=>{
      Swal.fire("Error!!", "Incorredt Id", 'error')
    }
    )
  }

  

}

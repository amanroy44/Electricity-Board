import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { ApplicantServiceService } from 'src/app/services/applicant-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  updatedLoad:any="";

  editApplication = new FormGroup({
    applicantName: new FormControl(''),
    gender: new FormControl(''),
    district: new FormControl(''),
    state: new FormControl(''),
    pincode: new FormControl(''),
    ownership: new FormControl(''),
    govt_id: new FormControl(''),
    id_number: new FormControl(''),
    category: new FormControl(''),
    load: new FormControl(''),
    date_of_application: new FormControl(''),
    date_of_approval: new FormControl(''),
    modified_date: new FormControl(''),
    status: new FormControl(''),
    reviewer_id: new FormControl(''),
    reviewer_name: new FormControl(''),
    reviewer_comments: new FormControl(''),
  })

  constructor(private router: ActivatedRoute, private service:ApplicantServiceService) {}

  ngOnInit(): void {

    this.service.getApplicant(this.router.snapshot.params['id']).subscribe((data:any) => {
      this.editApplication = new FormGroup({
        applicantName: new FormControl(data['applicantName']),
        gender: new FormControl(data['gender']),
        district: new FormControl(data['district']),
        state: new FormControl(data['state']),
        pincode: new FormControl(data['pincode']),
        ownership: new FormControl(data['ownership']),
        govt_id: new FormControl(data['govt_id']),
        id_number: new FormControl(data['id_number']),
        category: new FormControl(data['category']),
        load: new FormControl(data['load']),
        date_of_application: new FormControl(data['date_of_application']),
        date_of_approval: new FormControl(data['date_of_approval']),
        modified_date: new FormControl(data['modified_date']),
        status: new FormControl(data['status']),
        reviewer_id: new FormControl(data['reviewer_id']),
        reviewer_name: new FormControl(data['reviewer_name']),
        reviewer_comments: new FormControl(data['reviewer_comments']),
      })
    },
    (error) => {
      console.log(error);
    }
    )
  }

  collection(){
    if(this.updatedLoad>200){
      Swal.fire("Error!!", "Maximum load allowed is 200 KV", 'error');
      return;
    }
    this.service.updateApplicant(this.router.snapshot.params['id'], this.editApplication.value).subscribe((data:any)=>{
      Swal.fire("Done!", "Applicant Successfully Updated", 'success')
    },
    (error) => {
      Swal.fire("Error!!", "Error Updating", 'error')
    }
    )
  }
  

}

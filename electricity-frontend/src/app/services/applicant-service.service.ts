import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicantServiceService {

  constructor(private http: HttpClient) { }

  //load applicant by id
  public getApplicant(id:any) : Observable<any>{
    return this.http.get(`http://localhost:8080/customer/search/`+id)
  }
  
  //load all applicants
  public viewAllApplicant() : Observable<any>{
    return this.http.get(`http://localhost:8080/customer/show-customer`)
  }

  //update an applicant
  public updateApplicant(id: any, customerDTO: any): Observable<any>{
    return this.http.put(`http://localhost:8080/customer/update/`+id, customerDTO)
  }


  //get data within date range
  public getApplicantByDate(date1:any,date2:any): Observable<any>{
    return this.http.get(`http://localhost:8080/customer/search/`+date1+`/`+date2)
  }
}

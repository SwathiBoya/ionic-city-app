import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  
  
  customers:any = [];
  private customerUrl = 'http://192.168.0.98:3000/api/customers';
  getDBCustomers (){
    this.http.get<[]>(this.customerUrl).subscribe((result)=>{console.log(JSON.stringify(result))});
  }
  getRemoteCustomers(): Observable<[]>{
  	return this.http.get<[]>(this.customerUrl); 		
  }
  
  addRemoteCustomer(customer):Observable<any>{
  	return this.http.post(this.customerUrl,customer);
 }

 getRemoteCustomerPassword(phone):Observable<any>{
  return this.http.get<[]>(this.customerUrl+'/'+phone);     

}
  
}

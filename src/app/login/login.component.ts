import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private customerService: CustomerService) { }
  customers=[];
  customer = {
    name:'',
    email:'',
    password:'',
    phone:'',
    address:''
  }
  ngOnInit() {
    this.customerService.getRemoteCustomers().subscribe((result) =>(this.customers =result));
  }
  onLogin(customer){
    for(var i=0;i<this.customers.length;i++){
      if((customer.email==this.customers[i].email)&&(customer.password == this.customers[i].password)){
        console.log("Sucess");
        this.router.navigate(['/movie-list']);
      }
      else{
        console.log("Failed");
      }
    }
  }
}

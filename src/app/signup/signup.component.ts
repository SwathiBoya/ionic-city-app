import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  constructor(private router: Router,private customerService : CustomerService) { }
  customer:any={
    name:"",
    email:"",
    password:"",
    confirm_password:"",
    phone:"",
    address:""
  };
  ngOnInit() {}
  onRegister(customer){
    this.customerService.addRemoteCustomer(this.customer).subscribe(()=>{this.router.navigate(['/login']);});
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.scss'],
})
export class ForgotPwdComponent implements OnInit {
  customer={phone:''};
  password:any={};
  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit() {}
  reset(){
    this.customerService.getRemoteCustomerPassword(this.customer.phone).subscribe((customer)=>{
      this.password=customer;  
      console.log(customer);
      alert('This is Your PassWord:  '+ this.password[0].password);
      this.router.navigate(['/login']);
    });
 }
}

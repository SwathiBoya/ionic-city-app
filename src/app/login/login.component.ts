import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public alertController: AlertController, private router: Router, private customerService: CustomerService) { }
  customers=[];
  customer = {
    name:'',
    email:'',
    password:'',
    phone:'',
    address:''
  }

  email ="";
  password = "";
  ngOnInit() {
    this.customerService.getRemoteCustomers().subscribe((result) => (this.customers = result));
  }
  onLogin(customer) {
    for (var i = 0; i < this.customers.length; i++) {
      if ((customer.email == this.customers[i].email) && (customer.password == this.customers[i].password)) {
        console.log(customer);
        this.router.navigate(['/tabs/tab1']);
        if (localStorage.getItem('user') == null) {
          localStorage.setItem('user', JSON.stringify(customer));
        }
      }
      else {
        console.log('failed to login');
        // this.loginAlert();
        // this.email='email';
        // this.password='password';
      }
    }
  }

  async loginAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Authentication failed',
      message: 'Please enter Email/Password',
      buttons: ['OK']
    });

    await alert.present();
  }
}


import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { TransactionComponent } from './transaction/transaction.component';
import { OffersComponent } from './offers/offers.component';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';

const routes: Routes = [
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'signup',
      component:SignupComponent
    },
    {
      path:'forgot-pwd',
      component:ForgotPwdComponent
    },
    { 
      path: '', 
      redirectTo: 'login', 
      pathMatch: 'full' 
    },
    {
      path:'booking/:id',
      component:BookingComponent
    },
    {
      path:'payment',
      component:PaymentComponent
    },
    {
      path:'transaction',
      component:TransactionComponent
    },
    {
      path:'offers',
      component:OffersComponent
    },
    { 
      path: 'home', 
      loadChildren: './home/home.module#HomePageModule' 
    },
    { 
      path: 'bookinghistory', 
      component:BookinghistoryComponent
    },
    { 
      path: '', 
      loadChildren: './tabs/tabs.module#TabsPageModule' 
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientModule }    from '@angular/common/http';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { TransactionComponent } from './transaction/transaction.component';
import { FormsModule } from "@angular/forms";
import { OffersComponent } from './offers/offers.component';

@NgModule({
  declarations: [AppComponent,LoginComponent,SignupComponent,ForgotPwdComponent,MovieListComponent,BookingComponent,PaymentComponent,TransactionComponent,OffersComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';
@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.scss'],
})
export class BookinghistoryComponent implements OnInit {
  booking=[];
  res:any;
  constructor(private movieService: MovieService) { }
 
  ngOnInit() {
      this.movieService.getRemoteBooking().subscribe((result)=>{
        console.log(result)
        this.res=result;
        this.booking=this.res.result;
      });

      console.log(this.booking);
  }


}

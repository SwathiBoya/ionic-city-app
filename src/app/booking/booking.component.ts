import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {

  constructor(private movieService: MovieService, private router : Router) { }

  ngOnInit() {}
  
}

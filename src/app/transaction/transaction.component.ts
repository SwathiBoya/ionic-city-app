import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {

  constructor(private movieService: MovieService, private router : Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['payment']);
  }, 5000);  //5s
  }

}

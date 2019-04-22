import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  list:any = [];
  movie:any =[];
  constructor(private movieService: MovieService, private router : Router) { }

  ngOnInit() {
    this.movieService.getRemoteMovies().subscribe((result) => {this.list = result;});
  }
  onBook(m){
    this.router.navigate(['/booking/' +m.id]);
  }
  onOffers(){
    this.router.navigate(['/offers']);
  }
}

import { Component } from '@angular/core';

import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  list: any = [];
  movie: any = [];
  slideData: any = [];
  constructor(private movieService: MovieService, private router: Router) {
    this.slideData =
      [
        { image: "../../assets/slide1.jpg" },
        { image: "../../assets/slide2.jpg" },
        { image: "../../assets/slide3.jpg" }];
  }

  ngOnInit() {
    this.movieService.getRemoteMovies().subscribe((result) => { this.list = result; });
  }
  slidesDidLoad(myslides) {
    myslides.startAutoplay();
  }
  slidesDidLoad1(mslides) {
    mslides.startAutoplay();
  }
  onBook(m) {
    this.router.navigate(['/booking/' + m.id]);
  }
  onOffers() {
    this.router.navigate(['/offers']);
  }
}

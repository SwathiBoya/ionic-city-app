import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesUrl = 'http://192.168.0.98:3000/api/movies';
  private bookingUrl= 'http://192.168.0.98:3000/api/bookings';
  constructor(private http: HttpClient) { }
  getRemoteMovies(): Observable<[]>{
  	return this.http.get<[]>(this.moviesUrl); 		
  }
  getMovieById(id):Observable<any>{
    return this.http.get<[]>(this.moviesUrl+ "/"+id);
  }
  addBooking(booking):Observable<any>{
    console.log(">> addBooking:" +JSON.stringify(booking));
    return this.http.post(this.bookingUrl,booking);
  }
  getRemoteBooking():Observable<[]>{
  	return this.http.get<[]>(this.bookingUrl); 		
  }
}

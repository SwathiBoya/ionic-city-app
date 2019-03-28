import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  booking:any=[];
  bookings:any = [];
  private bookingUrl = 'http://192.168.0.98:3000/api/movie';
  constructor(private http: HttpClient) { }
  getRemoteMovies(): Observable<[]>{
  	return this.http.get<[]>(this.bookingUrl); 		
  }
}

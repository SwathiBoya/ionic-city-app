import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieUrl = 'http://192.168.0.98:3000/api/movies';
  constructor(private http: HttpClient) { }
  getRemoteMovies(): Observable<[]>{
  	return this.http.get<[]>(this.movieUrl); 		
  }
}

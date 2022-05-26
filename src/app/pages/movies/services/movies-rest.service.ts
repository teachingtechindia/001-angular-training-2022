import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesRestService {
  constructor(private httpClient: HttpClient) {}

  getMovieList() {
    /*     const token = window.localStorage.getItem('token') || '';

    const headers = {
      authorization: token,
    };

    return this.httpClient.get('http://localhost:4000/movies', {
      headers: headers,
    }); */

    return this.httpClient.get('http://localhost:4000/movies');
  }
}

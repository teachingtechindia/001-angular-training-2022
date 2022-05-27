import { Component, OnInit } from '@angular/core';
import { MoviesRestService } from '../services/movies-rest.service';

@Component({
  selector: 'at-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  movies: any = [];

  constructor(private moviesRestService: MoviesRestService) {}

  ngOnInit(): void {
    this.moviesRestService.getMovieList().subscribe(
      (data) => {
        console.log('VK: MovieList: data', data);
        this.movies = data;
      },
      (error) => {
        console.log('VK: MovieList: error', error);
      }
    );
  }
}

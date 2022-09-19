import { Controller, Get, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';


@Controller('movies')
export class MoviesController {
  moviesService: MoviesService;

  constructor(){
    //Don't use this in app, use dependency injection
    //
    this.moviesService = new MoviesService();
  }

  @Get()
  listMovies() {
    return this.moviesService.findAll();
  }

  @Get('/:id')
  getMovieById(
      @Param('id') id: string
  )
  {
    return this.moviesService.findOne(id);
  }

  @Get('/title/:title')
  getMovieByTitle(
      @Param('title') title: string
  )
  {
    return this.moviesService.findOne(title);
  }


}

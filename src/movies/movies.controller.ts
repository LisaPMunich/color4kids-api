import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
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
  async getMovieById(
      @Param('id') id: string
  )
  {
    const movie = await this.moviesService.findOne(id);

    if(!movie){
      throw new NotFoundException('movie with this id not found')
    }
    return movie
  }

  @Get('/title/:title')
  async getMovieByTitle(
      @Param('title') title: string
  )
  {
    const movie = await this.moviesService.findOneByTitle(title);

    if(!movie){
      throw new NotFoundException('movie with this title not found')
    }
    return movie
  }


}

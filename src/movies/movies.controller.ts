import { Controller, Get, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  listMovies() {}

  @Get('/:title')
  getMovies() {}
}

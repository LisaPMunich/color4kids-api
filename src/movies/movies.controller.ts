import { Controller, Get, Param } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  listMovies() {}

  @Get('/:title')
  getMovie(
      @Param('title') title: string
  )
  {
    console.log(title)
  }
}

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateImageDto } from './dtos/create-image.dto';

@Controller('images')
export class ImagesController {
  @Get()
  listImages() {}

  @Get('/:name') // Method decorators
  getImage(
      @Param('name') name: string
  )
  {
    console.log(name);
  }

  @Post('/:name') // Method decorators
  createImage(
      @Body() body: CreateImageDto,
      @Param('name') name: string
  )
  {
    console.log(body, name);
  }
}

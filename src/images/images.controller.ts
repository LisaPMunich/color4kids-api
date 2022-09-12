import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('images')
export class ImagesController {
  @Get()
  listImages() {}

  @Get('/:name') // Method decorators
  getImages(
      @Param('name') name: string
  )
  {
    console.log(name);
  }

  @Post('/:name') // Method decorators
  createImages(
      @Body() body: any,
      @Param('name') name: string
  )
  {
    console.log(body, name);
  }
}

import { Controller, Get, Post } from '@nestjs/common';

@Controller('images')
export class ImagesController {
  @Get()
  listImages() {}
  @Get('/:name')
  getImages() {}
  @Post('/:name')
  createImages() {}
}

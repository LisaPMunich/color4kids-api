import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateImageDto } from './dtos/create-image.dto';
import { ImagesService } from './images.service';


@Controller('images')
export class ImagesController {
  imagesService: ImagesService;

  constructor(){
    //Don't use this in app, use dependency injection
    this.imagesService = new ImagesService();
  }

  @Get()
  listImages() {
    return this.imagesService.findAll();
  }

  @Get('/:id') // Method decorators
  getImageById(
      @Param('id') id: string
  )
  {
    return this.imagesService.findOne(id);
  }

  @Get('/name/:name') // Method decorators
  getImageByName(
      @Param('name') name: string
  )
  {
    return this.imagesService.findOne(name);
  }

  // @Get('/characters/:characters') // Method decorators
  // getImageByCharacters(
  //     @Param('characters') characters: string[]
  // )
  // {
  //   return this.imagesService.findOne(characters);
  // }


  @Post('/') // Method decorators
  createImage(
      @Body() body: CreateImageDto,
  )
  {
    return this.imagesService.create(body);
  }
}

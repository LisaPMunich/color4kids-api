import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
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
  async getImageById(
      @Param('id') id: string
  )
  {
    const image = await this.imagesService.findOne(id);

    if(!image){
      throw new NotFoundException('image with this id not found');
    }
    return image
  }

  @Get('/name/:name') // Method decorators
  async getImageByName(
      @Param('name') name: string
  )
  {
    const image = await this.imagesService.findOne(name);

    if(!image){
      throw new NotFoundException('image with this name not found');
    }
    return image
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

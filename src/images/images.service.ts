import {ImagesRepository } from './images.repository';
import { CreateImageDto } from './dtos/create-image.dto';
export class ImagesService {
    imagesRepo: ImagesRepository;

    constructor(){
        //DON'T DO THIS ON REAL APPS
        this.imagesRepo = new ImagesRepository()
    }

    findAll(): Promise<IImage[]> {
        return this.imagesRepo.findAll();
    }

    findOne(id: string){
        return this.imagesRepo.findOne(id);
    }

    create(image: CreateImageDto){
        return this.imagesRepo.create(image);
    }
}
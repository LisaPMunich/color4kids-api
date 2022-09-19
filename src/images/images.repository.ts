import { readFile, writeFile } from 'fs/promises';
import { CreateImageDto } from './dtos/create-image.dto';

export class ImagesRepository {

    async findAll(): Promise<IImage[]> {
        const contents = await readFile('images.json', 'utf8');
        return JSON.parse(contents);
    }

    async findOne(id: string){
        const images = await this.findAll();

        return images.filter(row => row._id === id)[0];
    }



    async create(image: CreateImageDto ){
        const images = await this.findAll();

        const _id = String(Math.floor(Math.random() * 999));

        images.push({
            _id,
            ...image
        });

        await writeFile('images.json', JSON.stringify(images));
    }
}
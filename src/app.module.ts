import { Module } from '@nestjs/common';
import {MoviesModule} from "./movies/movies.module";
import {ImagesModule} from "./images/images.module";

@Module({
    imports:[
        MoviesModule,
        ImagesModule
    ]
})
export class AppModule {}

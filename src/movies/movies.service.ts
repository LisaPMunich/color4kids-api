import {MoviesRepository } from './movies.repository'
export class MoviesService {
    moviesRepo: MoviesRepository;

    constructor(){
        //DON'T DO THIS ON REAL APPS
        this.moviesRepo = new MoviesRepository()
    }

    findAll(): Promise<IMovie[]> {
        return this.moviesRepo.findAll();
    }

    findOne(id: string){
        return this.moviesRepo.findOne(id);
    }

    findOneByTitle(title: string){
        return this.moviesRepo.findOneByTitle(title);
    }

}
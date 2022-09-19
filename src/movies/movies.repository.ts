import { readFile } from 'fs/promises';

export class MoviesRepository {

    async findAll(): Promise<IMovie[]> {
        const contents = await readFile('movies.json', 'utf8');
        const movies: Array<IMovie> = JSON.parse(contents);

        return movies;
    }

   async findOne(id: string){
       const movies = await this.findAll();

       return movies.filter(row => row._id === id)[0];
    }

}
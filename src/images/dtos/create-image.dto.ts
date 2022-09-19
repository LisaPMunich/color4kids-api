import { IsString, IsArray } from 'class-validator';

export class CreateImageDto {
    @IsString()
    name: string;
    @IsArray()
    characters: string[];
    @IsString()
    imageURL: string;
}
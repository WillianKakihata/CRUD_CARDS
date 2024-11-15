import{ IsArray, IsString  } from 'class-validator';

export class CreateCardsDto{
    @IsString()
    cartaComandante: string

    @IsArray()
    cartas: string[]
    
}
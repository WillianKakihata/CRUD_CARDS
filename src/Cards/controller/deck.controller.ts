import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateCardsService } from "../service/createCards.service";
import { CreateCardsDto } from "../dto/createCardsDto.dto";
import { UpdateCardsDto } from "../dto/updateCardsDto.dto";


@Controller('Decks')
export class DeckController{
    constructor(private CreateCardsService: CreateCardsService) {}

    @Post('create')
    create(@Body() CreateCardsDto: CreateCardsDto) {
        try {
            return this.CreateCardsService.createDeck(CreateCardsDto)
        } catch (error) {
            return (error)
        }
        
    }

    @Get('findAll')
    findAll(): Promise<CreateCardsDto[]>{
        try {
            return this.CreateCardsService.findAllDeck()
        } catch (error) {
            return (error)
        }
        
    }

    @Get(':id')
    findOne(@Param('id') id: String) {
        try {
            return this.CreateCardsService.findOneDeck(id)   
        } catch (error) {
            return (error)
        }
    }

    @Patch('update/:id')
    update(@Param('id') id:String, @Body() CreateCardsDto: CreateCardsDto){
        return this.CreateCardsService.updateDeck(id, CreateCardsDto)
    }
}
  
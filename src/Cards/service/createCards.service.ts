import { InjectRepository } from "@nestjs/typeorm";
import { CreateCardsDto } from "../dto/createCardsDto.dto";
import { Repository } from "typeorm";
import { deckCardsEntity } from "../entity/deckCards.entity";
import { NotFoundException } from "@nestjs/common";


export class CreateCardsService{
    constructor(
        @InjectRepository(deckCardsEntity) private cardsRepository: Repository<deckCardsEntity>
    ) {}


  public async createDeck(createCreateDto: CreateCardsDto) {
    return await this.cardsRepository.save(createCreateDto)
  }

  public async findAllDeck(): Promise<CreateCardsDto[]> {
    return await this.cardsRepository.find()
  }

  public async findOneDeck(id: String): Promise<CreateCardsDto> {
    return await this.cardsRepository.findOne({ where: { id} })
  }

  public async updateDeck(id: String, updateCardsDto: CreateCardsDto): Promise<CreateCardsDto> {
    const teste = await this.findOneDeck(id);
    if (!teste) {
      throw new NotFoundException('Todo not found')
    }
    await this.cardsRepository.update({id}, updateCardsDto)
    return teste
  }

  public async deleteDeck(id: object): Promise<void> {
    await this.cardsRepository.delete(id);
  }

}
import { Module } from '@nestjs/common';
import { CreateCardsService } from './service/createCards.service';
import { DeckController } from './controller/deck.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { deckCardsEntity } from './entity/deckCards.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([deckCardsEntity])
  ],
  controllers: [DeckController],
  providers: [CreateCardsService],
  exports: [CreateCardsService]
})
export class CardsModule {}

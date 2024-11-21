import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CardsModule } from './Cards/cards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { deckCardsEntity } from './Cards/entity/deckCards.entity';
import { join } from 'path';

@Module({
  imports: [CardsModule, TypeOrmModule.forRoot({
    name: 'default',
    type: 'mongodb',
    host: '0.0.0.0',
    port: 27017,
    database: 'CardsMagic',
    useNewUrlParser: true,
    autoLoadEntities: true,
    useUnifiedTopology: true,
    entities: [join(__dirname, '**/**.entity{.ts,.js}')],
  })  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

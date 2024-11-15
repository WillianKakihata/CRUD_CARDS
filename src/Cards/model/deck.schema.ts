import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CardsDocument = DeckSchema & Document;

@Schema()
export class DeckSchema {
  @Prop({ required: true })
  cartaComandante: string;

  @Prop({ type: [String], required: true })
  cartas: string[];
}

export const CardsModels = SchemaFactory.createForClass(DeckSchema);
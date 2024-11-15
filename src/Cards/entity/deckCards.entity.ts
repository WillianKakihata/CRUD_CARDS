import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity()
export class deckCards {
    @ObjectIdColumn()
    id: ObjectId;
  
    @Column()
    cartaComandante: string;

    @Column()
    cartas: string[];
}

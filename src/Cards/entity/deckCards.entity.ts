import { Column, Entity, ObjectId, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database : 'mongodb' })
export class deckCardsEntity {
    @ObjectIdColumn()
    id: String;
  
    @Column()
    cartaComandante: string;

    @Column()
    cartas: string[];
}

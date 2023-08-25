import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Listing } from './listing.entity';
import { AbstractEntity } from 'src/database/abstract.entity';
import { Comment } from './comment.entity';

@Entity()
export class Item extends AbstractEntity<Item> {
  @Column()
  name: string;

  @Column()
  public: boolean;

  @OneToOne(() => Listing, { cascade: true })
  @JoinColumn()
  listing: Listing;

  @OneToMany(() => Comment, (comment) => comment.id, { cascade: true })
  comments: Comment[];
}


import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  name: string;

  @Column({
    type: 'text',
    nullable: true,
    default: null
  })
  note: string;

  @Column({
    nullable: true,
    default: null
  })
  filename: string;

  @Column({ length: 100, nullable: true, default: null })
  phone: string;
}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ServiceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  name: string;

  @Column({
    type: 'text',
    nullable: true,
    default: null
  })
  description: string;

  @Column({
    default: 0
  })
  amount: number;
}

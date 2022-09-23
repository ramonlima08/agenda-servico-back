import { ScheduleEntity } from "src/schedule/entities/schedule.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

  @OneToMany(() => ScheduleEntity, (schedule) => schedule.service)
  schedules: ScheduleEntity[]
}

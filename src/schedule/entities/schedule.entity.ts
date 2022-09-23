import { CustomerEntity } from "src/customer/entities/customer.entity";
import { ServiceEntity } from "src/service/entities/service.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity() 
export class ScheduleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column({
        type: 'text',
        nullable: true,
        default: null
    })
    note: string;

    @Column({
        default: 0
      })
    amount: number;

    @Column({
        nullable: true,
        default: null
    })
    type: string; //colocar|manutenção

    @ManyToOne(() => CustomerEntity, (customer) => customer.schedules)
    customer: CustomerEntity

    @ManyToOne(() => ServiceEntity, (service) => service.schedules)
    service: ServiceEntity

}

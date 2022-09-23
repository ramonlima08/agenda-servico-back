import { CustomerEntity } from "src/customer/entities/customer.entity";
import { ServiceEntity } from "src/service/entities/service.entity";

export interface Schedule {
    date: string;
    note: string;
    amount: number;
    type: string;
    customer: CustomerEntity;
    service: ServiceEntity;
}
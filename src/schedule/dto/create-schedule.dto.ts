import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';
import { CreateCustomerDto } from 'src/customer/dto/create-customer.dto';
import { CustomerEntity } from 'src/customer/entities/customer.entity';
import { CreateServiceDto } from 'src/service/dto/create-service.dto';
import { ServiceEntity } from 'src/service/entities/service.entity';

export class CreateScheduleDto {
    @IsNotEmpty()
    @IsString()
    date: string;

    @IsString()
    @IsOptional()
    note: string;

    @IsNumber()
    @IsOptional()
    amount: number;

    @IsString()
    @IsOptional()
    type: string;

    @IsNotEmpty()
    customer: CreateCustomerDto;

    @IsNotEmpty()
    service: CreateServiceDto;
}

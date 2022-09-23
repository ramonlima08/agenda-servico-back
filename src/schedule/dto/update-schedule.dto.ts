import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsOptional, IsNumber } from 'class-validator';
import { CreateCustomerDto } from 'src/customer/dto/create-customer.dto';
import { CreateServiceDto } from 'src/service/dto/create-service.dto';
import { CreateScheduleDto } from './create-schedule.dto';

export class UpdateScheduleDto extends PartialType(CreateScheduleDto) {
    @IsOptional()
    @IsString()
    date: string;

    @IsOptional()
    customer: CreateCustomerDto;

    @IsOptional()
    service: CreateServiceDto;
}

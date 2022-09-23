import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsOptional } from 'class-validator';
import { CreateCustomerDto } from './create-customer.dto';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {

    @IsOptional()
    @IsString()
    name: string;

}

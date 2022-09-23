import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCustomerDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    note: string;

    @IsString()
    @IsOptional()
    filename: string;

    @IsString()
    @IsOptional()
    phone: string;
}

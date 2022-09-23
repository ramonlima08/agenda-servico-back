import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateServiceDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsNumber()
    @IsOptional()
    phone: number;
}

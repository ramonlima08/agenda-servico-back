import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerEntity } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity)
    private customerRepository: Repository<CustomerEntity>,
  ) {}
  
  create(createCustomerDto: CreateCustomerDto): Promise<CustomerEntity> {
    return this.customerRepository.save(createCustomerDto);
  }

  async findAll(): Promise<CustomerEntity[]> {
    return await this.customerRepository.find();
  }

  findOne(id: number): Promise<CustomerEntity> {
    return this.customerRepository.findOne({
      where: { id }
    });
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto): Promise<CustomerEntity> {
    const customer = await this.customerRepository.findOne({
      where: { id }
    });

    return this.customerRepository.save({
      ...customer, // existing fields
      ...updateCustomerDto // updated fields
    });
  }

  async remove(id: number): Promise<void> {
    const customer = await this.findOne(id);    
    await this.customerRepository.remove(customer);
  }
}

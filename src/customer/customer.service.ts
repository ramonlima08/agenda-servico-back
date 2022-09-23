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
    const customer = new CustomerEntity()
    customer.name = createCustomerDto.name
    customer.note = createCustomerDto.note
    customer.filename = createCustomerDto.filename
    customer.phone = createCustomerDto.phone

    return this.customerRepository.save(customer);
  }

  async findAll(): Promise<CustomerEntity[]> {
    return await this.customerRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }

  getInfo() {
    return {
      'version': 1.0,
      'location': "customer",
      'class': 'CustomerService'
    }
  }

  getMyUser(id: number) {
    // const findUser = user.find( (u) => u.id === id)
    // if(!findUser){
    //   throw new NotFoundException('usuario não encontrado')
    // }

    // return findUser

  }

  getMyUserName(name: string) {
    return 'eu aki'
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ServiceEntity } from './entities/service.entity';

@Injectable()
export class ServiceService {

  constructor(
    @InjectRepository(ServiceEntity)
    private serviceRepository: Repository<ServiceEntity>,
  ) {}

  create(CreateServiceDto: CreateServiceDto): Promise<ServiceEntity> {
    return this.serviceRepository.save(CreateServiceDto);
  }

  async findAll(): Promise<ServiceEntity[]> {
    return await this.serviceRepository.find();
  }

  findOne(id: number): Promise<ServiceEntity> {
    return this.serviceRepository.findOne({
      where: { id }
    });
  }

  async update(id: number, UpdateServiceDto: UpdateServiceDto): Promise<ServiceEntity> {
    const customer = await this.serviceRepository.findOne({
      where: { id }
    });

    return this.serviceRepository.save({
      ...customer, // existing fields
      ...UpdateServiceDto // updated fields
    });
  }

  async remove(id: number): Promise<void> {
    const customer = await this.findOne(id);    
    await this.serviceRepository.remove(customer);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { ScheduleEntity } from './entities/schedule.entity';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(ScheduleEntity)
    private scheduleRepository: Repository<ScheduleEntity>,
  ) {}
  
  create(createScheduleDto: CreateScheduleDto): Promise<ScheduleEntity> {
    return this.scheduleRepository.save(createScheduleDto);
  }

  async findAll(): Promise<ScheduleEntity[]> {
    return await this.scheduleRepository.find({
      relations: { customer: true, service: true }
    });
  }

  findOne(id: number): Promise<ScheduleEntity> {
    return this.scheduleRepository.findOne({
      where: { id },
      relations: { customer: true, service: true }
    });
  }

  async update(id: number, updateScheduleDto: UpdateScheduleDto): Promise<ScheduleEntity> {
    const schedule = await this.scheduleRepository.findOne({
      where: { id }
    });

    return this.scheduleRepository.save({
      ...schedule, // existing fields
      ...updateScheduleDto // updated fields
    });
  }

  async remove(id: number): Promise<void> {
    const schedule = await this.findOne(id);    
    await this.scheduleRepository.remove(schedule);
  }
}

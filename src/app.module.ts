import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './customer/entities/customer.entity';
import { ServiceModule } from './service/service.module';
import { ServiceEntity } from './service/entities/service.entity';
import { ScheduleModule } from './schedule/schedule.module';
import { ScheduleEntity } from './schedule/entities/schedule.entity';

@Module({
  imports: [CustomerModule, TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'bd',
    // entities: [__dirname + '**/*.entity{.ts,.js}'],
    entities: [CustomerEntity, ServiceEntity, ScheduleEntity],
    synchronize: true,
  }), ServiceModule, ScheduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

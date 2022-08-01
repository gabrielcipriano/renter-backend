import { Module } from '@nestjs/common';
import { RentsService } from './rents.service';
import { RentsController } from './rents.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Rent, RentSchema } from './entities/rent.entity';
import { PropertiesModule } from 'src/properties/properties.module';
import {
  Property,
  PropertySchema,
} from 'src/properties/entities/property.entity';
import { PropertiesService } from 'src/properties/properties.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Rent.name, schema: RentSchema },
      { name: Property.name, schema: PropertySchema },
    ]),
    PropertiesModule,
  ],

  controllers: [RentsController],
  providers: [RentsService, PropertiesService],
})
export class RentsModule {}

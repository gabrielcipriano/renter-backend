import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Property, PropertySchema } from './entities/property.entity';
// import { RentsModule } from 'src/rents/rents.module';
import { RentsService } from 'src/rents/rents.service';
import { Rent, RentSchema } from 'src/rents/entities/rent.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Property.name, schema: PropertySchema },
      // { name: Rent.name, schema: RentSchema },
    ]),
    // RentsModule,
  ],

  controllers: [PropertiesController],
  providers: [
    PropertiesService,
    // RentsService
  ],
})
export class PropertiesModule {}

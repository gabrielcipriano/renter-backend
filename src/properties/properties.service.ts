import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rent, RentDocument } from 'src/rents/entities/rent.entity';
import { RentsService } from 'src/rents/rents.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property, PropertyDocument } from './entities/property.entity';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectModel(Property.name) private propertyModel: Model<PropertyDocument>,
  ) {}

  create(createPropertyDto: CreatePropertyDto) {
    console.log(createPropertyDto);
    const property = new this.propertyModel(createPropertyDto);
    return property.save();
  }

  async findAll() {
    const properties = await this.propertyModel.find().populate('rents');

    // const rentsFromProperty = await this.rentService.findByPropertyId()
    // return this.propertyModel.find();
    return properties;
  }

  async findOne(id: string) {
    const property = await this.propertyModel.findById(id);
    // return `This action returns a #${id} property`;
    return property;
  }

  // update(id: string, updatePropertyDto: UpdatePropertyDto) {
  //   return `This action updates a #${id} property`;
  // }

  async update(id: string, updatePropertyDto: UpdatePropertyDto) {
    console.log('prop id', id);
    console.log('update', updatePropertyDto);
    const updatedProperty = await this.propertyModel.findByIdAndUpdate(
      id,
      updatePropertyDto,
      {
        new: true,
      },
    );
    return updatedProperty;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}

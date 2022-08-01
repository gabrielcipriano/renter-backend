import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property, PropertyDocument } from './entities/property.entity';

@Injectable()
export class PropertiesService {
  constructor(@InjectModel(Property.name) private propertyModel: Model<PropertyDocument>) {}

  create(createPropertyDto: CreatePropertyDto) {
    console.log(createPropertyDto)
    const property = new this.propertyModel(createPropertyDto)
    return property.save()
  }

  findAll() {
    return this.propertyModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}

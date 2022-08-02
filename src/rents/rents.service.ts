import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PropertiesService } from 'src/properties/properties.service';
import { CreateRentDto } from './dto/create-rent.dto';
import { UpdateRentDto } from './dto/update-rent.dto';
import { Rent, RentDocument } from './entities/rent.entity';

@Injectable()
export class RentsService {
  constructor(@InjectModel(Rent.name) private rentModel: Model<RentDocument>) {}

  async create(createRentDto: CreateRentDto) {
    console.log(createRentDto);
    const rent = new this.rentModel(createRentDto);
    const rentDoc = await rent.save();

    return rentDoc;
  }

  async findAll() {
    const rents = await this.rentModel.find().populate('rents');

    return rents;
  }

  findOne(id: number) {
    return `This action returns a #${id} rent`;
  }

  async findByPropertyId(property_id: string) {
    const rents = await this.rentModel.find({ property_id });
    return rents;
  }

  update(id: number, updateRentDto: UpdateRentDto) {
    return `This action updates a #${id} rent`;
  }

  remove(id: number) {
    return `This action removes a #${id} rent`;
  }
}

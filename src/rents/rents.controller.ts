import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RentsService } from './rents.service';
import { CreateRentDto } from './dto/create-rent.dto';
import { UpdateRentDto } from './dto/update-rent.dto';
import { PropertiesService } from 'src/properties/properties.service';
import { Types } from 'mongoose';
import { UpdatePropertyDto } from 'src/properties/dto/update-property.dto';

@Controller('rents')
export class RentsController {
  constructor(
    private readonly rentsService: RentsService,
    private propertiesService: PropertiesService,
  ) {}

  @Post()
  async create(@Body() createRentDto: CreateRentDto) {
    const rent = await this.rentsService.create(createRentDto);
    const property = await this.propertiesService.findOne(
      createRentDto.property_id,
    );

    // const property.
    property.rents.push(rent._id);

    const updatePropertyDto = new UpdatePropertyDto(property.rents);

    console.log('====>', updatePropertyDto);

    // await property.save();
    await this.propertiesService.update(property._id, updatePropertyDto);
    return rent;
  }

  @Get()
  findAll() {
    return this.rentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRentDto: UpdateRentDto) {
    return this.rentsService.update(+id, updateRentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentsService.remove(+id);
  }
}

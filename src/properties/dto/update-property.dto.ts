import { PartialType } from '@nestjs/mapped-types';
import { Types } from 'mongoose';
import { CreatePropertyDto } from './create-property.dto';

export class UpdatePropertyDto extends PartialType(CreatePropertyDto) {
  rents: Types.ObjectId[] = [];

  constructor(rents_: Types.ObjectId[]) {
    super();
    this.rents = rents_;
  }
}

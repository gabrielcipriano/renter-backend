import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
import mongoose, { Document, Types } from 'mongoose';
import { Property } from 'src/properties/entities/property.entity';

export enum RentStatus {
  EMPTY = 'empty',
  DAY = 'day',
  WEEK = 'week',
  MONTHM = 'month',
  YEAR = 'year',
}

export type RentDocument = Rent & Document;

@Schema({ _id: false })
class ClientRent extends Document {
  @Prop()
  name: string;

  @Prop()
  phone: string;
}

@Schema()
export class Rent {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Property' })
  @IsNotEmpty()
  //   property_id: Property;
  property_id: Types.ObjectId;

  @Prop()
  date_init: string;

  @Prop()
  date_end: string;

  @Prop({ enum: RentStatus, default: RentStatus.DAY })
  status: string;

  @Prop({ default: true })
  active: boolean;

  @Prop({
    type: ClientRent,
    default: {},
  })
  address: ClientRent;
}

export const RentSchema = SchemaFactory.createForClass(Rent);

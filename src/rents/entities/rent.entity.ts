import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
import mongoose, { Document, Types } from 'mongoose';
import { Property } from 'src/properties/entities/property.entity';

export enum RentMode {
  EMPTY = -1,
  DAY = 1,
  WEEK =  7,
  MONTHM = 30,
  YEAR = 360,
}

export enum RentStatus  {
  SCHEDULE = 0,
  COMFIRMED = 1,
  FINIXE = 2,
  CANCELED = -1,
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

  @Prop({ enum: RentStatus, default: RentStatus.SCHEDULE })
  status: number;

  @Prop({ enum: RentStatus, default: RentMode.DAY })
  mode: number;

  @Prop({ default: true })
  active: boolean;

  @Prop({
    type: ClientRent,
    default: {},
  })
  address: ClientRent;
}

export const RentSchema = SchemaFactory.createForClass(Rent);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { Rent } from 'src/rents/entities/rent.entity';
import { User } from 'src/users/entities/user.entity';

export enum PropertyStatus {
  RENTED = 0,
  AVAILABLE = 1,
  MAINTENANCE = 2,
  DISABLED = 3,
}

export type PropertyDocument = Property & Document;

@Schema({ _id: false })
class AddressProperty extends Document {
  @Prop()
  label: string;

  @Prop()
  cep: string;

  @Prop()
  city: string;

  @Prop()
  public_place: string;
}

@Schema()
export class Property {
  @Prop({ enum: PropertyStatus, default: PropertyStatus.AVAILABLE })
  status: number;

  @Prop()
  label: string;

  @Prop([String])
  images: string[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  // user_id: User;
  user_id: Types.ObjectId;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Rent' }])
  // rents: Rent;
  rents: [Types.ObjectId];

  @Prop({
    type: AddressProperty,
    default: {},
  })
  address: AddressProperty;

  @Prop({ default: true })
  active: boolean;

  //   final AddressModal address;
  //   final List<String> images;
  //   final PropertiesStatus status;
  //   final String label;
  //   final List<RentModel> last_rents;
}

export const PropertySchema = SchemaFactory.createForClass(Property);

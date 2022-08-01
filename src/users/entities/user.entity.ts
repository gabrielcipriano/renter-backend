import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop({
    required: true,
    match: /^\S+@\S+\.\S+$/,
    unique: true,
    trim: true,
    lowercase: true,
  })
  email: string;

  @Prop()
  password: string;


  @Prop({ default: true })
  active: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Track } from './track.schema';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop()
  username: string;

  @Prop()
  text: string;

  @Prop()
  track: Track;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);

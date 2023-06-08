import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Reclamo {
  @Prop()
  tipo: string;
  @Prop()
  descripcion: string;
}

export const ReclamoSchema = SchemaFactory.createForClass(Reclamo);

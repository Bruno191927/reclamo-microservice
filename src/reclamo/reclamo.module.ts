import { Module } from '@nestjs/common';
import { ReclamoService } from './reclamo.service';
import { ReclamoController } from './reclamo.controller';
import { Reclamo, ReclamoSchema } from './entities/reclamo.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [ReclamoController],
  providers: [ReclamoService],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      {
        name: Reclamo.name,
        schema: ReclamoSchema,
      },
    ]),
  ],
})
export class ReclamoModule {}

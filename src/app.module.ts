import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EnvConfiguration } from 'src/config/app.config';
import { JoiValidationSchema } from 'src/config/joi.validation';
import { ReclamoModule } from './reclamo/reclamo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      // carga el env
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema,
    }),
    ReclamoModule,
    MongooseModule.forRoot(process.env.MONGODB),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

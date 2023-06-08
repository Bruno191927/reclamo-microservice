import { Injectable } from '@nestjs/common';
import { CreateReclamoDto } from './dto/create-reclamo.dto';
import { UpdateReclamoDto } from './dto/update-reclamo.dto';
import { Reclamo } from './entities/reclamo.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReclamoDto } from './dto/reclamo.dto';
import { KafkaRetriableException } from '@nestjs/microservices';

@Injectable()
export class ReclamoService {
  constructor(
    @InjectModel(Reclamo.name)
    private readonly reclamoModel: Model<Reclamo>,
  ) {}
  async create(createReclamoDto: CreateReclamoDto) {
    console.log('Hello');
    try {
      const newReclamo = await this.reclamoModel.create(createReclamoDto);
      const reclamo: ReclamoDto = {
        id: newReclamo._id.toString(),
        tipo: newReclamo.tipo,
        descripcion: newReclamo.descripcion,
      };
      return reclamo;
    } catch (error) {
      throw new KafkaRetriableException('Error con la bd');
    }
  }

  findAll() {
    return `This action returns all reclamo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reclamo`;
  }

  update(id: number, updateReclamoDto: UpdateReclamoDto) {
    return `This action updates a #${id} reclamo`;
  }

  remove(id: number) {
    return `This action removes a #${id} reclamo`;
  }
}

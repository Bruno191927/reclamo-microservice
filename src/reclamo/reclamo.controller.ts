import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ReclamoService } from './reclamo.service';
import { CreateReclamoDto } from './dto/create-reclamo.dto';
import { UpdateReclamoDto } from './dto/update-reclamo.dto';

@Controller()
export class ReclamoController {
  constructor(private readonly reclamoService: ReclamoService) {}

  @MessagePattern('createReclamo')
  create(@Payload() createReclamoDto: CreateReclamoDto) {
    return this.reclamoService.create(createReclamoDto);
  }

  @MessagePattern('findAllReclamo')
  findAll() {
    return this.reclamoService.findAll();
  }

  @MessagePattern('findOneReclamo')
  findOne(@Payload() id: number) {
    return this.reclamoService.findOne(id);
  }

  @MessagePattern('updateReclamo')
  update(@Payload() updateReclamoDto: UpdateReclamoDto) {
    return '';
  }

  @MessagePattern('removeReclamo')
  remove(@Payload() id: number) {
    return this.reclamoService.remove(id);
  }
}

import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { WorkService } from './work/work.service';
import { CreateWorkDto } from './work/dto/create-work.dto';

@Controller('api/works')
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @Post()
  async create(@Body() createWorkDto: CreateWorkDto) {
    return this.workService.create(createWorkDto);
  }

  @Get()
  async findAll() {
    return this.workService.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.workService.remove(id);
  }
}

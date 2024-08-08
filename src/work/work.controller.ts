import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { WorkService } from './work.service'; 
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto'; 

@Controller('api/works')
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @Post()
  async create(@Body() createWorkDto: CreateWorkDto) {
    return await this.workService.create(createWorkDto);
  }

  @Get()
  async findAll() {
    return await this.workService.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.workService.remove(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateWorkDto: UpdateWorkDto) {
    return await this.workService.update(id, updateWorkDto);
  }
}

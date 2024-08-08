import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Work, WorkDocument } from './schemas/work.schema';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';

@Injectable()
export class WorkService {
  constructor(
    @InjectModel('Work') private readonly workModel: Model<WorkDocument>,
  ) {}

  async findAll(): Promise<Work[]> {
    return this.workModel.find().exec();
  }

  async create(createWorkDto: CreateWorkDto): Promise<Work> {
    console.log('Creating work:', createWorkDto);
    const createdWork = new this.workModel(createWorkDto);
    return createdWork.save();
  }

  async update(id: string, updateWorkDto: UpdateWorkDto): Promise<Work | null> {
    const updatedWork = await this.workModel.findByIdAndUpdate(id, updateWorkDto, { new: true }).exec();
    if (!updatedWork) {
      throw new NotFoundException(`Work with ID ${id} not found`);
    }
    return updatedWork;
  }

  async remove(id: string): Promise<Work | null> {
    const deletedWork = await this.workModel.findByIdAndDelete(id).exec();
    if (!deletedWork) {
      throw new NotFoundException(`Work with ID ${id} not found`);
    }
    return deletedWork;
  }
}

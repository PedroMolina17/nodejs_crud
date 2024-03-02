import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from '../schemas/task.schema';
import { Model } from 'mongoose';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto copy';
@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}
  findAll() {
    this.taskModel.find();
  }
  async create(createTask: any) {
    const newTask = new this.taskModel(createTask);
    await newTask.save();
    return newTask;
  }

  async findOne(id: string) {
    return this.taskModel.findById(id);
  }
  async delete(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }

  async update(id: string, task: any) {
    return this.taskModel.findByIdAndUpdate(id, task);
  }
}

import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { Task } from '../database/entities/task.entity';
import { TaskStatus } from '../utils/enum/task-status.enum';
import { CreateTaskDto } from './dtos/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async createTask(payload: CreateTaskDto) {
    try {
      const newTask = this.taskRepository.create({ ...payload });

      await this.taskRepository.save(newTask);

      return newTask;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, error.status);
    }
  }

  async getAllTasks() {
    try {
      return await this.taskRepository.find();
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, error.status);
    }
  }

  async updateTaskStatus(id: number, status: TaskStatus) {
    try {
      const taskFound = await this.getTaskById(id);
      const taskUpdated = await this.taskRepository.update(taskFound, {
        status,
      });
      return { message: 'Task updated successfully.', task: taskUpdated };
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, error.status);
    }
  }

  async deleteTask(id: number) {
    try {
      const taskFound = await this.getTaskById(id);

      await this.taskRepository.softDelete(taskFound);

      return { message: 'Task deleted successfully.' };
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, error.status);
    }
  }

  async getTaskById(id: number) {
    try {
      const taskFound = await this.taskRepository.findOne({ where: { id } });

      if (!taskFound) {
        throw new NotFoundException(`Task with ID "${id}" wasn't found.`);
      }

      return taskFound;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, error.status);
    }
  }
}

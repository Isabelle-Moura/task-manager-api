import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Task } from 'src/database/entities/task.entity';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskStatusDto } from './dtos/update-task.dto';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly tasksService: TaskService) {}

  @Get()
  async getAllTasks() {
    return await this.tasksService.getAllTasks();
  }

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    return await this.tasksService.createTask(createTaskDto);
  }

  @Patch(':id/status')
  async updateTaskStatus(
    @Param('id') id: string,
    @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  ) {
    return await this.tasksService.updateTaskStatus(
      +id,
      updateTaskStatusDto.status,
    );
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return await this.tasksService.deleteTask(+id);
  }
}

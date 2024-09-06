import { IsEnum } from 'class-validator';
import { TaskStatus } from '../../utils/enum/task-status.enum';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

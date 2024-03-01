import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';

@Module({
  imports: [TaskModule],
})
export class AppModule {}

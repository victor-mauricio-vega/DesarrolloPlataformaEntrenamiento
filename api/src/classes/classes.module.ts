import { Module } from '@nestjs/common';
import { GroupController } from './controllers/group/group.controller';
import { ClasseController } from './controllers/classe/classe.controller';
import { GroupTypeController } from './controllers/group_type/group_type.controller';
import { CourseController } from './controllers/course/course.controller';
import { ScheduleController } from './controllers/schedule/schedule.controller';

@Module({
  controllers: [GroupController, ClasseController, GroupTypeController, CourseController, ScheduleController]
})
export class ClassesModule {}

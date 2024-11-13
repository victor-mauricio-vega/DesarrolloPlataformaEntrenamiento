import { Module } from '@nestjs/common';
import { GroupController } from './controllers/group/group.controller';
import { ClasseController } from './controllers/classe/classe.controller';
import { GroupTypeController } from './controllers/group_type/group_type.controller';
import { CourseController } from './controllers/course/course.controller';
import { ScheduleController } from './controllers/schedule/schedule.controller';
import { GroupService } from './services/group/group.service';
import { GroupTypeService } from './services/group_type/group_type.service';
import { ClasseService } from './services/classe/classe.service';
import { CourseService } from './services/course/course.service';
import { ScheduleService } from './services/schedule/schedule.service';

@Module({
  controllers: [GroupController, ClasseController, GroupTypeController, CourseController, ScheduleController],
  providers: [GroupService, GroupTypeService, ClasseService, CourseService, ScheduleService]
})
export class ClassesModule {}

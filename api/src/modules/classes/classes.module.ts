import { Module } from '@nestjs/common';
import { GroupController } from './controllers/group/group.controller';
import { ClaseController } from './controllers/clase/clase.controller';
import { GroupTypeController } from './controllers/group_type/group_type.controller';
import { CourseController } from './controllers/course/course.controller';
import { ScheduleController } from './controllers/schedule/schedule.controller';
import { GroupService } from './services/group/group.service';
import { GroupTypeService } from './services/group_type/group_type.service';
import { ClaseService } from './services/clase/clase.service';
import { CourseService } from './services/course/course.service';
import { ScheduleService } from './services/schedule/schedule.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clase } from './entities/clase.entity';
import { Grupo } from './entities/grupo.entity';
import { Curso } from './entities/curso.entity';
import { TipoGrupo } from './entities/tipoGrupo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Clase, Grupo, Curso, TipoGrupo]),
  ],
  controllers: [GroupController, ClaseController, GroupTypeController, CourseController, ScheduleController],
  providers: [GroupService, GroupTypeService, ClaseService, CourseService, ScheduleService]
})
export class ClassesModule {}

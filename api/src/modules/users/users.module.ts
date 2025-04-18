import { Module } from '@nestjs/common';
import { StudentController } from './controllers/student/student.controller';
import { InstructorController } from './controllers/instructor/instructor.controller';
import { AdministratorController } from './controllers/administrator/administrator.controller';
import { StudentService } from './services/student/student.service';
import { InstructorService } from './services/instructor/instructor.service';
import { AdministratorService } from './services/administrator/administrator.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoDocumento } from './entities/tipoDocumento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoDocumento])], // Add any necessary imports here
  controllers: [StudentController, InstructorController, AdministratorController],
  providers: [StudentService, InstructorService, AdministratorService]
})
export class UsersModule {}

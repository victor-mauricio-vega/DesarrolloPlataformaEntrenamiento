import { Module } from '@nestjs/common';
import { StudentController } from './controllers/student/student.controller';
import { InstructorController } from './controllers/instructor/instructor.controller';
import { AdministratorController } from './controllers/administrator/administrator.controller';

@Module({
  controllers: [StudentController, InstructorController, AdministratorController]
})
export class UsersModule {}

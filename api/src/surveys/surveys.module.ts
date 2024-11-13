import { Module } from '@nestjs/common';
import { SurveyController } from './controllers/survey/survey.controller';
import { QuestionController } from './controllers/question/question.controller';

@Module({
  controllers: [SurveyController, QuestionController]
})
export class SurveysModule {}

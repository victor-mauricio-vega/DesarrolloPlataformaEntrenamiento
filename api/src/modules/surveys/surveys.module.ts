import { Module } from '@nestjs/common';
import { SurveyController } from './controllers/survey/survey.controller';
import { QuestionController } from './controllers/question/question.controller';
import { SurveyService } from './services/survey/survey.service';
import { QuestionService } from './services/question/question.service';

@Module({
  controllers: [SurveyController, QuestionController],
  providers: [SurveyService, QuestionService]
})
export class SurveysModule {}

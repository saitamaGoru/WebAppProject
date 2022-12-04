import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class SurveyRepository
{
  private surveys: any[] = [];
  private surveyCreators: any[] = [];
    

  constructor(private dataSource: StaticDataSource)
  {
    dataSource.getSurveys().subscribe(data => {
      this.surveys = data;
      this.surveyCreators = data.map(b => b.surveyCreator)
        .filter((a, index, array) => array.indexOf(a) === index).sort();
    });
  }

  getSurveys(surveyCreator: string ): Survey[]
  {
    return this.surveys
      .filter(b => surveyCreator == null || surveyCreator === b.surveyCreator);
  }

  getSurvey(id: number): Survey
  {
    return this.surveys.find(b => b._id === id);
  }

  getSurveyCreators(): string[]
  {
    return this.surveyCreators;
  }
}

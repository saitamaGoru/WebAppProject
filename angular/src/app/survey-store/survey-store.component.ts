import { Component, OnInit } from '@angular/core';
import { Survey } from '../model/survey.model';
import { SurveyRepository } from '../model/survey.repository';

@Component({
  selector: 'app-survey-store',
  templateUrl: './survey-store.component.html',
  styleUrls: ['./survey-store.component.css']
})
export class SurveyStoreComponent implements OnInit 
{

  constructor(private repository: SurveyRepository) { }

  ngOnInit(): void 
  {
  }

  get surveys(): Survey[]
  {
    return this.repository.getSurveys("0");
  }

  get surveyCreators(): string[]
  {
    return this.repository.getSurveyCreators();
  }
}

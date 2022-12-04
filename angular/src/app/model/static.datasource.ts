import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource
{
  private surveys: Survey[] =
  [
    new Survey(1, 'Survey 1', 'Date 1','fname1','lname1', 'Ratetheproduct 1', 'FeeBack1' , 'surveycreator1'),
    new Survey(2, 'Survey 2', 'Date 2','fname2','lname2', 'Ratetheproduct 2', 'FeeBack2' , 'surveycreator2'),
    new Survey(1, 'Survey 3', 'Date 3','fname3','lname3', 'Ratetheproduct 3', 'FeeBack3' , 'surveycreator3'),
    new Survey(2, 'Survey 4', 'Date 4','fname4','lname4', 'Ratetheproduct 4', 'FeeBack4' , 'surveycreator4'),
    new Survey(1, 'Survey 5', 'Date 5','fname5','lname5', 'Ratetheproduct 5', 'FeeBack5' , 'surveycreator5'),
    new Survey(2, 'Survey 6', 'Date 6','fname6','lname6', 'Ratetheproduct 6', 'FeeBack6' , 'surveycreator6'),
    new Survey(1, 'Survey 7', 'Date 7','fname7','lname7', 'Ratetheproduct 7', 'FeeBack7' , 'surveycreator7'),
    new Survey(2, 'Survey 8', 'Date 8','fname8','lname8', 'Ratetheproduct 8', 'FeeBack8' , 'surveycreator8'),

    
  ];

  getSurveys(): Observable<Survey[]>
  {
    return from([this.surveys]);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Course } from './../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private HttpClient: HttpClient) { }

  list (): Course[] {
    return  [
      { _id: '1', name: 'angular', category: 'Front-End' }
    ];
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Educations} from './educations.model';

@Injectable({
  providedIn: 'root'
})
export class EducationsService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(
    private http: HttpClient
  ) { }

  getEducations(): Observable<Educations[]> {
    return this.http.get<Educations[]>(this.baseUrl + '/educations');
  }
}

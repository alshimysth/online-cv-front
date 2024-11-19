import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Experiences} from './experiences.model';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  private baseUrl: string = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  getExperiences(): Observable<Experiences[]>{
    return this.http.get<Experiences[]>(`${this.baseUrl}` + '/experiences');
  }
}

import {Component, OnInit} from '@angular/core';
import {EducationsService} from './educations.service';
import {Educations} from './educations.model';
import {tap} from 'rxjs';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrl: './educations.component.scss'
})
export class EducationsComponent implements OnInit {

  public educations: Educations[] = [];
  public loading: boolean = false;

  constructor(private _educationsService: EducationsService) {}

  ngOnInit() {
    this.getEducations();
  }

  getEducations(): void {
    this.loading = true;
    this._educationsService.getEducations()
      .pipe(tap((data) => this.educations = data))
      .pipe(tap(() => this.loading = false))
      .subscribe()
  }

}

import {Component, OnInit} from '@angular/core';
import {ExperiencesService} from './experiences.service';
import {Experiences} from './experiences.model';
import {tap} from 'rxjs';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent implements OnInit {

  public experiences: Experiences[] = [];
  public loading: boolean = false;

  constructor(
    private _experienceService: ExperiencesService
  ) { }

  ngOnInit(): void {
    this.getExperiences();
  }

  getExperiences(): void {
    this.loading = true;
    this._experienceService.getExperiences()
      .pipe(tap((data) => this.experiences = data))
      .pipe(tap(() => this.loading = false))
      .subscribe()
  }

}

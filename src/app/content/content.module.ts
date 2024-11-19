import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { EducationsComponent } from './educations/educations.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import {provideHttpClient} from '@angular/common/http';



@NgModule({
  declarations: [
    AboutComponent,
    EducationsComponent,
    ExperiencesComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    provideHttpClient()
  ]
})
export class ContentModule { }

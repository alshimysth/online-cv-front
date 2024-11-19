import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './content/about/about.component';
import {EducationsComponent} from './content/educations/educations.component';
import {ExperiencesComponent} from './content/experiences/experiences.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'educations', component: EducationsComponent },
  { path: 'experiences', component: ExperiencesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

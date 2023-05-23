import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantByDateRangeComponent } from './pages/applicant-by-date-range/applicant-by-date-range.component';
import { ApplicationComponent } from './pages/application/application.component';
import { GraphComponent } from './pages/graph/graph.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleApplicantComponent } from './pages/single-applicant/single-applicant.component';
import { UpdateComponent } from './pages/update/update.component';

const routes: Routes = [
  {
    path: 'applications',
    component: ApplicationComponent,
      children:[
        {
          path: 'update/:id',
          component: UpdateComponent,
        }
    ]
  },
  {
    path: 'applicantId',
    component: SingleApplicantComponent,
    pathMatch: 'full',
  },
  {
    path: 'daterange',
    component: ApplicantByDateRangeComponent,
    pathMatch: 'full',
  },
  {
    path: 'visualize',
    component: GraphComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

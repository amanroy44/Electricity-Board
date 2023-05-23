import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatCardModule} from '@angular/material/card';
import { ApplicationComponent } from './pages/application/application.component';
import { SingleApplicantComponent } from './pages/single-applicant/single-applicant.component';
import { ApplicantByDateRangeComponent } from './pages/applicant-by-date-range/applicant-by-date-range.component';
import { GraphComponent } from './pages/graph/graph.component';
import { FormsModule } from '@angular/forms';
import { ApplicantServiceService } from './services/applicant-service.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { UpdateComponent } from './pages/update/update.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { Daterangepicker } from 'ng2-daterangepicker';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ApplicationComponent,
    SingleApplicantComponent,
    ApplicantByDateRangeComponent,
    GraphComponent,
    UpdateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    Daterangepicker,
    
   
  ],
  providers: [ApplicantServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

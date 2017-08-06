import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { OptionsComponent } from './options/options.component';
import { HomeComponent } from './home.component';
import { NoSearchComponent } from './no-search/no-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  declarations: [
    StudentDetailsComponent,
    StudentSearchComponent,
    OptionsComponent,
    HomeComponent,
    NoSearchComponent
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentDetailsComponent } from './student-details/student-details.component';
import { NoSearchComponent } from './no-search/no-search.component';

const homeRoutes: Routes = [
  { path: '', component: NoSearchComponent },
  { path: 'search', component: StudentDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

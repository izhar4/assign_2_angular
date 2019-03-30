import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { AvailableCorsesComponent } from './available-corses/available-corses.component';
import { HelpInfoComponent } from './help-info/help-info.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'available-courses', component: AvailableCorsesComponent},
  {path: 'help', component: HelpInfoComponent},
  {path: 'about', component: AboutComponent}
  // { path: ‘’, pathMatch: ‘full’, redirectTo: ‘first’ },
  //  { path: ‘first’, component: FirstComponent },
  //  { path: ‘second’, component: SecondComponent },
  //  { path: ‘third’, component: ThirdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

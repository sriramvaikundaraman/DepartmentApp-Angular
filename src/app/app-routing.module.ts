import { AddDepartmentComponent } from './add-department/add-department.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { DepartmentDetailComponent } from './department/department-detail/department-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
{ path: '', redirectTo:'/detail', pathMatch:'full'},
{path:'add', component:AddDepartmentComponent},
{ path: 'detail', component: DepartmentComponent, children:[
  { path:':id', component: DepartmentDetailComponent},
  {path : '', component:NotFoundComponent}
]},
{ path:'*', component: DepartmentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

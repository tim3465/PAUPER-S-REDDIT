import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentListComponent } from './components/parent-list/parent-list.component';
import { ChildResultComponent } from './components/child-result/child-result.component';

const routes: Routes = [
  {path: "List", component: ParentListComponent},
  {path: "result", component: ChildResultComponent},
  {path: "**", redirectTo:"/List",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

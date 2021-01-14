import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextListComponent } from './component/text-list/text-list.component';

const routes: Routes = [
  { path: 'texts', component: TextListComponent },
  { path: '**', redirectTo: '/texts', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

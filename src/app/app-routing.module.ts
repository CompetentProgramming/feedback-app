import { FeedbacksPageComponent } from './containers/feedbacks-page/feedbacks-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: FeedbacksPageComponent, pathMatch: 'full'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

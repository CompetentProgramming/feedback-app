import { RoadmapPageComponent } from './containers/roadmap-page/roadmap-page.component';
import { FeedbacksPageComponent } from './containers/feedbacks-page/feedbacks-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'feedback', component: FeedbacksPageComponent},
  {path: 'roadmap', component: RoadmapPageComponent,},
  {path: '', redirectTo: '/feedback', pathMatch: 'full'},
  {path: '**', redirectTo: '/feedback'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

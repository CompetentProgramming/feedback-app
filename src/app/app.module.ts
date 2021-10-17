import { FeedbackEffects } from './state/feedback.effects';
import { environment } from './../environments/environment.prod';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbacksPageComponent } from './containers/feedbacks-page/feedbacks-page.component';
import { FilterComponent } from './containers/filter/filter.component';
import { ListComponent } from './containers/list/list.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { StoreModule } from '@ngrx/store';

import * as fromFeedback from './state/feedback.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { CategoriesFilterComponent } from './containers/categories-filter/categories-filter.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { RoadmapPageComponent } from './containers/roadmap-page/roadmap-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbacksPageComponent,
    FilterComponent,
    ListComponent,
    FeedbackComponent,
    CategoriesFilterComponent,
    RoadmapComponent,
    RoadmapPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({feedbacks: fromFeedback.reducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot([FeedbackEffects]),
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    NoopAnimationsModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

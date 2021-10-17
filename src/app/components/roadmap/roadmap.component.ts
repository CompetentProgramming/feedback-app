import { StatusEnum } from './../../models/enums.model';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { KeyStringNumber } from 'src/app/models/data.model';
import { State } from 'src/app/state/feedback.reducers';
import { getRoadmapWidgetItems } from 'src/app/state/feedbakc.selectors';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent {
  roadmapWidgetItems$: Observable<KeyStringNumber>
  feedbackStatusEnum = StatusEnum;

  constructor(private store: Store<State>) {
    this.roadmapWidgetItems$ = this.store.pipe(select(getRoadmapWidgetItems));
   }

}

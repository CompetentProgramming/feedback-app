import { State } from './../../state/feedback.reducers';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getFeedbacks, getSortByOptions } from 'src/app/state/feedback.actions';
import { Observable } from 'rxjs';
import { IFeedback } from 'src/app/models/feedback.model';
import { selectFeedbackSuggestions, selectSuggestionsSorted } from 'src/app/state/feedbakc.selectors';

@Component({
  selector: 'app-feedbacks-page',
  templateUrl: './feedbacks-page.component.html',
  styleUrls: ['./feedbacks-page.component.scss']
})
export class FeedbacksPageComponent implements OnInit {
  feedbacksSuggestion$: Observable<IFeedback[]>;

  constructor(private store: Store<State>) {
    this.feedbacksSuggestion$ = this.store.pipe(select(selectSuggestionsSorted));
  }

  ngOnInit(): void {
    this.store.dispatch(getFeedbacks());
    this.store.dispatch(getSortByOptions());
  }

}

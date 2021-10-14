import { FeedbackService } from './../services/feedback.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class FeedbackEffects {
  loadFeedbacks$ = createEffect(() => this.actions$.pipe(
    ofType('[Feedbacks] Get Feedbacks'),
    mergeMap(() => this.feedbackService.getFeedbacks()
      .pipe(
        map(feedbacks => ({type: '[Feedbacks] Get Feedbacks Success', feedbackList: feedbacks})),
        catchError(() => EMPTY))
      )
  ));

  loadSortByOptions$ = createEffect(() => this.actions$.pipe(
    ofType('[Feedbacks] Get Sort By Options'),
    mergeMap(() => this.feedbackService.getSortOptions()
      .pipe(
        map(listSortOptions => ({type: '[Feedbacks] Get Sort By Options Success', options: listSortOptions})),
        catchError(() => EMPTY))
      )
  ));



  constructor(
    private actions$: Actions,
    private feedbackService: FeedbackService
  ) {}
}

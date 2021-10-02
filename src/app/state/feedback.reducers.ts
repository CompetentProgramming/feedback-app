import { Action, createReducer, on } from '@ngrx/store';
import { IFeedback } from './../models/feedback.model';
import * as FeedbackActions from './feedback.actions';

export interface State {
  list: IFeedback[];
  loading: boolean;
}

export const initialState: State = {
  list: [],
  loading: false
}

const feedbackReducer = createReducer(
  initialState,
  on(FeedbackActions.getFeedbacks, state => ({...state, list: [], loading: true})),
  on(FeedbackActions.getFeedbacksSuccess, (state, {feedbackList}) =>
    ({...state, list: feedbackList, loading: false})),
)

export function reducer(state: State | undefined, action: Action) {
  return feedbackReducer(state, action);
}

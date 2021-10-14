import { SelectOption } from './../models/data.model';
import { Action, createReducer, on } from '@ngrx/store';
import { IFeedback } from './../models/feedback.model';
import * as FeedbackActions from './feedback.actions';

export interface State {
  list: IFeedback[];
  sortByOptions: SelectOption[],
  sortBySelectedOption: number,
  loading: boolean;
}

export const initialState: State = {
  list: [],
  sortByOptions: [],
  sortBySelectedOption: 1,
  loading: false
}

const feedbackReducer = createReducer(
  initialState,
  on(FeedbackActions.getFeedbacks, state => ({...state, list: [], loading: true})),
  on(FeedbackActions.getFeedbacksSuccess, (state, {feedbackList}) =>
    ({...state, list: feedbackList, loading: false})),
  on(FeedbackActions.getSortByOptionsSuccess, (state, {options}) =>
  ({...state, sortByOptions: options})),
  on(FeedbackActions.sortBySelected, (state, {value}) =>
  ({...state, sortBySelectedOption: value})),
)

export function reducer(state: State | undefined, action: Action) {
  return feedbackReducer(state, action);
}

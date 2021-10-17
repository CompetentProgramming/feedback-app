import { CategoryEnum } from './../models/enums.model';
import { SelectOption } from './../models/data.model';
import { Action, createReducer, on } from '@ngrx/store';
import { IFeedback } from './../models/feedback.model';
import * as FeedbackActions from './feedback.actions';

export interface State {
  list: IFeedback[];
  sortByOptions: SelectOption[],
  sortBySelectedOption: number,
  activeCategories: string[],
  loading: boolean;
}

export const initialState: State = {
  list: [],
  sortByOptions: [],
  sortBySelectedOption: 1,
  activeCategories: [CategoryEnum.ALL],
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
  on(FeedbackActions.categorySelected, (state, {selectedCategory}) => {
    // at least one category should be selected
    if (state.activeCategories.length === 1 && state.activeCategories[0] === selectedCategory) {
      return ({...state, activeCategories: [...state.activeCategories]});
    }
    const isItActiveCategory = state.activeCategories.some(category => category === selectedCategory);
    // if it's an active category then we need to remove it from store
    if (isItActiveCategory) {
      const idx = state.activeCategories.indexOf(selectedCategory);
      const newArray = [...state.activeCategories];
      newArray.splice(idx, 1);
      return ({...state, activeCategories: [...newArray]});
    }
    // if category is not active
    if (!isItActiveCategory) {
      // if selected category is All then we need to remove all items and add only all category
      // if selected category not All remove all if it's active or just add a new item
      if (selectedCategory === CategoryEnum.ALL) {
        return ({...state, activeCategories: [CategoryEnum.ALL]});
      } else {
        const isAllActive = state.activeCategories.some(category => category === CategoryEnum.ALL);
        if (isAllActive) {
          return ({...state, activeCategories: [selectedCategory]});
        }
        return ({...state, activeCategories: [...state.activeCategories, selectedCategory]});
      }
    }
    return ({...state});
  }),
)

export function reducer(state: State | undefined, action: Action) {
  return feedbackReducer(state, action);
}

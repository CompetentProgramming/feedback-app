import { CategoryEnum } from './../models/enums.model';
import { KeyStringNumber } from './../models/data.model';
import { createSelector } from "@ngrx/store";
import { StatusEnum } from "../models/enums.model";
import { IFeedback } from "../models/feedback.model";
import { State } from "./feedback.reducers";

export const selectRoot = (state: any) => state.feedbacks;

export const selectFeedbacks = createSelector(
  selectRoot,
  (state: State) => state.list
);

export const selectSortOptions = createSelector(
  selectRoot,
  (state: State) => state.sortByOptions
);

export const selectFeedbacksLoading = createSelector(
  selectRoot,
  (state: State) => state.loading
);

export const selectActiveCategories = createSelector(
  selectRoot,
  (state: State) => state.activeCategories
);


export const selectSortBySelectedOption = createSelector(
  selectRoot,
  (state: State) => state.sortBySelectedOption
);

export const selectFeedbackSuggestions = createSelector(
  selectFeedbacks,
  (list: IFeedback[]) =>  list.filter(feedback => feedback.status === StatusEnum.SUGGESTION)
);

export const selectFeedbacksFiltered = createSelector(
  selectFeedbackSuggestions,
  selectActiveCategories,
  (list: IFeedback[], activeCategories: string[]) => {
    if (activeCategories.length === 1 && activeCategories[0] === CategoryEnum.ALL) {
      return list;
    }
    return list.filter(feedback => activeCategories.some(activeCategory => activeCategory === feedback.category));
  }
);

export const selectSuggestionsSorted = createSelector(
  selectFeedbacksFiltered,
  selectSortBySelectedOption,
  (list: IFeedback[], sortBy: number) => {
    return list.sort((a,b) => {
      switch(sortBy) {
        case 1:
          return b.upvotes - a.upvotes;
        case 2:
          return a.upvotes - b.upvotes;
        case 3:
          return b.comments?.length - a.comments?.length;
        default:
          return a.comments?.length - b.comments?.length;
      }
    });
  }
);

export const selectFeedbackSuggestionsLength = createSelector(
  selectFeedbackSuggestions,
  (list: IFeedback[]) => list.length
);

export const getRoadmapWidgetItems = createSelector(
  selectFeedbacks,
  (list: IFeedback[]) => {
    return list
      .filter(feedback => feedback.status !== StatusEnum.SUGGESTION)
      .reduce<KeyStringNumber>((acc, cur) => {
        cur.status in acc ? acc[cur.status]++ : acc[cur.status] = 1;

        return acc;
      }, {})
  }
)

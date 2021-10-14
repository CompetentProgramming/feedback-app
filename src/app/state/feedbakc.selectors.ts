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

export const selectSortBySelectedOption = createSelector(
  selectRoot,
  (state: State) => state.sortBySelectedOption
);

export const selectFeedbackSuggestions = createSelector(
  selectFeedbacks,
  (list: IFeedback[]) =>  list.filter(feedback => feedback.status === StatusEnum.SUGGESTION)
);

export const selectSuggestionsSorted = createSelector(
  selectFeedbackSuggestions,
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

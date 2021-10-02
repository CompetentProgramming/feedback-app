import { createSelector } from "@ngrx/store";
import { StatusEnum } from "../models/enums.model";
import { IFeedback } from "../models/feedback.model";
import { State } from "./feedback.reducers";

export const selectRoot = (state: any) => state.feedbacks;

export const selectFeedbacks = createSelector(
  selectRoot,
  (state: State) => state.list
);

export const selectFeedbacksLoading = createSelector(
  selectRoot,
  (state: State) => state.loading
);

export const selectFeedbackSuggestions = createSelector(
  selectFeedbacks,
  (list: IFeedback[]) => list.filter(feedback => feedback.status === StatusEnum.SUGGESTION)
);

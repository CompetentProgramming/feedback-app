import { IFeedback } from './../models/feedback.model';
import { createAction, props } from "@ngrx/store";
import { SelectOption } from '../models/data.model';

export const getFeedbacks = createAction('[Feedbacks] Get Feedbacks');
export const getFeedbacksSuccess = createAction('[Feedbacks] Get Feedbacks Success', props<{feedbackList: IFeedback[]}>());
export const getFeedbacksError = createAction('[Feedbacks] Get Feedbacks Error');

export const getSortByOptions = createAction('[Feedbacks] Get Sort By Options');
export const getSortByOptionsSuccess = createAction('[Feedbacks] Get Sort By Options Success', props<{options: SelectOption[]}>());
export const getSortByOptionsError = createAction('[Feedbacks] Get Sort By Options Error');

export const sortBySelected = createAction('[Feedbacks] Sort By Select',props<{ value: number }>());

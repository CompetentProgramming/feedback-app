import { IFeedback } from './../models/feedback.model';
import { createAction, props } from "@ngrx/store";

export const getFeedbacks = createAction('[Feedbacks] Get Feedbacks');
export const getFeedbacksSuccess = createAction('[Feedbacks] Get Feedbacks Success', props<{feedbackList: IFeedback[]}>());
export const getFeedbacksError = createAction('[Feedbacks] Get Feedbacks Error');

import { getFeedbacks } from './../state/feedback.actions';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from 'rxjs';
import { feedbackMockJson } from '../mocks/fb.mock';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  constructor(private http: HttpClient) {}

  getFeedbacks() {
    return of(feedbackMockJson);
  }
}

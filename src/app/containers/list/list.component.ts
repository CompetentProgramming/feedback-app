import { Component, Input, OnInit } from '@angular/core';
import { IFeedback } from 'src/app/models/feedback.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() feedbackList: IFeedback[];

  constructor() { }

  ngOnInit(): void {
  }

}

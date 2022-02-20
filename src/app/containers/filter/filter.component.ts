import { AuthService } from './../../services/auth.service';
import { SelectOption } from './../../models/data.model';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/state/feedback.reducers';
import { selectFeedbackSuggestionsLength, selectSortOptions } from 'src/app/state/feedbakc.selectors';
import { sortBySelected } from 'src/app/state/feedback.actions';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  totalSuggestion$: Observable<number>;
  sortOptions$: Observable<SelectOption[]>;

  sortBySelect = 1;

  constructor(private store: Store<State>, private authService: AuthService) {
    this.totalSuggestion$ = this.store.pipe(select(selectFeedbackSuggestionsLength));
    this.sortOptions$ = this.store.pipe(select(selectSortOptions));
  }

  sortBySelected(option: SelectOption) {
    this.store.dispatch(sortBySelected({value: option.value}));
  }

  logout() {
    this.authService.logout();
  }

}

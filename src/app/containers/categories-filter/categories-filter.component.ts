import { selectActiveCategories } from './../../state/feedbakc.selectors';
import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { categoryList } from 'src/app/models/enums.model';
import { State } from 'src/app/state/feedback.reducers';
import { categorySelected } from 'src/app/state/feedback.actions';

@Component({
  selector: 'app-categories-filter',
  templateUrl: './categories-filter.component.html',
  styleUrls: ['./categories-filter.component.scss']
})
export class CategoriesFilterComponent implements OnInit {
  categories = categoryList;
  activeCategories$: Observable<string[]>

  constructor(private store: Store<State>) {
    this.activeCategories$ = this.store.pipe(select(selectActiveCategories));
  }

  ngOnInit(): void {
  }

  categoryChange(ev: MatButtonToggleChange) {
    if (ev.source.value) {
      this.store.dispatch(categorySelected({selectedCategory: ev.source.value}));
    }
  }

}

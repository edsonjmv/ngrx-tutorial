import { createSelector } from "@ngrx/store";

function selectFoo(): boolean {
  return false;
}

function selectBar(): boolean {
  return true;
}

export const selectProjectedValues = createSelector(
  selectFoo,
  selectBar,
  (foo, bar) => {
    if (foo && bar) {
      return { foo, bar };
    }

    return undefined;
  }
);

/* app.component.ts

import { select } from '@ngrx/store';
import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';

export const selectFilteredValues = pipe(
  select(selectValues),
  filter(val => val !== undefined)
);

store.pipe(selectFilteredValues).subscribe(/ * .. * /);

app.component.ts */
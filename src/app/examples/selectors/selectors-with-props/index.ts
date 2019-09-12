import { createSelector } from "@ngrx/store";

export const getCount = () =>
  createSelector(
    (state, props) => state.counter[props.id],
    (counter, props) => counter * props.multiply
  );


/* app.component.ts

ngOnInit() {
  this.counter2 = this.store.pipe(select(fromRoot.getCount(), { id: 'counter2', multiply: 2 }));
  this.counter4 = this.store.pipe(select(fromRoot.getCount(), { id: 'counter4', multiply: 4 }));
  this.counter6 = this.store.pipe(select(fromRoot.getCount(), { id: 'counter6', multiply: 6 }));
}

app.component.ts */
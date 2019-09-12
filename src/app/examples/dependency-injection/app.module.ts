/*

import { NgModule, InjectionToken } from '@angular/core';
import { StoreModule, ActionReducerMap } from '@ngrx/store';

import { SomeService } from './some.service';
import * as fromRoot from './reducers';

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<fromRoot.State>>('Registered Reducers', {
  factory: () => {
    const serv = inject(SomeService);
    // return reducers synchronously
    return serv.getReducers();
  }
});

@NgModule({
  imports: [StoreModule.forRoot(REDUCER_TOKEN)]
})
export class AppModule { }

*/

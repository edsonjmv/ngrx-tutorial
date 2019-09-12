/*

import { NgModule, InjectionToken } from '@angular/core';
import { StoreModule, StoreConfig } from '@ngrx/store';
import { SomeService } from './some.service';

import * as fromFeature from './reducers';

export const FEATURE_CONFIG_TOKEN = new InjectionToken<StoreConfig<fromFeature.State>>('Feature Config');

export function getConfig(someService: SomeService): StoreConfig<fromFeature.State> {
  // return the config synchronously.
  return {
    initialState: someService.getInitialState(),

    metaReducers: [
      fromFeature.loggerFactory(someService.loggerConfig())
    ]
  };
}

@NgModule({
  imports: [StoreModule.forFeature(fromFeature.featureKey, fromFeature.reducers, FEATURE_CONFIG_TOKEN)],
  providers: [
    {
      provide: FEATURE_CONFIG_TOKEN,
      deps: [SomeService],
      useFactory: getConfig,
    },
  ],
})
export class FeatureModule {}

*/

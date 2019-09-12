import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { LoginPageComponent } from './login-page.component';
import { loginReducer } from './login-page.reducer';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: loginReducer })
  ],
  declarations: [LoginPageComponent]
})
export class LoginModule { }


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
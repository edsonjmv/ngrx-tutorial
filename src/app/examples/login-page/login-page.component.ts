import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from './login-page.actions';

@Component({ template: `` })
export class LoginPageComponent {

  constructor(private store: Store<{ username: string, password: string }>) { }

  onSubmit(username: string, password: string) {
    this.store.dispatch(login({ username: username, password: password }));
  }

}

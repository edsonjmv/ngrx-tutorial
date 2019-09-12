import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login, LoginForm } from './login-page.actions';

@Component({ template: `` })
export class LoginPageComponent {

  constructor(private store: Store<{ form: LoginForm }>) { }

  onSubmit(username: string, password: string) {
    const form: LoginForm = { username, password };
    this.store.dispatch(login({form}));
  }

}

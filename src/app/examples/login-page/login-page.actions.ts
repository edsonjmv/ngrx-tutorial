import { createAction, props } from '@ngrx/store';

export interface LoginForm {
  username: string;
  password: string
}

export const login = createAction(
  '[Login Page] Login',
  props<{ form: LoginForm }>()
);
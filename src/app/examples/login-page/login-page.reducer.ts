import { createReducer, on } from '@ngrx/store';
import { login } from './login-page.actions';

export const initialState = {
  username: '',
  password: ''
};

// review this set state
const _loginReducer = createReducer(initialState, 
  on(login, state => state = { username: '', password: '' })
);

export function loginReducer(state, action) {
  return _loginReducer(state, action);
}

/**
 * Created by easub on 2016/12/3.
 */
import { createSelector } from 'reselect';

export const selectorLogin = () => (state) => state.get('login');

export const selectorSubmitData = () => createSelector(
  selectorLogin(),
  (loginState) => loginState.get('submitData')
);

export const selectorRequesting = () => createSelector(
  selectorLogin(),
  (loginState) => loginState.get('requesting')
);

export const selectorError = () => createSelector(
  selectorLogin(),
  (loginState) => loginState.get('error')
);

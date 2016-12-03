/**
 * Created by easub on 2016/12/3.
 */
import { createSelector } from 'reselect';

export const selectorUserDetails = () => (state) => state.get('userDetails');

export const selectorLogin = () => createSelector(
  selectorUserDetails(),
  (selectorUserDetailsState) => selectorUserDetailsState.get('login')
);

/**
 * Created by easub on 2016/12/3.
 */
import {
  CHANGE_DATA, SUBMIT, SUBMIT_SUCCESS, SUBMIT_ERROR, INITIALIZATION,
} from './constants';

import { fromJS } from 'immutable';

const initialState = fromJS({
  submitData: {
    accessToken: '1f97482a-0320-460e-96df-cbb1fb124aeb',
  },
  requesting: false,
  error: '',
});

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_DATA: {
      return state.mergeDeep(action.data);
    }
    case SUBMIT: {
      return state.set('requesting', true);
    }
    case SUBMIT_SUCCESS: {
      return state.set('requesting', false);
    }
    case SUBMIT_ERROR: {
      return state.set('error', action.error)
        .set('requesting', false);
    }
    case INITIALIZATION: {
      return initialState;
    }
    default:
      return state;
  }
}

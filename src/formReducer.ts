import { Action, State } from './types';

export function formReducer(state: State, action: Action) {
  switch (action.type) {
    case 'HANDLE NUMBER INPUT':
      return {
        ...state,
        [action.name]: action.payload,
      };
    case 'HANDLE CHECKBOX':
      return {
        ...state,
        infinite: !state.infinite,
      };
    default:
      return state;
  }
}

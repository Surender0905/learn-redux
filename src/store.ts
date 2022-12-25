import { AnyAction, createStore } from 'redux';
import { HAPPY_CLICKED, SAD_CLICKED } from './action';

export type State = {
  sadCount: number;
  happyCount: number;
};

const initialState = {
  sadCount: 0,
  happyCount: 0,
};

const reducer = (currentState: State = initialState, action: AnyAction) => {
  if (action.type === HAPPY_CLICKED) {
    return {
      ...currentState,
      happyCount: currentState.happyCount + action.payload,
    };
  } else if (action.type === SAD_CLICKED) {
    return {
      ...currentState,
      sadCount: currentState.sadCount + action.payload,
    };
  }

  return currentState;
};

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

import { AnyAction, createStore } from 'redux';

import HappinessReducer, {
  HappyState,
  initialHappyState,
} from './reducers/Happinessreducer';

import SadnessReducer, {
  initialSadState,
  SadState,
} from './reducers/SadnessReducer';

export type Moment = {
  intensity: number;
  when: Date;
};

export type State = {
  sad: SadState;
  happy: HappyState;
};

const initialState = {
  sad: initialSadState,
  happy: initialHappyState,
};

const reducer = (currentState = initialState, action: AnyAction) => {
  return {
    sad: SadnessReducer(currentState.sad, action),
    happy: HappinessReducer(currentState.happy, action),
  };
};

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

import { combineReducers, createStore } from 'redux';
import HappinessReducer from './reducers/Happinessreducer';
import SadnessReducer from './reducers/SadnessReducer';

export type Moment = {
  intensity: number;
  when: Date;
};

const reducer = combineReducers({
  sad: SadnessReducer,
  happy: HappinessReducer,
});

export type State = ReturnType<typeof reducer>;

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

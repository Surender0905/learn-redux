import { Moment } from '../store';
import { AnyAction } from 'redux';
import { HAPPY_CLICKED } from '../action';

export type HappyState = {
  happyMoment: Moment[];
};

export const initialHappyState: HappyState = {
  happyMoment: [],
};
function HappinessReducer(currentState: HappyState, action: AnyAction) {
  switch (action.type) {
    case HAPPY_CLICKED:
      return {
        ...currentState,
        happyMoment: [
          ...currentState.happyMoment,
          { intensity: action.payload.count, when: action.payload.when },
        ],
      };
  }

  return currentState;
}

export default HappinessReducer;

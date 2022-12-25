import { Moment } from '../store';
import { AnyAction } from 'redux';
import { SAD_CLICKED } from '../action';

export type SadState = {
  sadMoment: Moment[];
};

export const initialSadState: SadState = {
  sadMoment: [],
};
function SadnessReducer(currentState: SadState, action: AnyAction) {
  switch (action.type) {
    case SAD_CLICKED:
      return {
        ...currentState,
        sadMoment: [
          ...currentState.sadMoment,
          { intensity: action.payload.count, when: action.payload.when },
        ],
      };
  }

  return currentState;
}

export default SadnessReducer;

import { State } from './store';

export function happyCountSelector(state: State) {
  return state.happy.happyMoment;
}

export function sadCountSelector(state: State) {
  return state.sad.sadMoment;
}

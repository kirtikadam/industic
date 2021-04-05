// import { CounterActionTypes } from '../store/counter/models/actions'

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

interface IncrementAction {
  type: typeof INCREMENT_COUNTER;
}

interface DecrementAction {
  type: typeof DECREMENT_COUNTER;
}
export interface Counter {
    count: number;
  }

export type CounterActionTypes = IncrementAction | DecrementAction;
export type AppActions = CounterActionTypes; // | TodoActionTypes
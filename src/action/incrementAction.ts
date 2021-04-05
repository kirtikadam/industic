import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actionType/incrementActionType'

export const incrementCount = () => ({
  type: INCREMENT_COUNTER,
});

export const decrementCount = () => ({
  type: DECREMENT_COUNTER,
});
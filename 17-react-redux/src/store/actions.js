/**
 * actions
 */
import { INCREMENT, DECREMENT, INCREMENT_ASYNC } from "./constants.js";

// 同步action
export function increment(data) {
  return { type: INCREMENT, data };
}

export function decrement(data) {
  return { type: DECREMENT, data };
}

// 异步action
export function incrementAsync(data, time) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(data));
    }, time);
  };
}

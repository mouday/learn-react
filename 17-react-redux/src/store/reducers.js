/**
 * reducers
 */

import { INCREMENT, DECREMENT } from "./constants.js";

export function counter(state = 0, action) {
  const { type, data } = action;
  console.log(type, data);

  switch (type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

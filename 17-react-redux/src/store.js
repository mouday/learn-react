import { createStore } from "redux";

function counter(state = 0, action) {
  const { type, data } = action;
  console.log(type, data);

  switch (type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);

export default store;

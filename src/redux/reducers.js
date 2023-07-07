import { createStore } from "redux";
let nextId = 0;
const counters = (state = [], action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      return [...state, { id: nextId++, count: 0, name: "Counter" }];
    default:
      return state;
  }
};
export default createStore(counters);

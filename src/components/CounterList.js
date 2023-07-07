import React from "react";
import { connect } from "react-redux";
import Counter from "./Counter";
const CounterList = ({ counters, onIncrement, onDecrement }) => (
  <ul>
    {counters.map((counter) => (
      <Counter key={counter.id} />
    ))}
  </ul>
);
const mapStateToProps = (state) => {
  return {
    counters: state,
  };
};
export default connect(mapStateToProps)(CounterList);

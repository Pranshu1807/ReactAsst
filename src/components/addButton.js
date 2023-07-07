import React from "react";
import { add_counter } from "../redux/actions";
import { connect } from "react-redux";
const AddButton = ({ dispatch }) => (
  <>
    <button
      onClick={() => {
        dispatch(add_counter());
      }}
    >
      Add a counter
    </button>
  </>
);
export default connect()(AddButton);

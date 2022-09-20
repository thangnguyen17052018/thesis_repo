import React from "react";
import { connect } from "redux-zero/react";
import actions from "redux/actions";

const mapToProps = ({ count }) => ({ count });
export default connect(
  mapToProps,
  actions
)(({ count, increment }) => (
  <div>
    <h1>{count}</h1>
    <div>
      <button onClick={increment}>increment</button>
    </div>
  </div>
));

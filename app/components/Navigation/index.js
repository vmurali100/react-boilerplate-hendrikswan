/**
 *
 * Navigation
 *
 */

import React from "react";
import PropTypes from "prop-types";
function Navigation({ topics }) {
  return (
    <div>
      <h2>Welcome To Navigation Component</h2>
      <p>{topics.length}</p>
    </div>
  );
}

Navigation.propTypes = {
  topics: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      fname: React.PropTypes.string.isRequired,
      lname: React.PropTypes.string.isRequired
    })
  ).isRequired
};
export default Navigation;

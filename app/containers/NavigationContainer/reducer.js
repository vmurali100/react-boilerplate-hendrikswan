/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from "immutable";
import { DEFAULT_ACTION } from "./constants";

const initialState = fromJS({
  items: [
    {
      fname: "Elmer",
      lname: "Altermatt"
    },
    {
      fname: "Marina",
      lname: "Matros"
    },
    {
      fname: "Tanya",
      lname: "Pento"
    }
  ]
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default navigationContainerReducer;

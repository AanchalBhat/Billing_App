import { INVOICE } from "../actions/authDefine";

const intialState = [];

export default function (state = intialState, action) {
  const { type, payload } = action;
  switch (type) {
    case INVOICE:
      return [...state, payload];

    default:
      return state;
  }
}

import { CHANGE_SEARCH_FIELD } from "./constants";
const initialState = {
  searchField: ""
};

export const searchRobots = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: payload };

    default:
      return state;
  }
};

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";

const initialStateSearch = {
  searchField: ""
};

export const searchRobots = (state = initialStateSearch, { type, payload }) => {
  switch (type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: payload };

    default:
      return state;
  }
};

const initialStateRobots = {
  robots: [],
  isPending: false,
  error: ""
};

export const requestRobots = (
  state = initialStateRobots,
  { type, payload }
) => {
  switch (type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };

    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: payload, isPending: false };

    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: payload, isPending: false };

    default:
      return state;
  }
};

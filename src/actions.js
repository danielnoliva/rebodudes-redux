import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestRobotsPending = () => ({
  type: REQUEST_ROBOTS_PENDING
});
export const requestRobotsSuccess = payload => ({
  type: REQUEST_ROBOTS_SUCCESS,
  payload
});
export const requestRobotsFailed = payload => ({
  type: REQUEST_ROBOTS_FAILED,
  payload
});

export const requestRobots = () => dispatch => {
  dispatch(requestRobotsPending());
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => dispatch(requestRobotsSuccess(data)))
    .catch(error => dispatch(requestRobotsFailed(error)));
};

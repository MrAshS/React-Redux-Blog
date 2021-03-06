import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch) => {
  console.log("started");
  await dispatch(fetchPosts());
  console.log("finished");
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// export const fetchUser = function (id) {
//   return async function (dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: "FETCH_USER", payload: response.data });
//   };
// };

///////////////////////////////////////////////////////////

// 1 user id per fetch using memoize

// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

///////////////////////////////////////////////////////////

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

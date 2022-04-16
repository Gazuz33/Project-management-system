import { usersAPI } from "../api/api";

const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    { id: 1, message: "Hello" },
    { id: 2, message: "Privet" },
    { id: 3, message: "Chypali Mynyana" },
  ],
  newPostText: "testPost",
  profile: null,
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: 
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPost: "",
      };
    
    case UPDATE_NEW_POST_TEXT: 
      return { ...state, newPostText: action.newText };
    
    case SET_USER_PROFILE: 
      return { ...state, profile: action.profile };
    
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const getUserProfile = (profileId) => (dispatch) => {
  usersAPI.getProfile(profileId).then((response) => {
    dispatch(setUserProfile(response.data))
  });
};
export const UpdateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export default profileReducer;

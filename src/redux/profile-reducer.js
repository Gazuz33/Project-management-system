import { profileAPI, usersAPI } from "../api/api";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
  posts: [
    { id: 1, message: "Hello" },
    { id: 2, message: "Privet" },
    { id: 3, message: "Chypali Mynyana" },
  ],
  profile: null,
  status: "",
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPost: "",
      };

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    case SAVE_PHOTO_SUCCESS:
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};
export const savePhotoSucsess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});
export const savePhoto = (file) => (dispatch) => {
  profileAPI.savePhoto(file).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(savePhotoSucsess(response.data.data.photos));
    }
  });
};

export default profileReducer;

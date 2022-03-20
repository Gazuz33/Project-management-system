import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hello" },
        { id: 2, message: "Privet" },
        { id: 3, message: "Chypali Mynyana" },
      ],
      newPostText: "testPost",
    },
    dialogsPage: {
      DialogsData: [
        { id: 1, name: "User_1" },
        { id: 2, name: "User_2" },
        { id: 3, name: "User_3" },
        { id: 4, name: "User_4" },
      ],
      MessagesData: [
        { id: 1, message: "Hello" },
        { id: 2, message: "Hi" },
        { id: 3, message: "Privet" },
        { id: 4, message: "Barebyx" },
      ],
      newMessageBody: "",
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("changed");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;

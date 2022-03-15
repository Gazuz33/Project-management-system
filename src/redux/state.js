const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";
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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE_NEW_MESSAGE_BODY") {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === "SEND_MESSAGE") {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.MessagesData.push({ id: 6, message: body });
      this._callSubscriber(this._state);
    }
  },
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export const addPostActionCreator = () => ({ type: ADD_POST });

export const UpdateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default store;

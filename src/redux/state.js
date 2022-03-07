let rerenderEntireTree = () => {
  console.log('ssss')
}
let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hello" },
      { id: 2, message: "Privet" },
      { id: 3, message: "Chypali Mynyana" },
    ],
    newPostText: "test",
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
  },
};
export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};
export default state;

const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        MessagesData: [...state.MessagesData, { id: 6, message: body }],
      };

    default:
      return state;
  }
};
export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;

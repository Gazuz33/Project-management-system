const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  DialogsData: [
    { id: 1, name: "Андрей" },
    { id: 2, name: "Катя" },
    { id: 3, name: "Александр" },
    { id: 4, name: "Елизавета" },
  ],
  MessagesData: [
    { id: 1, message: "Hello" },
    { id: 2, message: "Hi" },
    { id: 3, message: "How are you??" },
    { id: 4, message: "I'm fine" },
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

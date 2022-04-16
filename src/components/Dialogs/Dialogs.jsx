import { Navigate } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DilaogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogElements = state.DialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = state.MessagesData.map((m) => (
    <Message message={m.message} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };
  if (!props.isAuth) 
  return <Navigate to = {"/login"} />
  return (
    <div className={s.item}>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogElements}</div>
        <div className={s.messages}>
          <div>{messagesElements}</div>
          <div>
            <div>
              <textarea
                className={s.messageText}
                placeholder="Enter your message "
                value={newMessageBody}
                onChange={onNewMessageChange}
              ></textarea>
            </div>
            <div>
              <button className={s.Send} onClick={onSendMessageClick}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;

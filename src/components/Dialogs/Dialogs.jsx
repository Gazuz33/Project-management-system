import s from "./Dialogs.module.css";
import DialogItem from "./DilaogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogElements = props.state.DialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.state.MessagesData.map((m) => (
    <Message message={m.message} />
  ));
  return (
    <div className={s.item}>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogElements}</div>
        <div className={s.messages}>{messagesElements}</div>
      </div>
    </div>
  );
};
export default Dialogs;

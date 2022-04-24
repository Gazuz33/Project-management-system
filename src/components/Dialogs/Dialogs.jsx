import { Navigate } from "react-router-dom";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import Textarea from "../common/FormsControls/FormsControls";
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
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };
  if (!props.isAuth) return <Navigate to={"/login"} />;
  return (
    <div className={s.item}>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogElements}</div>
        <div className={s.messages}>
          <div>{messagesElements}</div>
          <AddMassageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};
const AddMassageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.textarea}>
      <div>
        <Field
          component={Textarea}
          name="newMessageBody"
          placeholder="Enter message"
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};
const AddMassageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMassageForm
);
export default Dialogs;

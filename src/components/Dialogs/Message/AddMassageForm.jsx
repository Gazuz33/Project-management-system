import {Formik, Form, Field, ErrorMessage} from "formik";
const AddMassageForm = (props) => {
  let addNewMessage = (values) => {
    props.sendMessage(values);
  };

  return (
    <Formik
      initialValues={{
        newMessageBody: "",
      }}
      onSubmit={(values, { resetForm }) => {
        addNewMessage(values.newMessageBody);
        resetForm({ values: "" });
      }}
    >
      {() => (
        <Form>
          <div>
            <Field
              name={"newMessageBody"}
              as={"textarea"}
              placeholder={"enter text"}
            />
          </div>

          <button type={"submit"}>Send2</button>
        </Form>
      )}
    </Formik>
  );
};
export default AddMassageForm;

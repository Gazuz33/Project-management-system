import s from "./FormsControls.module.css";

const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>
        <textarea {...input} {...props} cols="50" rows="5" />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>
        <input {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
export default Textarea;

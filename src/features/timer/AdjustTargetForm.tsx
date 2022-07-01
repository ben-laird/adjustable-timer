import { FC } from "react";
import { Field, Form } from "react-final-form";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../app/store";
import { adjustTarget, DayDelta } from "./timerSlice";

const AdjustTargetForm: FC<ConnectedProps<typeof connector>> = (props) => {
  const onSubmit = (vals: FormData) => {
    const payload: DayDelta = { value: 1, unit: "minute" };
    props.adjustTarget(payload);
  };

  return (
    <Form onSubmit={onSubmit}>
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <Field name="deltaValue">
            {(props) => <input {...props.input} />}
          </Field>
          <Field name="deltaUnit">
            {(props) => <select {...props.input} />}
          </Field>
          <button type="submit">Adjust Target Time</button>
        </form>
      )}
    </Form>
  );
};

const connector = connect(
  (state: RootState) => {
    return { state };
  },
  { adjustTarget }
);

export default connector(AdjustTargetForm);

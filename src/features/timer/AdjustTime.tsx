import { Field, Form } from "react-final-form";
import { connect } from "react-redux";
import { RootState } from "../../app/store";
import { adjustTarget, DayDelta } from "./timerSlice";

type AdjustTimeProps = ReturnType<typeof mapState> & typeof mapDispatch;

const AdjustTime = (props: AdjustTimeProps) => {
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

const mapState = (state: RootState) => {
  return { state };
};

const mapDispatch = { adjustTarget };

export default connect(mapState, mapDispatch)(AdjustTime);

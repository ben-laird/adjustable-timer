import { connect } from "react-redux";
import { RootState } from "../../app/store";

type AdjustTimeProps = ReturnType<typeof mapState> & typeof mapDispatch;

const AdjustTime = (props: AdjustTimeProps) => {
  return <div>Adjust Time</div>;
};

const mapState = (state: RootState) => {
  return { state };
};

const mapDispatch = {};

export default connect(mapState, mapDispatch)(AdjustTime);

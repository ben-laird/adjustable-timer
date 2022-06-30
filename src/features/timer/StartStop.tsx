import { Alert, Button, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { RootState } from "../../app/store";
import { flipCounting } from "./timerSlice";

type StartStopProps = ReturnType<typeof mapState> & typeof mapDispatch;

const StartStop = (props: StartStopProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    props.flipCounting();
    setOpen(true);
  };

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" size="large" onClick={handleClick}>
        {`${props.isCounting ? "Stop" : "Start"}`} Timer
      </Button>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          The timer has {`${props.isCounting ? "started!" : "stopped!"}`}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

const mapState = (state: RootState) => {
  return { isCounting: state.timerSlice.isCounting };
};

const mapDispatch = { flipCounting };

export default connect(mapState, mapDispatch)(StartStop);

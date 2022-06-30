import { StartRounded, Stop } from "@mui/icons-material";
import { Alert, Button, Grid, Snackbar } from "@mui/material";
import { Fragment, SyntheticEvent, useState } from "react";
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

  const handleClose = (_event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <Fragment>
      <Grid container={true} justifyContent="center" margin={2}>
        <Button
          variant="contained"
          size="large"
          onClick={handleClick}
          color={`${props.isCounting ? "error" : "success"}`}
          startIcon={props.isCounting ? <Stop /> : <StartRounded />}
        >
          {`${props.isCounting ? "Stop" : "Start"}`} Timer
        </Button>
      </Grid>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          The timer has {`${props.isCounting ? "started!" : "stopped!"}`}
        </Alert>
      </Snackbar>
    </Fragment>
  );
};

const mapState = (state: RootState) => {
  return { isCounting: state.timerSlice.isCounting };
};

const mapDispatch = { flipCounting };

export default connect(mapState, mapDispatch)(StartStop);

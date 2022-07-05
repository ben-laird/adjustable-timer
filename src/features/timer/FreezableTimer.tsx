import { Box, Button } from "@mui/material";
import { FC, ReactNode, useState } from "react";
import Timer from "./Timer";

type FreezableTimerProps = {
  dateCode: string;
  durationCode: string;
  children?: ReactNode;
};

const FreezableTimer: FC<FreezableTimerProps> = (props) => {
  const [freeze, setFreeze] = useState(true);
  return (
    <Timer {...props} freeze={freeze}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          variant="outlined"
          size="small"
          color={`${freeze ? "success" : "primary"}`}
          sx={{ margin: 2 }}
          onClick={() => setFreeze(!freeze)}
        >
          Turn {`${freeze ? "off" : "on"}`} Freeze Mode
        </Button>
        {props.children}
      </Box>
    </Timer>
  );
};

export default FreezableTimer;

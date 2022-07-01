import { Box, Button } from "@mui/material";
import { FC, ReactNode, useState } from "react";
import Timer from "./Timer";

type DrStrangeModeTimerProps = {
  dateCode: string;
  durationCode: string;
  children?: ReactNode;
};

const DrStrangeModeTimer: FC<DrStrangeModeTimerProps> = (props) => {
  const [drStrangeMode, setDrStrangeMode] = useState(true);
  return (
    <Timer {...props} drStrangeMode={drStrangeMode}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          variant="outlined"
          size="small"
          color={`${drStrangeMode ? "success" : "primary"}`}
          sx={{ margin: 2, padding: 0, width: 0 }}
          onClick={() => setDrStrangeMode(!drStrangeMode)}
        >
          Turn {`${drStrangeMode ? "off" : "on"}`} Dr. Strange Mode
        </Button>
        {props.children}
      </Box>
    </Timer>
  );
};

export default DrStrangeModeTimer;

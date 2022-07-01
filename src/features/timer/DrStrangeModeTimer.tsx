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
      <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
        <Button
          variant="text"
          size="small"
          color={`${drStrangeMode ? "success" : "primary"}`}
          sx={{margin: 2, padding: 0}}
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

import { ButtonGroup, Stack } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import AdjustTarget, { AdjustTargetBaseProps } from "./AdjustTarget";

type TargetAdjustersProps = { adjusters: Array<AdjustTargetBaseProps> };

const TargetAdjusters = (props: TargetAdjustersProps) => {
  const set = props.adjusters.map(({ delta, text }) => (
    <AdjustTarget key={nanoid()} delta={delta} text={text} />
  ));
  return (
    <ButtonGroup
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        margin: 2,
      }}
    >
      {set}
    </ButtonGroup>
  );
};

export default TargetAdjusters;

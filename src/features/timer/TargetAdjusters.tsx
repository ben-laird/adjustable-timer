import { Stack } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import AdjustTarget, { AdjustTargetBaseProps } from "./AdjustTarget";

type TargetAdjustersProps = { adjusters: Array<AdjustTargetBaseProps> };

const TargetAdjusters = (props: TargetAdjustersProps) => {
  const set = props.adjusters.map(({ delta, text }) => (
    <AdjustTarget key={nanoid()} delta={delta} text={text} />
  ));
  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent="center"
      alignItems="flex-start"
    >
      {set}
    </Stack>
  );
};

export default TargetAdjusters;

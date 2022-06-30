import { ListItemButton, Stack } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import AdjustTarget, { AdjustTargetBaseProps } from "./AdjustTarget";

type TargetAdjustersProps = { adjusters: Array<AdjustTargetBaseProps> };

const TargetAdjusters = (props: TargetAdjustersProps) => {
  const set = props.adjusters.map(({ delta, text }) => (
    <ListItemButton key={nanoid()}>
      <AdjustTarget delta={delta} text={text} />
    </ListItemButton>
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

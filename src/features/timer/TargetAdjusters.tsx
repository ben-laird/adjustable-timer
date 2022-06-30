import { ListItemButton, Stack } from "@mui/material";
import AdjustTarget, { AdjustTargetBaseProps } from "./AdjustTarget";

type TargetAdjustersProps = { adjusters: Array<AdjustTargetBaseProps> };

const TargetAdjusters = (props: TargetAdjustersProps) => {
  const set = props.adjusters.map(({ delta, text }) => (
    <ListItemButton>
      <AdjustTarget delta={delta} text={text} />
    </ListItemButton>
  ));
  return (
    <Stack direction="row" spacing={1}>
      {set}
    </Stack>
  );
};

export default TargetAdjusters;

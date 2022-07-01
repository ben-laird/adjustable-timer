import { ButtonGroup } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { FC } from "react";
import AdjustTarget, { AdjustTargetProps } from "./AdjustTarget";

type TargetAdjustersProps = { adjusters: Array<AdjustTargetProps> };

const TargetAdjusters: FC<TargetAdjustersProps> = (props) => {
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

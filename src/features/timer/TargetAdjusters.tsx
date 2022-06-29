import AdjustTarget, { AdjustTargetBaseProps } from "./AdjustTarget";

type TargetAdjustersProps = { adjusters: Array<AdjustTargetBaseProps> };

const TargetAdjusters = (props: TargetAdjustersProps) => {
  const set = props.adjusters.map(({ delta, text }) => (
    <AdjustTarget delta={delta} text={text} />
  ));
  return <div>{set}</div>;
};

export default TargetAdjusters;

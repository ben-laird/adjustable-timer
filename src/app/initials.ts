import dayjs from "dayjs";

const initialState = {
  currentTime: dayjs(),
  targetTime: dayjs().add(5, "minute"),
  tMinus: dayjs.duration(5, "minutes"),
  isCounting: false,
};

const initialDrStrangeMode = true;

export {initialDrStrangeMode, initialState}

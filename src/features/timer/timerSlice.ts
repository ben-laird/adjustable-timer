import { createSlice, PayloadAction as Act } from "@reduxjs/toolkit";
import dayjs, { Dayjs, ManipulateType } from "dayjs";
import duration from "dayjs/plugin/duration";

type DayAddAct = Act<{ value: number; unit: ManipulateType }>;
type timerSlIS = typeof initialState;

dayjs.extend(duration);

const getDuration = (time1: Dayjs, time2: Dayjs) =>
  dayjs.duration(time1.diff(time2));

const initialState = {
  currentTime: dayjs(),
  targetTime: dayjs().add(5, "minute"),
  tMinus: dayjs.duration(5, "minutes"),
  isCounting: false,
};

export default createSlice({
  name: "timer",
  initialState,
  reducers: {
    advanceTime: (state, action: DayAddAct) => {
      const { value, unit } = action.payload;
      const { currentTime, targetTime, isCounting } = state;

      state.currentTime = dayjs();
      if (!isCounting) state.targetTime = targetTime.add(value, unit);
      state.tMinus = getDuration(currentTime, targetTime);
    },
    setTarget: (state, action: Act<Dayjs>) => {
      const isValid = true;
    },
    adjustTarget: (state, action: DayAddAct) => {
      const { value, unit } = action.payload;
      state.targetTime = state.targetTime.add(value, unit);
      state.tMinus = dayjs.duration(state.currentTime.diff(state.targetTime));
    },
    setCounting: (state, action: Act<boolean>) => {
      state.isCounting = action.payload;
    },
    flipCounting: (state) => {
      state.isCounting = !state.isCounting;
    },
  },
});

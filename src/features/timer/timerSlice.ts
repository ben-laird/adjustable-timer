import { createSlice, nanoid, PayloadAction as Act } from "@reduxjs/toolkit";
import dayjs, { Dayjs, ManipulateType } from "dayjs";
import duration from "dayjs/plugin/duration";

export type DayDelta = { value: number; unit: ManipulateType };
type DayAddAct = Act<DayDelta>;

dayjs.extend(duration);

const initialState = {
  currentTime: dayjs(),
  targetTime: dayjs().add(5, "minute"),
  tMinus: dayjs.duration(5, "minutes"),
  isCounting: false,
};

const getDuration = (initialTime: Dayjs, finalTime: Dayjs) =>
  dayjs.duration(finalTime.diff(initialTime));

const slice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    advanceTimeBy: (state, action: DayAddAct) => {
      const { value, unit } = action.payload;
      const { currentTime, targetTime, isCounting } = state;

      state.currentTime = currentTime.add(value, unit);
      if (!isCounting) state.targetTime = targetTime.add(value, unit);
      state.tMinus = getDuration(currentTime, targetTime);
    },
    setTarget: {
      reducer: (state, action: Act<Dayjs>) => {
        state.targetTime = action.payload;
        state.tMinus = getDuration(state.currentTime, state.targetTime)
      },
      prepare: (_state, action: Act<Dayjs>) => {
        return { meta: { id: nanoid() }, payload: action.payload };
      },
    },
    adjustTarget: (state, action: DayAddAct) => {
      const { value, unit } = action.payload;
      const { currentTime } = state;

      state.targetTime = state.targetTime.add(value, unit);
      state.tMinus = getDuration(currentTime, state.targetTime);
    },
    setCounting: (state, action: Act<boolean>) => {
      state.isCounting = action.payload;
    },
    flipCounting: (state) => {
      state.isCounting = !state.isCounting;
    },
  },
});

export default slice.reducer;
export const {
  advanceTimeBy,
  setTarget,
  adjustTarget,
  setCounting,
  flipCounting,
} = slice.actions;

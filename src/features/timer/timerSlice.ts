import { createSlice, PayloadAction as Act } from "@reduxjs/toolkit";
import dayjs, { ManipulateType } from "dayjs";

type AddAction = Act<{ value: number; unit: ManipulateType }>;

const initialState = {
  currentTime: dayjs(),
  targetTime: dayjs().add(5, "minute"),
  tMinus: 5,
  isCounting: false,
};

export default createSlice({
  name: "timer",
  initialState,
  reducers: {
    advanceTime: (state, action: AddAction) => {
      const { value, unit } = action.payload;
      state.currentTime = dayjs();
      if (!state.isCounting)
        state.targetTime = state.targetTime.add(value, unit);
      state.tMinus = state.currentTime.diff(state.targetTime, "seconds");
    },
    adjustTarget: (state, action: AddAction) => {
      const { value, unit } = action.payload;
      state.targetTime = state.targetTime.add(value, unit);
    },
    setCounting: (state, action: Act<boolean>) => {
      state.isCounting = action.payload;
    },
    flipCounting: (state) => {
      state.isCounting = !state.isCounting;
    },
  },
});

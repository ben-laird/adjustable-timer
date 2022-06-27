import { createSlice, PayloadAction as Act } from "@reduxjs/toolkit";
import dayjs, { ManipulateType } from "dayjs";

type AddAction = Act<{ value: number; unit: ManipulateType }>;

const initialState = {
  currentTime: dayjs(),
  targetTime: dayjs().add(5, "minute"),
  tMinus: 5,
  counting: true,
};

export default createSlice({
  name: "timer",
  initialState,
  reducers: {
    advance: (state, _action) => {
      state.currentTime = dayjs();
      if (!state.counting) state.targetTime = state.targetTime.add(1, "second");
      state.tMinus = state.currentTime.diff(state.targetTime, "seconds");
    },
    adjust: (state, action: AddAction) => {
      const { value, unit } = action.payload;
      state.targetTime = state.targetTime.add(value, unit);
    },
    setCounting: (state, action: Act<boolean>) => {
      state.counting = action.payload
    }
  },
});

// reducers/counterReducer.ts
import { StateType, ActionType } from "../types/index";

export const initialState: StateType = {
  count: 0,
};

export const counterReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "Increament":
      return { count: state.count + action.payload };
    case "Decreament":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

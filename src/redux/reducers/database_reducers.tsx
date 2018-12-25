import { GetAction } from "../types";

interface IAction {
  payload: [];
  type: GetAction;
}
interface IState {
  err: string;
  payload: any;
}
let initalReducer: IState = { err: "false", payload: [] };
//inital
export function databaseReducer(
  state: IState = initalReducer,
  action: IAction
) {
  switch (action.type) {
    case GetAction.GET_DATABASE_SIMPLE:
      return action.payload;
    default:
      return state;
  }
}

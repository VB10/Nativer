import { GetAction } from "../types";

interface IAction {
  payload: [];
  bar: any;
  type: GetAction;
}
interface IState {
  err: string;
  payload: any;
}
let initalReducer: IState = { err: "false", payload: [] };
//inital
export function databaseReducer(
  state: IState | any = initalReducer,
  action: IAction
) {
  switch (action.type) {
    case GetAction.getDatabaseSimple:
      return action.payload;
    case GetAction.postData:
      return action.payload;
    default:
      return state;
  }
}

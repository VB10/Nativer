import { GetAction } from "../types";


export const changeBarType = (_bool: boolean) => {
  //api call
  return { type: GetAction.changeBar, payload: _bool };
};

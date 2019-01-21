import { GetAction } from "../types";

interface IAction {
    payload: any;
    bar: any;
    type: GetAction;
}
interface IState {
    payload: any;
}
let initalReducer: IState = { payload: false };
//inital
export function barReducer(
    state: IState | any = initalReducer,
    action: IAction
) {
    switch (action.type) {
        case GetAction.changeBar:
            return action.payload;
        default:
            return state;
    }
}

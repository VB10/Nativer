import { GetAction } from "../types";
import { firebase } from "./index";
import { RNFirebase } from "react-native-firebase";

export function addUserFeed(value: NewsFeedChild) {
console.log("ok")
  return (dispatch: any) => {
    firebase
      .database()
      .ref("articles/")
      .push(value, (result) => {
        console.log(result);

        
        if (result === null) {
          return dispatch({
            type: GetAction.Failure,
            payload: GetAction.Failure
          });
        }
        return dispatch({
          type: GetAction.postData,
          payload: result!.code
        });
      })
      .then((data) => {
        //TODO fıx result..
        console.log("geldiii",data);
      })
      .catch((err: string) => {
        return dispatch({
          type: GetAction.Failure,
          payload: err
        });
      });
  };
}


export function postImage(value: NewsFeedChild) {
  console.log(value.data)
    firebase
      .storage()
      .ref('/uploadOk.jpeg')
      .putFile(
        `${value.data}`
      )
      .then((val) => {
        //TODO fix return download url 
        console.log("success")
      })
      .catch((err) => {
      
        console.log(`${err} fail`)
      })
}
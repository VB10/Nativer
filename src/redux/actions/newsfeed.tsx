import { GetAction } from "../types";
import { firebase } from "./index";
import { RNFirebase } from "react-native-firebase";

export function addUserFeed(value: NewsFeedChild) {
  console.log("ok");
  //image name post
  return (dispatch: any) => {
    firebase
      .database()
      .ref("articles/")
      .push({ data: value.data, image: "" }, result => {
        console.log(result, "1111212");

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
      .then(data => {
        //TODO fıx result..

  

        if (value.image) {
          postImage({ data: data.key, image: value.image });
        } else {
          console.log("not found image");
        }
      })
      .catch((err: string) => {
        return dispatch({
          type: GetAction.Failure,
          payload: err
        });
      });
  };
}

interface IStroage {
  ref: string;
  key: string;
  child: string;
  downloadUrl: string;
}
//push image download url
async function postReData(val: IStroage) {
  const response = await firebase
    .database()
    .ref(`${val.ref}/${val.key}/${val.child}`)
    .set(val.downloadUrl, err => {})
    .then(val => {
      return true;
    })
    .catch(() => {
      return false;
    });

  return response;
}

async function postImage(value: NewsFeedChild) {
  console.log(value.data);
  const imageDownload = await firebase
    .storage()
    .ref(`${value.data}.jpg`)
    .putFile(`${value.image}`)
    .then(val => {
      //TODO fix return download url  and android fix

      console.log("success");
      return val.downloadURL;
    })
    .catch(err => {
      console.log(`${err} fail`);
      return null;
    });

  if (imageDownload) {
    return await postReData({
      child: "image",
      downloadUrl: imageDownload,
      ref: "articles",
      key: value.data
    });
  } else {
    console.log("err", imageDownload);
  }
  return false;
}

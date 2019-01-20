import firebase from "react-native-firebase";
import { GetAction } from "../types";
import { DataSnapshot } from "react-native-firebase/database";

export function getDatabase() {
  return (dispatch: any) => {
    firebase
      .database()
      .ref("articles/")
      .once("value", function(snapshot) {
        //default deger ataması için any
        let arrArticles: [Articles] | any = [];
        console.log(snapshot.val(),"gelen")
        //gelen datalar keyvalue geldiğinde bunları standart bir yapıya çevriyoruz
        snapshot.forEach((data: DataSnapshot) => {
          if (!data.key) return true;
          arrArticles.push({ key: data.key, data: data.val() });
          return false;
        });
        return dispatch({
          type: GetAction.getDatabaseSimple,
          payload: arrArticles
        });
      })
      .catch((err: string) => {
        return dispatch({
          type: GetAction.Failure,
          payload: err
        });
      });
  };
}


export function logout() {}

// }
// export const addTodo = () => {

//     return (dispatch,getState) => {
//       dispatch(addTodoStarted());

//       axios
//         .post(`https://jsonplaceholder.typicode.com/todos`, {
//           title,
//           userId,
//           completed: false
//         })
//         .then(res => {
//           dispatch(addTodoSuccess(res.data));
//         })
//         .catch(err => {
//           dispatch(addTodoFailure(err.message));
//         });
//     };
//   };

// //   const addTodoSuccess = todo => ({
// //     type: GetAction.GET_DATABASE_SIMPLE,
// //     payload: {
// //       ...todo
// //     }
// //   });

// //   const addTodoStarted = () => ({
// //     type: ADD_TODO_STARTED
// //   });

// //   const addTodoFailure = error => ({
// //     type: ADD_TODO_FAILURE,
// //     payload: {
// //       error
// //     }
//   });

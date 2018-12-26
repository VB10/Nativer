import firebase from "react-native-firebase";
import { GetAction } from "../types";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { DataSnapshot } from "react-native-firebase/database";



export function getDatabase() {
  return (dispatch: any) => {
    firebase
      .database()
      .ref("articles/")
      .once("value", function(snapshot) {
        let arrArticles: [Articles] = [];
        snapshot.forEach((a: DataSnapshot) => {
          if (!a.key) return true;
          arrArticles.push({ key: a.key, data: a.val() });
          return false;
        });

        return dispatch({
          type: GetAction.GET_DATABASE_SIMPLE,
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

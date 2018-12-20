
import firebase from "react-native-firebase";
import { GetAction } from '../types'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';



export function getDatabase() {
  
  return (dispatch: any) => {
    firebase.database().ref('articles/').once('value', function (snapshot) {
      console.log("bb")

      return dispatch({
        type: GetAction.GET_DATABASE_SIMPLE,
        payload : snapshot.toJSON()
      })
    }).catch((err: string) => {
      return dispatch({
        type: GetAction.Failure,
        payload : err
      })
    });
  }

}

export function logout() {
  
}

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
import firebase from "react-native-firebase";

export function getDatabase() {
    firebase.database().ref('articles/').once('value', function (snapshot) {
        console.log(snapshot.toJSON())
    });

}

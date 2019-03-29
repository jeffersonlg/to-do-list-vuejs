import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBvgNV5QEFP35pb8HeOJtKOa8JGis1l2lM",
    authDomain: "to-do-list-da0bf.firebaseapp.com",
    databaseURL: "https://to-do-list-da0bf.firebaseio.com",
    projectId: "to-do-list-da0bf",
    storageBucket: "to-do-list-da0bf.appspot.com",
    messagingSenderId: "397372089790"
}

firebase.initializeApp(config)
/** Firebasen asennus projektiin */

import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBISzxrFThKjWQOIcEe1I3MCg3HmuxqiM8",
  authDomain: "kotisivu-7dafd.firebaseapp.com",
  databaseURL: "https://kotisivu-7dafd.firebaseio.com",
  projectId: "kotisivu-7dafd",
  storageBucket: "kotisivu-7dafd.appspot.com",
  messagingSenderId: "675550035504",
  appId: "1:675550035504:web:2e40ac9c7e3bffe98af7f5",
  measurementId: "G-9ZT43FJW1N"
}

const firebaseApp = firebase.initializeApp(
  firebaseConfig)
const firebaseAuth = firebaseApp.auth()
const firebaseDb = firebaseApp.database()
export { firebaseAuth, firebaseDb }

/*
const firebaseConfig = {
  apiKey: "AIzaSyBISzxrFThKjWQOIcEe1I3MCg3HmuxqiM8",
  authDomain: "kotisivu-7dafd.firebaseapp.com",
  databaseURL: "https://kotisivu-7dafd.firebaseio.com",
  projectId: "kotisivu-7dafd",
  storageBucket: "kotisivu-7dafd.appspot.com",
  messagingSenderId: "675550035504",
  appId: "1:675550035504:web:2e40ac9c7e3bffe98af7f5",
  measurementId: "G-9ZT43FJW1N"
}

const firebaseApp = firebase.initializeApp(
  firebaseConfig)
const firebaseAuth = firebaseApp.auth()

firebase.analytics()

export { firebaseAuth }
*/

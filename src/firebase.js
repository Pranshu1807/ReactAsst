// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBsofdc7yLaor3aXWvVbFvguw8avwXYmo",
  authDomain: "reactassignment-ce911.firebaseapp.com",
  databaseURL: "https://reactassignment-ce911-default-rtdb.firebaseio.com",
  projectId: "reactassignment-ce911",
  storageBucket: "reactassignment-ce911.appspot.com",
  messagingSenderId: "502588488654",
  appId: "1:502588488654:web:cb204475d077d7791b899f",
  measurementId: "G-EWV0LBJ93F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const auth = getAuth(app);

export const auth = getAuth(app);
export default app;

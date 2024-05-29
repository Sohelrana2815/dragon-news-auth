// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcwLcvUDeasGPCC6TDuWu3EZF8Ij0HFWc",
  authDomain: "dragon-news-auth-2de0f.firebaseapp.com",
  projectId: "dragon-news-auth-2de0f",
  storageBucket: "dragon-news-auth-2de0f.appspot.com",
  messagingSenderId: "19495644516",
  appId: "1:19495644516:web:35753079f3546623459e71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

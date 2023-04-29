// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlxv_GwU-wuLxAETEwqD-SB4nhsxb0QKo",
  authDomain: "the-news-dragon-aafec.firebaseapp.com",
  projectId: "the-news-dragon-aafec",
  storageBucket: "the-news-dragon-aafec.appspot.com",
  messagingSenderId: "130520290952",
  appId: "1:130520290952:web:1c544d4342b0a56ad4f13d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
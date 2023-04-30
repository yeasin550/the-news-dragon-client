// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration 
// console.log("environment variables", import.meta.env.VITE_APIKEY);
const firebaseConfig = {
  //   apiKey: "AIzaSyBlxv_GwU-wuLxAETEwqD-SB4nhsxb0QKo",
  // authDomain: "the-news-dragon-aafec.firebaseapp.com",
  // projectId: "the-news-dragon-aafec",
  // storageBucket: "the-news-dragon-aafec.appspot.com",
  // messagingSenderId: "130520290952",
  // appId: "1:130520290952:web:1c544d4342b0a56ad4f13d"

  apiKey: "AIzaSyBlxv_GwU-wuLxAETEwqD-SB4nhsxb0QKo",
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;




// apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,
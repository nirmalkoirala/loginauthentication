import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBEzVrj5Om4krwu6n6IbzDmYtZIWzSZPdg",
    authDomain: "authentication-2acf0.firebaseapp.com",
    projectId: "authentication-2acf0",
    storageBucket: "authentication-2acf0.appspot.com",
    messagingSenderId: "1098441690605",
    appId: "1:1098441690605:web:a98f371cc4bc7f81046be4",
    measurementId: "${config.measurementId}"
  };

  const app = initializeApp(firebaseConfig)

  export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import 'firebase/firebase-database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBntkpStO08g84WquuFz_7r7Fj0XKrVvpI",
    authDomain: "my-project-dacbc.firebaseapp.com",
    projectId: "my-project-dacbc",
    storageBucket: "my-project-dacbc.appspot.com",
    messagingSenderId: "436570996186",
    appId: "1:436570996186:web:fba92c5bfff44bd42094e3"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig).database();

export const todosDB = db.ref('todos');
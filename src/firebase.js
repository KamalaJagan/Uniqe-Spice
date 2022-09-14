import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB49OPgGDHG81sYeBascuqZlqoYP3RMtxQ",
  authDomain: "uniqe-spice.firebaseapp.com",
  projectId: "uniqe-spice",
  storageBucket: "uniqe-spice.appspot.com",
  messagingSenderId: "525596327659",
  appId: "1:525596327659:web:b917fde63701e055e908ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
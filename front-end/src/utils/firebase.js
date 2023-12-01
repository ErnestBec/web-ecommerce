// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC268ryv8Ee-iWyaHiDU4twDnrk1Pl5lKs",
  authDomain: "ecommerce-nuevaera.firebaseapp.com",
  projectId: "ecommerce-nuevaera",
  storageBucket: "ecommerce-nuevaera.appspot.com",
  messagingSenderId: "729213028971",
  appId: "1:729213028971:web:02a6922948b45b1a317f2e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export default app;

// apiKey: "AIzaSyABzk2HFkGWEd8NIxnmkoS6pUyLtrZkPoI",
// authDomain: "ecommerce-ae422.firebaseapp.com",
// projectId: "ecommerce-ae422",
// storageBucket: "ecommerce-ae422.appspot.com",
// messagingSenderId: "487414085735",
// appId: "1:487414085735:web:2b1ca008721e1b04d1fcc2",
// apiKey: "AIzaSyC268ryv8Ee-iWyaHiDU4twDnrk1Pl5lKs",
//   authDomain: "ecommerce-nuevaera.firebaseapp.com",
//   projectId: "ecommerce-nuevaera",
//   storageBucket: "ecommerce-nuevaera.appspot.com",
//   messagingSenderId: "729213028971",
//   appId: "1:729213028971:web:02a6922948b45b1a317f2e"

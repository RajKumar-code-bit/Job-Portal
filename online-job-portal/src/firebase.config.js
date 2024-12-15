// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBE7FwoyG_rHVV2Ol3pZ2hhAihKngnjPk",
  authDomain: "online-job-portal-skillspire.firebaseapp.com",
  projectId: "online-job-portal-skillspire",
  storageBucket: "online-job-portal-skillspire.firebasestorage.app",
  messagingSenderId: "417068264252",
  appId: "1:417068264252:web:a225310e99e42a67758c39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firestore
const db = getFirestore(app);

export {db} 
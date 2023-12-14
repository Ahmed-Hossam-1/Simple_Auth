import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAfreOLaXEmDytFZRXT9E8wV0ImCajdYGo",
  authDomain: "newauth-e6f9f.firebaseapp.com",
  projectId: "newauth-e6f9f",
  storageBucket: "newauth-e6f9f.appspot.com",
  messagingSenderId: "497000968913",
  appId: "1:497000968913:web:755817da52d3a53fef4bf0",
  measurementId: "G-F6F41JF4QK",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

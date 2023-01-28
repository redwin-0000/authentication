
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyD4yHB3chNMHzNYAdv3jPCDLyxYhbZ9bjE",
  authDomain: "todo-8b246.firebaseapp.com",
  projectId: "todo-8b246",
  storageBucket: "todo-8b246.appspot.com",
  messagingSenderId: "10819512967",
  appId: "1:10819512967:web:3c46e1d1ed4356df036622",
  measurementId: "G-SQP20QM8SN"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};
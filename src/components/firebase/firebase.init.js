import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initialAuthnitcation=()=>{

    initializeApp(firebaseConfig)
}
export default initialAuthnitcation
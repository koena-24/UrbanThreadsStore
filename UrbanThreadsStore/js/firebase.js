import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {
    getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCNAsOb48O1pA387wGjLPNmf5g0JmAIaNE",
    authDomain: "urbanthreadsstore-f8e37.firebaseapp.com",
    projectId: "urbanthreadsstore-f8e37",
    storageBucket: "urbanthreadsstore-f8e37.firebasestorage.app",
    messagingSenderId: "357503653662",
    appId: "1:357503653662:web:654c29821df7a837f69b0f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
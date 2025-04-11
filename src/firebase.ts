// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator, type Auth } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCx0kUXqfvE66BfYRFEgAGo6wdRUiVlM1E",
  authDomain: "prototype-6ada4.firebaseapp.com", 
  projectId: "prototype-6ada4",
  storageBucket: "prototype-6ada4.firebasestorage.app",
  messagingSenderId: "508555070761",
  appId: "1:508555070761:web:4b8a66e504cc13af0dfb38",
  measurementId: "G-6L5VVYGT2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
// Initialize Firebase services
const analytics = getAnalytics(app);
const auth: Auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Connect to emulators if running locally
if (window.location.hostname === 'localhost') {
  // connectAuthEmulator(auth, 'http://localhost:9099');
  // connectFirestoreEmulator(db, 'localhost', 8080);
  // connectStorageEmulator(storage, 'localhost', 9199');
}

// Export initialized services
export { analytics, auth, db, storage };
export default app;
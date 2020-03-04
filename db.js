import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
  .initializeApp({ projectId: "chatti-1fdd8" })
  .firestore();

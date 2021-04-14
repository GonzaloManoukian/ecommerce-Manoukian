import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCX5k1vaVlg8FsOeJq_D4YX9ec7n7nBV2g",
    authDomain: "ecommerce-manoukian.firebaseapp.com",
    projectId: "ecommerce-manoukian",
    storageBucket: "ecommerce-manoukian.appspot.com",
    messagingSenderId: "77472065461",
    appId: "1:77472065461:web:0ed650b6ae30593219dbfc"
});

export const getFirebase = () => {
    return app;
} 

export const getFirestore = () => {
    return firebase.firestore(app)
}
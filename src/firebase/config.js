// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDirXtqU2ovABfoz6OhO8JOZn-caoSVPXc',
	authDomain: 'react-practica-374fc.firebaseapp.com',
	projectId: 'react-practica-374fc',
	storageBucket: 'react-practica-374fc.appspot.com',
	messagingSenderId: '175497923066',
	appId: '1:175497923066:web:f93aa5d36ce0710e81bc43'
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

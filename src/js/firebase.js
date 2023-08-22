import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC0dckUJhZKNZ3ZQs0bWnTujGkf1yG2OHs',
  authDomain: 'noteballs-cb7a3.firebaseapp.com',
  projectId: 'noteballs-cb7a3',
  storageBucket: 'noteballs-cb7a3.appspot.com',
  messagingSenderId: '1041692962803',
  appId: '1:1041692962803:web:917f436cda9b8189b2ec86',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db};

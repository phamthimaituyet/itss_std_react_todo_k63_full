import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBDZtjN-lDrcf9pVFLaBHVa2djQqhv5tUM",
  authDomain: "fir-sample-2fa9b.firebaseapp.com",
  projectId: "fir-sample-2fa9b",
  storageBucket: "fir-sample-2fa9b.appspot.com",
  messagingSenderId: "292492282041",
  appId: "1:292492282041:web:4b7906600a07671e92f368"
};

firebase.initializeApp(firebaseConfig);
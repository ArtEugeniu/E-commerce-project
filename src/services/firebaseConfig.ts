import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDl-ly7VTe57Ca2nqn7n6nTiYtxIrvT4jg', 
  authDomain: 'e-commerce-2bbfa.firebaseapp.com',
  projectId: 'e-commerce-2bbfa',
  storageBucket: 'e-commerce-2bbfa.appspot.com',
  messagingSenderId: '685320679685',
  appId: '1:685320679685:web:XXXXXX',  
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
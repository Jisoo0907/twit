import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAz3PlzVNWaE_g3Q6uMa_hOfy4pJJUto4A",
  authDomain: "twit-22352.firebaseapp.com",
  projectId: "twit-22352",
  storageBucket: "twit-22352.firebasestorage.app",
  messagingSenderId: "38041092",
  appId: "1:38041092:web:0a9d93c22b46bfa1486751",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // config 옵션을 통한 app 생성

export const auth = getAuth(app); // app에 대한 인증 서비스 사용

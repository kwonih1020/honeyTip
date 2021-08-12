import * as firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyCeAFZoZPRBriEbOeF1y9F25v_4IYPevxk",
    authDomain: "sparta-myhoneytip-ick.firebaseapp.com",
    databaseURL: "https://sparta-myhoneytip-ick.firebaseio.com",
    projectId: "sparta-myhoneytip-ick",
    storageBucket: "sparta-myhoneytip-ick.appspot.com",
    messagingSenderId: "123322742802",
    appId: "1:123322742802:web:22333a1df755a26f1b80cb",
    measurementId: "G-ZWGK1YHRG6"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database();

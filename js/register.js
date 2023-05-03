//------- ------FIREBASE CONFIG-- - ------//
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyC0_84lWmFCV8G3Up6T4-LdMBqO0y7ni50",
    authDomain: "mini-project-ii-e8bef.firebaseapp.com",
    databaseURL: "https://mini-project-ii-e8bef-default-rtdb.firebaseio.com",
    projectId: "mini-project-ii-e8bef",
    storageBucket: "mini-project-ii-e8bef.appspot.com",
    messagingSenderId: "349817714639",
    appId: "1:349817714639:web:7fdedf6694ad5ec2f8c4ba"
  };


// const app = initializeApp(firebaseConfig);
// import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

// const db = getDatabase();

const app = initializeApp(firebaseConfig);
  import { getDatabase, ref, set, child, get }
    from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";

const db = getDatabase();

//-- --variables-//
const name = document.getElementById('nameInp');
const email = document.getElementById('emailInp');
const username = document.getElementById('userInp');
const pass = document.getElementById('passInp');
const submit = document.getElementById('sub_btn');


//--- --VALIDATION---//
function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}

function Validation() {
    let nameregex = /^[a-zA-Z\s]+$/;
    let emailregex = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
    let userregex = /^[a-zA-Z0-9]{5,}$/;

    if (isEmptyOrSpaces(name.value) || isEmptyOrSpaces(email.value) || isEmptyOrSpaces(username.value) ||
        isEmptyOrSpaces(pass.value)) {
        alert("you cannot left any field empty");
        return false;
    }


    if (!nameregex.test(name.value)) {
        alert("the name should only contain alphabets!");
        return false;
    }
    if (!emailregex.test(email.value)) {
        alert("enter a valid email");
        return false;
    }
    if (!userregex.test(username.value)) {
        alert("-username can only be alphanumeric\n-username must be aleast 5 characters\n-username cannot contain spaces");
        return false;
    }

    return true;
}

// //-- -REGISTER USER TO FIREBASE
// function RegisterUser() {

//     if (!Validation()) {
//         return;
//     }
//     const dbRef = ref(db);
//     get(child(dbRef, "UsersList/" + username.value)).then((snapshot) => {
//         if (snapshot.exists()) {
//             alert("Account Already Exist!");
//         }
//         else {
//             set(ref(db, "UsersList/" + username.value),
//                 {
//                     fullname: name.value,
//                     email: email.value,
//                     username: username.value,
//                     password: pass.value
//                 })
//                 .then(() => {
//                     alert("user added successfully");
//                 })
//                 .catch((error) => {
//                     alert("error" + error);
//                     I
//                 })
//         }
//     });
// }

// //-- -ASSIGN THE EVENTS- //

// submit.addEventListener('click', RegisterUser);

import { getAuth, createUserWithEmailAndPassword ,sendEmailVerification}  from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";

const auth = getAuth();


 
    createUserWithEmailAndPassword(auth, e, p)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    sendEmailVerification(user).then(()=>{
      alert("Email verification sent.Email might be in spam folder.Please verify email to sign in.");
        console.log("Email verification sent");
      });
      login();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode,errorMessage);
  });
  
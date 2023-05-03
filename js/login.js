

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



  const app = initializeApp(firebaseConfig);
//   import { getDatabase, ref, set, child, get }
//     from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";

// const db = getDatabase();

// //-- --variables-//
// const username = document.getElementById('userInp');
// const pass = document.getElementById('passInp');
// const submit = document.getElementById('sub_btn');
// // alert(username.value+"dfjknsdkfsndlfkjsd");


// //-- --Authenticate-- --//
// function AuthenticateUser() {
//     const dbRef = ref(db);
//     get(child(dbRef, "UsersList/" + username.value)).then((snapshot)=>{
//         if (snapshot.exists()) {
//             let dpass = snapshot.val().password;
//             if (dpass === pass.value) {
//                 login(snapshot.val());
//             }
//             else {
//                 alert("username or password is invalid");
//             }
//         }
//         else {
//             alert("user does not exist");
//         }
//     });
// }




// //-- -LOGIN-1/1
// function login(user) {
//     let keepLoggedIn = document.getElementById('customSwitch1').checked;
//     if (!keepLoggedIn) {
//         sessionStorage.setItem('user', JSON.stringify(user));
//         window.location = "./index.html";
//         I
//     }
//     else {
//         localStorage.setItem('keepLoggedIn', 'yes');
//         localStorage.setItem('user', JSON.stringify(user));
//         window.location = "./index.html";
//     }
// }

// submit.addEventListener('click', AuthenticateUser);


import { getAuth, signInWithEmailAndPassword , sendEmailVerification,sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";

const auth = getAuth();
var user;
if(sessionStorage.getItem('user')!=null){
  user=JSON.parse(sessionStorage.getItem('user'));
  dp();
}
  var b=document.getElementById("sub_btn");
  b.addEventListener("submit",login);

  function login(event){
    event.preventDefault();
    var e=document.getElementById("userInp").value;
    var p=document.getElementById("passInp").value;
    signInWithEmailAndPassword(auth, e, p)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if(user.emailVerified){
    console.log(user);
    this.user=user;
    sessionStorage.setItem('user',JSON.stringify(user));
    alert('Login Successful');
    display1();
    dp();
    console.log("successful");
  }
  else{
    sendEmailVerification(user).then(()=>{
      alert("Email verification sent.Email might be in spam folder.Please verify email to sign in.");
        console.log("Email verification sent");
      });
  }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode,errorMessage);
  });
  }
  document.getElementById("forgot").addEventListener("click",forgotPassword);
  function forgotPassword(){
    sendPasswordResetEmail(auth,prompt('Enter your email address')).then(()=>{
      alert('password reset mail sent');
      // display1();
    }).catch((error)=>{
      alert(error.message);
    })
   
  }

//stop user from using website if not logged in
  var a=document.getElementsByTagName("a");
  a=Array.from(a);
  a.forEach(element => {
   element.addEventListener('click',check); 
  });

  function check(e){
    if(sessionStorage.getItem('user')==null){
        alert('Please login to continue');
        e.preventDefault();
    }
}

//signout

document.getElementById('signout').addEventListener('click',signout);
document.getElementById('signout2').addEventListener('click',signout);
function signout(){
  sessionStorage.clear();
  location.reload();
}
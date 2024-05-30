// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATAS3UI9DvU5XIXLX1xIFX0iM3kAYr3bc",
  authDomain: "diplom-80aa1.firebaseapp.com",
  projectId: "diplom-80aa1",
  storageBucket: "diplom-80aa1.appspot.com",
  messagingSenderId: "41300454919",
  appId: "1:41300454919:web:9e270e114b0e8c9dcd04a2"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submit = document.getElementsByClassName('loginbut');
submit.addEventListener("click", function (event){
  event.preventDefault()

  // инпуты
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Вs вошли в кабинет!!!")
    window.location.href = "product.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Недоступыне символы!!!")
    // ..
  });
})
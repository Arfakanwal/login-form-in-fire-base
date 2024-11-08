import {
    auth ,
    createUserWithEmailAndPassword ,
    signInWithEmailAndPassword ,
    onAuthStateChanged 
  } from "./firebase.js";
 //______________simple js
 const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})
//_________________________authentication

let signUp = () => {
    let email = document.getElementById("signup-text").value
    let password = document.getElementById("signup-password").value
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
const user = userCredential.user;
console.log(user);

  })
  .catch((error) => {
    console.log(error.message);
  });
}
let sign_up =document.getElementById("signup-text")
sign_up.addEventListener("click" , signUp)

 let signIn = () => {
    let email = document.getElementById("signin-email").value
    let password = document.getElementById("signin-password").value
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
const user = userCredential.user;
console.log(user);

  })
  .catch((error) => {
    console.log(error.message);
  });
}
let sign_In =document.getElementById(" signin-email")
sign_In.addEventListener("click" ,  signIn) 

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
  
  } else {
  console.log("User not found")
  }
});



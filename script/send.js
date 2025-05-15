// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBy46wt0heShQCa5z8w3k-lVzX4erkZyes",
authDomain: "farewell-note-165.firebaseapp.com",
projectId: "farewell-note-165",
storageBucket: "farewell-note-165.firebasestorage.app",
messagingSenderId: "953258633738",
appId: "1:953258633738:web:464bcf32292a8dd63f0df3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const btn_send = document.getElementById("sendBtn");

btn_send.addEventListener("click", () => {
  const inputName = document.getElementById("inputName").value;

  const inputFeel = document.getElementById("inputFeel").value;

  const inputMemories = document.getElementById("inputMemories").value;

  var inputNote = document.getElementById("inputNote").value;

  addDoc(collection(db, "users"), {
    Name: inputName,
    Feel: inputFeel,
    Memories: inputMemories,
    Note: inputNote
  });

  window.location.href = "xiexie-en.html";
});
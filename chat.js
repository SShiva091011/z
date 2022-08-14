// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDpsjOdY6qPddZGluau1TKp0w6ZzSHmE90",
    authDomain: "chat-web-841e3.firebaseapp.com",
    databaseURL: "https://chat-web-841e3-default-rtdb.firebaseio.com",
    projectId: "chat-web-841e3",
    storageBucket: "chat-web-841e3.appspot.com",
    messagingSenderId: "1037803605524",
    appId: "1:1037803605524:web:64b8da68d50108aff8a101"
  };
  
 

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */

    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}




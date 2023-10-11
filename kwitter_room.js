const firebaseConfig = {
      apiKey: "AIzaSyBvbzK_dCTwrP7DNxujG1ipYfL-HQUeQ0U",
      authDomain: "kwitter-c67a4.firebaseapp.com",
      databaseURL: "https://kwitter-c67a4-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "kwitter-c67a4",
      storageBucket: "kwitter-c67a4.appspot.com",
      messagingSenderId: "1050342021615",
      appId: "1:1050342021615:web:6598292780ebeabf4cbe1a",
      measurementId: "G-C2XQVEPFL7"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            RN:room_name
      });
      
}
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome " + user_name+"!";
function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name..."

  });
  localStorage.setItem("room_name", room_name);
  window.location="kwitter_page.html";

}
function redirect(name){
localStorage.setItem("current_room", name);
window.location="kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_names="+Room_names);
      row="<div class ='room_name' id="+Room_names+" onclick='redirect(this.id)'> #"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirect(name){
      localStorage.setItem("current_room", name);
      window.location="kwitter_page.html";
      
      }
      function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("user_room");
        window.location="index.html";
      }

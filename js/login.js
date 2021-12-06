const firebaseConfig = {
apiKey: "AIzaSyCJrQTLjokxV0jvkCFpkXMOe8fOwoNoi1M",
authDomain: "final-235a0.firebaseapp.com",
databaseURL: "https://final-235a0-default-rtdb.firebaseio.com/",
projectId: "final-235a0",
storageBucket: "final-235a0.appspot.com",
messagingSenderId: "802813334763",
appId: "1:802813334763:web:149febec2295b8b5629aae"
};
const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();
const detailsRef = dbRef.child('userdetails');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
 var newPost = snapshot.val();
});
function send(){
 var email = document.getElementById("email").value;
 var username = document.getElementById("username").value;
 var password = document.getElementById("password").value;
 detailsRef.push().set({
 email: email,
 username: username,
 password: password,
 });
}
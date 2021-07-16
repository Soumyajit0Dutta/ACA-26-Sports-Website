var firebaseConfig = {
  apiKey: "AIzaSyB8QenZ_43DBVdV43MVYkvzkl504kXIYik",
  authDomain: "corona-ws-9a175.firebaseapp.com",
  databaseURL: "https://corona-ws-9a175-default-rtdb.firebaseio.com",
  projectId: "corona-ws-9a175",
  storageBucket: "corona-ws-9a175.appspot.com",
  messagingSenderId: "558519649701",
  appId: "1:558519649701:web:a38e455329111d78fb144c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var UserInputsRef=firebase.database().ref('UserInputs')
document.getElementById('testForm').addEventListener('submit',submitForm);
function submitForm(e){
  e.preventDefault();
  var fname =getInputVal('firstname');
  var mname =getInputVal('middlename')
  var lname =getInputVal('lastname');
  var mobile =getInputVal('mobile');
  var team =getInputVal('team');
  var email =getInputVal('email');
  var emailstatus=validateEmail();
  if(emailstatus)
  saveMessages(fname+ " " +mname+ " " +lname,mobile,email,team);
}
function getInputVal(id){
return document.getElementById(id).value;
}
function saveMessages(name,mobile,email,team){
var newuserInputsRef = UserInputsRef.push();
newuserInputsRef.set({
    name:name,
    mobile:mobile,
    email:email,
    Favourite_Team:team
})
alert("May your team won this time");
}

function validateEmail() 
{
if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(testForm.email.value))
{
return (true)
}
alert("You have entered an invalid email address!")
return (false)
}
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC15nZmo2ZNb-YVjjGEjypYEbnmyhAs3v8",
  authDomain: "blood-bank-a5cc6.firebaseapp.com",
  databaseURL: "https://blood-bank-a5cc6.firebaseio.com",
  projectId: "blood-bank-a5cc6",
  storageBucket: "blood-bank-a5cc6.appspot.com",
  messagingSenderId: "252053075466",
  appId: "1:252053075466:web:100074f7d9392751e711f3",
  measurementId: "G-2QRDGW3G2Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


function ShowHideDiv() {
        var disShow = document.getElementById("diShow");
        var disHide = document.getElementById("specify");
        disHide.style.display = disShow.value == "Y" ? "block" : "none";
    }

var fName = document.getElementById('fName');
var num = document.getElementById('phNum');
var dateOf = document.getElementById('dob');
var mail = document.getElementById('emailId');
var address = document.getElementById('add');
var lasDon = document.getElementById('lastDon');
var disHide = document.getElementById("specify");


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd +"-"+ mm +"-"+ yyyy;
var database = firebase.database();
var rootRef = database.ref(today);

function myFunction() {
  if((fName.value=="")||(num.value=="")||(dateOf.value=="")||(mail.value=="")||(address.value=="")){
    alert('Please input the information first')
  }
  else {
      window.location="thankyou.html";
  }


  }
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    rootRef.child(bloodGrp.value).push({
      Name: fName.value,
      Date_of_Birth: dateOf.value,
      Email_Id: mail.value,
      Address: address.value,
      Last_Donation: lasDon.value,
      Any_Disease: disHide.value

    });
    rootRef.on("value",function(snapshot){
      snapshot.forEach(function(childSnapshot) {

        var cName =  childSnapshot.val();
        console.log(cName);

      });

      })

    })

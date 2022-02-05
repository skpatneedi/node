var firebaseConfig = {
	apiKey: "AIzaSyCXOOvLll7sa9Mhu5wsISBhLFzq5a2P19A",
	authDomain: "nodemcu-2807c.firebaseapp.com",
	databaseURL: "https://nodemcu-2807c-default-rtdb.firebaseio.com",
	projectId: "nodemcu-2807c",
	storageBucket: "nodemcu-2807c.appspot.com",
	messagingSenderId: "309169076939",
	appId: "1:309169076939:web:e300de0c60175d8498794e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

$(document).ready(function () {
	var database = firebase.database();
	var Led1Status;

	database.ref().on("value", function (snap) {
		Led1Status = snap.val().Led1Status;
		if (Led1Status == "1") {    // check from the firebase
			//$(".Light1Status").text("The light is off");
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			//$(".Light1Status").text("The light is on");
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
	});

	$(".toggle-btn").click(function () {
		var firebaseRef = firebase.database().ref().child("Led1Status");

		if (Led1Status == "1") {    // post to firebase
			firebaseRef.set("0");
			Led1Status = "0";
		} else {
			firebaseRef.set("1");
			Led1Status = "1";
		}
	})
});
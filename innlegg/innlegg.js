function setup() {
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCXaiYPjNf1l7jXPhNZBS0ol5q71cusKmY",
    authDomain: "webchat-33326.firebaseapp.com",
    databaseURL: "https://webchat-33326.firebaseio.com",
    projectId: "webchat-33326",
    storageBucket: "webchat-33326.appspot.com",
    messagingSenderId: "984629728666"
  };
  firebase.initializeApp(config);
    let divForum = document.getElementById("forum");

    let ref = firebase.database().ref("forum");

    function visMedlemmer(snapshot) {
        let medlemnr = snapshot.key;
        let info = snapshot.val();
        divMedlemmer.innerHTML += `
          <div>
            <h4>Medlem nr ${medlemnr}</h4>
            <ul>
             <li>${info.fornavn} ${info.etternavn}
             <li>Epost : ${info.epost}
             <li> ${info.mobil}
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visMelding);

}
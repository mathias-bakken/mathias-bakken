function setup() {
    var config = {
        apiKey: "AIzaSyCy_DLyS_wZ1cphHkZBePlS_yMOyeKmEZs",
        authDomain: "fotballcup-367de.firebaseapp.com",
        databaseURL: "https://fotballcup-367de.firebaseio.com",
        projectId: "fotballcup-367de",
        storageBucket: "fotballcup-367de.appspot.com",
        messagingSenderId: "661300926093"
    };
    firebase.initializeApp(config);

    let divListe = document.getElementById("liste");

    let ref = firebase.database().ref("lag");

    function visLag(snapshot) {
        let lag = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
                <div>
                  <h4>Lagnavn : ${lag}</h4>
                  <ul>
                   <li>Farge : ${info.farge}
                   <li>Navn : ${info.navn}
                   <li>Spillere : ${info.spillere}
                  </ul>
                </div>
              `;
    }
    ref.on("child_added", visLag);

}
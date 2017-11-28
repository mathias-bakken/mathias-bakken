function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDD8mtnPc9q51h_tsJPun6umi_OUmNhOEE",
        authDomain: "project-overview.firebaseapp.com",
        databaseURL: "https://project-overview.firebaseio.com",
        projectId: "project-overview",
        storageBucket: "project-overview.appspot.com",
        messagingSenderId: "778402604866"
    };
    firebase.initializeApp(config);
    let divListe = document.getElementById("liste");
    let ref = firebase.database().ref("kunde");

    function visKunder(snapshot) {
        let kundenr = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>Kunde nr ${kundenr}</h4>
            <ul>
             <li>${info.fornavn} ${info.etternavn}
             <li>Epost : ${info.epost}
             <li>Mobil : ${info.mobil}
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visKunder);

}
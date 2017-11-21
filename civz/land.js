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
    let ref = firebase.database().ref("nations");

    function visLand(snapshot) {
        let navn = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>${navn}</h4>
            <ul>
             <li>Capital ${info.capital}
             <li>${info.title} ${info.leader}
             <li> Perks
                <ul>
                    <li> Money: ${info.perk.money}
                    <li> Move: ${info.perk.move}
                    <li> War: ${info.perk.war}
                    <li> Science: ${info.perk.science}
                </ul>
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visLand);

}
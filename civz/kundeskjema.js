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
    let spanKunde = document.getElementById("kundevelger");
    let divDyr = document.getElementById("dyr");

    let ref = firebase.database().ref("kunde");

    ref.once("value").then(function (snapshot) {
        let kundene = snapshot.val();
        if (kundene) {
            let dropBox = makeDrop(kundene);
            spanKunde.innerHTML = dropBox;
        }
    });

    function makeDrop(kunder) {
        let box = '<select id="kundenr">';
        let kundenr = Object.keys(kunder);
        let navn = kundenr.map(e =>
            `<option values="${e}">${kunder[e].fornavn}</option>`);
        box += navn.join("") + "</select>";
        return box;
    }

}
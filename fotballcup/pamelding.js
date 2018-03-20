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

    let database = firebase.database();

    let inpFarge = document.getElementById("farge");
    let inpNavn = document.getElementById("navn");
    let inpSpillere = document.getElementById("spillere");
    let inpLag = document.getElementById("lag");

    let btnLagreLag = document.getElementById("lagrelag");
    btnLagreLag.addEventListener("click", lagreLag);

    function lagreLag(e) {
        let farge = inpFarge.value;
        let navn = inpNavn.value;
        let spillere = inpSpillere.value;
        let ref = database.ref("lag/" + navn);
        ref.set({ farge, navn, spillere });
    }
}
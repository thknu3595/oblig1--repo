//Oppretter array for å lagre informasjon om billetkjøpere
const cinemaRegister=[];

//Funksjon for å kjøpe billetter kaller på funskjonene slik at jeg kan lage en knapp senere
function buyTicket(){
    register();
    showCinema();
}

//Funksjon for å vise kinoregisteret
function showCinema(){
// Sjekker om kinoregisteret er tomt, hvis det er det, tømmer vi HTML-innholdet og returnerer
    if (cinemaRegister.length===0){
        document.getElementById("cinemaRegister").innerHTML="";
        return;
    }

    // Oppretter tabell for å vise kinoregisteret
    let ut = "<table><tr>" +
        "<th>Film</th><th>Fornavn</th><th>Etternavn</th><th>Antall</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";

    //legger til hver person i tabellen
    for (let p of cinemaRegister){
        ut+="<tr>";
        ut+="<td>"+p.film+"</td><td>"+p.fornavn+"</td><td>"+p.etternavn+"</td><td>"+p.antall+"</td><td>"+p.telefonnr+"</td><td>"+p.epost+"</td>";
        ut+="</tr>";
    }

    document.getElementById("cinemaRegister").innerHTML=ut;
}
//Funksjon for å slette all data i tabellen
function deleteAllData(){
    cinemaRegister.length=0;

    showCinema();

    document.getElementById("cinemaRegister").innerHTML="";
}
//en funksjon som skal validere om eposten inneholder @
function verifiserEpost(epost){
    return epost.includes("@")

}
//funksjon som skal validere om telefonnummeret inneholder 8 tall
function verifiserTelefonNummer(telefonnr){
    return /^[0-9]{8}$/.test(telefonnr);
}
function verifiserFornavn(fornavn){
    return /^[a-zA-Z]+$/.test(fornavn);
}
function verifiserEtternavn(etternavn){
    return /^[a-zA-Z]+$/.test(etternavn);
}
// Funksjon for å registrere en person med kinobilletter
function register(){
    // Henter verdier fra inputfeltene
    const film =document.getElementById("filmvalg").value;
    const fornavn= document.getElementById("fornavn").value;
    const etternavn= document.getElementById("etternavn").value;
    const antall=document.getElementById("antall").value;
    const telefonnr=document.getElementById("telefonnr").value;
    const epost=document.getElementById("epost").value;


    // Henter referanser til feilmeldingselementene
    const filmError=document.getElementById("filmvalgError");
    const fornavnError=document.getElementById("fornavnError");
    const etternavnError=document.getElementById("etternavnError");
    const telefonnrError=document.getElementById("telefonnrError");
    const antallError=document.getElementById("antallError");
    const epostError = document.getElementById("epostError")

    // Nullstiller feilmeldinger før validering
    filmError.textContent="";
    fornavnError.textContent="";
    etternavnError.textContent="";
    telefonnrError.textContent="";
    antallError.textContent="";
    epostError.textContent="";

    let isValid =true;

    //ulike valideringer for ikke fylte inputbokser og epost,telefonnummer,fornavn og etternavn som ikke samsvarer med krav først kommer det
    //meldinger ved tomme inputfelter og deretter kommer det feilmelding om kravene for validering er feil.

    if (film.trim()===""||film=== "Velg en Film" ){
        filmError.textContent=" Du har ikke valgt en av filmene"
        isValid=false;
    }

    if (fornavn.trim()=== ""){
        fornavnError.textContent="Fornavn påkrevd";
        isValid=false;
    }else if (!verifiserFornavn(fornavn)){
        fornavnError.textContent="Fornavn kan bare inneholde bokstaver";
        isValid=false;
    }

    if (etternavn.trim()=== ""){
        etternavnError.textContent="etternavn påkrevd";
        isValid=false;
    }else if (!verifiserEtternavn(etternavn)){
        etternavnError.textContent="Etternavn kan bare inneholde bokstaver";
        isValid=false;
    }

    if (telefonnr.trim()===""){
        telefonnrError.textContent="telefonnummer er påkrevd";
        isValid=false;
    }else if (!verifiserTelefonNummer(telefonnr)){
        telefonnrError.textContent="Telefonnummeret må inneholde 8 tall";
        isValid=false;
    }
    if (antall.trim()<=0){
        antallError.textContent="Antall billetter må være et positivt heltall";
        isValid=false;
    }
    if (epost.trim()===""){
        epostError.textContent="Skriv inn epost";
        isValid=false;
    }else if (!verifiserEpost(epost)){
        epostError.textContent= " Epost-adressen må inneholde '@' for å være gyldig";
        isValid=false;
    }






    //legger til personer i registeret hvis alle krav er godkjent
    if (isValid){

    const person={
        film : film,
        fornavn : fornavn,
        etternavn : etternavn,
        antall : antall,
        telefonnr : telefonnr,
        epost : epost
    };
    cinemaRegister.push(person);

    // Nullstiller inputfeltene etter at personen er registrert
    document.getElementById("fornavn").value=" ";
    document.getElementById("etternavn").value=" ";
    document.getElementById("antall").value=" ";
    document.getElementById("telefonnr").value=" ";
    document.getElementById("epost").value=" ";
}
}
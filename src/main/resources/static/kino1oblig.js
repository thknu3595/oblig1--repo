
const cinemaRegister=[];

function buyTicket(){
    register();
    showCinema();
}
function showCinema(){

    if (cinemaRegister.length===0){
        document.getElementById("cinemaRegister").innerHTML="";
        return;
    }

    let ut = "<table><tr>" +
        "<th>Film</th><th>Fornavn</th><th>Etternavn</th><th>Antall</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";
    for (let p of cinemaRegister){
        ut+="<tr>";
        ut+="<td>"+p.film+"</td><td>"+p.fornavn+"</td><td>"+p.etternavn+"</td><td>"+p.antall+"</td><td>"+p.telefonnr+"</td><td>"+p.epost+"</td>";
        ut+="</tr>";
    }

    document.getElementById("cinemaRegister").innerHTML=ut;
}
function deleteAllData(){
    cinemaRegister.length=0;

    showCinema();

    document.getElementById("cinemaRegister").innerHTML="";
}

function verifiserEpost(epost){
    return epost.includes("@")

}

function register(){
    const film =document.getElementById("filmvalg").value;
    const fornavn= document.getElementById("fornavn").value;
    const etternavn= document.getElementById("etternavn").value;
    const antall=document.getElementById("antall").value;
    const telefonnr=document.getElementById("telefonnr").value;
    const epost=document.getElementById("epost").value;



    const filmError=document.getElementById("filmvalgError");
    const fornavnError=document.getElementById("fornavnError");
    const etternavnError=document.getElementById("etternavnError");
    const telefonnrError=document.getElementById("telefonnrError");
    const antallError=document.getElementById("antallError");
    const epostError = document.getElementById("epostError")

    filmError.textContent="";
    fornavnError.textContent="";
    etternavnError.textContent="";
    telefonnrError.textContent="";
    antallError.textContent="";
    epostError.textContent="";

    if (!verifiserEpost(epost)){
        epostError.textContent= " Epost-adressen må inneholde '@' for å være gyldig";
        return;
    }


    let isValid =true;

    if (film.trim()===""||film=== "Velg en Film" ){
        filmError.textContent=" Du har ikke valgt en av filmene"
        isValid=false;
    }

    if (fornavn.trim()=== ""){
        fornavnError.textContent="Fornavn påkrevd";
        isValid=false;
    }
    if (etternavn.trim()=== ""){
        etternavnError.textContent="etternavn påkrevd";
        isValid=false;
    }
    if (telefonnr.trim()===""){
        telefonnrError.textContent="telefonnummer er påkrevd";
        isValid=false;
    }
    if (antall.trim()<=0){
        antallError.textContent="Antall billetter må være et positivt heltall";
        isValid=false;
    }
    if (epost.trim()===""){
        epostError.textContent="Skriv inn epost";
        isValid=false;
    }

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


    document.getElementById("fornavn").value=" ";
    document.getElementById("etternavn").value=" ";
    document.getElementById("antall").value=" ";
    document.getElementById("telefonnr").value=" ";
    document.getElementById("epost").value=" ";
}
}
//parte iniziale del esercizio nome , cognome , colore
var hello;
var hello = alert ("Ciao per proseguire con la creazione della tua Pasword sono necessari alcuni dati :))")

var userName;
var userName = prompt("Per favore inserisci il tuo Nome:", "");

console.log(userName);


var userSurname;
var userSurname = prompt("Per favore inserisci il tuo Cognome :", "");

console.log(userSurname);



var userColor;
var userColor = prompt("Per favore inserisci il tuo colore preferito :", "");

console.log(userColor);



document.getElementById('firstName').innerHTML = userName + ',';
document.getElementById('createdPsw').innerHTML = userName + userSurname + userColor + 20;
//document.getElementById('name').style.display = 'block';
document.getElementById('name-example').setAttribute('class', "visible") ;
//.setAttribute - la funzione che permette di aggiungere attributi in css senza modificare html e senza che JS si occupi dello stile della pagina

console.log(firstName, createdPsw );
document.writeln();

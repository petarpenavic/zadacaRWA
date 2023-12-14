/*
Zadatak 5
U JS kreirajte novi objekt s članovima
firstName:"Marko", lastName:"Marić", age:40, eyeColor:"black"
Definirajte još nekoliko objekata s sličnim indeksima i različitim vrijednostima. 
Putem neke od petlji ispišite vrijednosti i indekse objekata u browser.
*/

var osoba1 = 
{
    firstName: "Marko",
    lastName: "Marić",
    age: 40,
    eyeColor: "black"
};

var osoba2 = 
{
    firstName: "Ana",
    lastName: "Anić",
    age: 30,
    eyeColor: "brown"
};

var osoba3 = 
{
    firstName: "Ivan",
    lastName: "Ivić",
    age: 25,
    eyeColor: "blue"
};

var objekti = [osoba1, osoba2, osoba3];

var outputDiv = document.createElement("div");
document.body.appendChild(outputDiv);

objekti.forEach(function(objekt, index) {
    var objektDiv = document.createElement("div");
    objektDiv.innerHTML = "<strong>Objekt #" + (index + 1) + "</strong><br>";

    Object.keys(objekt).forEach(function(key) {
        objektDiv.innerHTML += key + ": " + objekt[key] + "<br>";
    });

    objektDiv.innerHTML += "--------------------<br>";
    outputDiv.appendChild(objektDiv);
});


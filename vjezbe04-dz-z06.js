/*
Zadatak 6
Kreirati objekat pas čije je ime Reks i ima 2 godine. 
Nakon kreiranja objekta dodati mu i funkcijsku osobinu "zvuk", 
koja prilikom poziva vraća vrijednost "AV AV"!
*/

var pas = 
{
    ime: "Reks",
    godine: 2
};

pas.zvuk = function() 
{
    return "AV AV";
};
  document.write("Ime psa: " + pas.ime + "<br>");
  document.write("Godine psa: " + pas.godine + "<br>");
  document.write("Zvuk psa: " + pas.zvuk() + "<br>");
  
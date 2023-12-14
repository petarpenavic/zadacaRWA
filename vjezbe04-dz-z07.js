/*
Zadatak 7
Napravite anonimnu funkciju i postavite je kao vrijednost varijable. Naša bi funkcija trebala raditi na ovaj način: 
•	Ako je proslijeđen broj, vraća kvadrat tog broja;
•	Inače vraća obavijest o pogrešci.
*/

var kvadratIliGreska = function(x) 
{
    if (typeof x === 'number') 
    {
      return x * x;
    } else 
    {
      return "Pogreška";
    }
};

document.write("• " + kvadratIliGreska(5) + "<br>");
document.write("• " + kvadratIliGreska("abc") + "<br>");
  

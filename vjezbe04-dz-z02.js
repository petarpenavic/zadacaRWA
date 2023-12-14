/*
Zadatak 2
Napisati JS program koji u konzolu i u html dokument 
ispisuje parne brojeve od 1 do 100 i njihove kvadrate;
*/

let i 
let kvadrat
for(i=1; i<=100; i++)
{
   
    if(i%2==0)
    {
        kvadrat = i * i;
        document.write(i + " kvadrat broja " + i + " je " + kvadrat + "<br>");
        console.log(i, kvadrat);
    }
}

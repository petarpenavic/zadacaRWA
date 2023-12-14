/*
Zadatak 8
Napisati JS funkciju koja za zadano ulazno polje (array of strings), kreira novo polje (array of strings) 
i ispiše ga, a koje sadrži samo one vrijednosti (nizove) unutar polja s velikim slovima (najmanje 1)
ili vrijednosti koji su sadržavali 5 ili više slova/brojeva;
•	Primjer polja
var arr = [‘Ovo', 'je', 'My', ‘prvi', ‘komad', 'OF', ‘JAVASCRIPT', 'koda', 'Koji', ', 'je'', ‘proradio'];
*/

function filtrirajVelikaSlovaIliDuljina(arr) 
{
    var filtrirano = arr.filter(function(element) {
      return /[A-Z]/.test(element) || element.length >= 5;
    });
  
    document.write(filtrirano);
  
    return filtrirano;
}
  
  var arr = ["Ovo", "je", "My", "prvi", "komad", "OF", "JAVASCRIPT", "koda", "Koji", " ", "je", "proradio"];
  
  filtrirajVelikaSlovaIliDuljina(arr);  
  
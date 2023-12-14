/*
Zadatak 4
U Javascriptu imate polje koji je inicijalno zadano/deklarirano  kao:
polje = new Array(1, 2, 3, 4, 7, 8, 5, 6, 9, 55, 12, 4, 85);
Pomoću metoda za rukovanje poljem tipom podataka, uraditi ispis u browser:
a.	Ispisati koliko je inicijalna dužina polja polje
b.	Ispisati polje ali sortirano s vrijednostima od najvećeg ka najmanjem
c.	Ispisati polje ali  sortirano s vrijednostima od najmanjeg ka najvećem
d.	U sortiranom polju iz c. ukloniti zadnji član polja
e.	U polju iz d. dodati na kraj polja nova dva člana polja s vrijednostima 19 i 22
f.	Definirajte novo polje polje2 s članovima "Banana", "Orange", "Apple", "Mango". 
    Nakon toga  spojite polje i polje2 u novo polje naziva polje_final i ispišite 
    njegove vrijednosti, na proizvoljan način.
*/

var polje = new Array(1, 2, 3, 4, 7, 8, 5, 6, 9, 55, 12, 4, 85);

// a. 
document.write("a. " + polje.length + "<br>");

// b.
var sortiranoOdNajveceg = polje.slice().sort
(
    function(a, b) 
{
    return b - a;
}
);
document.write("b. " + sortiranoOdNajveceg + "<br>");

// c. 
var sortiranoOdNajmanjeg = polje.slice().sort
(function(a, b) 
{
    return a - b;
}
);
document.write("c. " + sortiranoOdNajmanjeg + "<br>");

// d.
sortiranoOdNajmanjeg.pop();
document.write("d. " + sortiranoOdNajmanjeg + "<br>");

// e.
sortiranoOdNajmanjeg.push(19, 22);
document.write("e. " + sortiranoOdNajmanjeg + "<br>");

// f.
var polje2 = ["Banana", "Orange", "Apple", "Mango"];

var polje_final = polje.concat(polje2);

document.write("f. " + polje_final);

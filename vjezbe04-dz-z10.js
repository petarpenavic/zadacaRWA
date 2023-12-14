/*
Zadatak 10
Napisati javascript funkciju koja ima dva ulazna argumenta koji su brojevi. 
Funkcija zatim ispisuje pet random brojeva između ta dva broja.
*/

function ispisPetNasumicnihBrojeva(min, max) 
{
    for (let i = 0; i < 5; i++) 
    {
        const nasumicanBroj = Math.floor(Math.random() * (max - min + 1)) + min;
        document.write(nasumicanBroj + " ");  
    }
}

ispisPetNasumicnihBrojeva(1, 20);
  
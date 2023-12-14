/*
Zadatak 9
Napisati javascript funkciju koja ima jedan ulazni argument koji je broj. 
Funkcija zatim ispisuje sve savršene brojeve od broja 1 do toga broja.
*/

function savrseniBrojevi(doBroja) 
{
    for (let i = 1; i <= doBroja; i++) 
    {
      let sum = 0;
      for (let j = 1; j < i; j++) 
      {
        if (i % j === 0) 
        {
          sum += j;
        }
      }
      if (sum === i) 
      {
        document.write(i);
        document.write("<br>");
      }
    }
}

savrseniBrojevi(10000);
  
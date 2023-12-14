/* 
Zadatak 11
Ulazno polje ima format:
const tempDay = ["2023-11-29", -1, 0, -0.5, 0.5, 0, 1.2, 1.8, 2, 3, 4, 6, 9, 12, 7, 6, 6, 8, 5, 4, 2, 3, 2, 1, 0];
Polje sadrži datum i vrijednosti temperature kroz 24 sata. 
Napisati funkciju koja obrađuje ovo ulazno polje, a ispisuje u konzoli: 
datum, najmanju i najveću dnevnu temperaturu, te prosječnu temperaturu za taj dan.
*/

function obradiTemperaturnePodatke(tempDay) 
{
   
    if (tempDay.length < 25) 
    {
      console.log("Nedovoljno podataka za obradu.");
      return;
    }
  
    const datum = tempDay[0];
    const temperature = tempDay.slice(1);
    const najmanjaTemperatura = Math.min(...temperature);
    const najvecaTemperatura = Math.max(...temperature);
    const prosjecnaTemperatura = temperature.reduce((acc, val) => acc + val, 0) / temperature.length;
  
    console.log("Datum:", datum);
    console.log("Najmanja temperatura:", najmanjaTemperatura);
    console.log("Najveća temperatura:", najvecaTemperatura);
    console.log("Prosječna temperatura:", prosjecnaTemperatura.toFixed(2));
}
  
  const tempDay = ["2023-11-29", -1, 0, -0.5, 0.5, 0, 1.2, 1.8, 2, 3, 4, 6, 9, 12, 7, 6, 6, 8, 5, 4, 2, 3, 2, 1, 0];
  obradiTemperaturnePodatke(tempDay);
  
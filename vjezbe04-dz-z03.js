/*
Zadatak 3
Napisati JS program koji u konzolu i html dokument 
ispisuje proste brojeve od 1 do 1000 (u browseru svaki put u novom retku);
*/

let count = 0;
let x, y; 

for(y=2; y<=1000; y++) 
{
  for(x=1; x<=y; x++) 
  {
    if(y%x==0)
    count++;
  }
  
  if(count==2)
  {
  document.write(y + "<br>");
  console.log(y);
  }
  count = 0;
}
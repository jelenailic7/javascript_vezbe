// - napraviti poseban app.js fajl
// - napraviti anonimnu funkciju u tom fajlu
// - kreirati varijablu na različitim delovima sistema i istražiti njenu dostupnost unutar anonimne funkcije, van nje i unutar posebnog script tag-a. 
// - Postaviti varijablu:
//     - u poseban script tag
//     - u poseban js fajl koji se učitava pre i posle fajla sa anonimnom funkcijom 
//     - unutar anonimne funkcije
//     - van anonimne funkcije



varijabla unutar anonimne funkcije
var multiply = function(x, y) {
    var x=5;
    var y=1;
   return x * y;
};

console.log(multiply(x,y));

//van anonimne funkcije
var x=5;
var y=1;
var multiply = function(x, y) {
   return x * y;
};

console.log(multiply(x,y));


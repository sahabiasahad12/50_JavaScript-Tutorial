//show date
function showDate(){
    document.getElementById('sd').innerHTML=Date();
}

//text change
function textChange(){

    document.getElementById('t_h3').innerHTML="Hello";
}

//bulb on/off
function bulbOn(){
    document.getElementById('img').src="image/on.gif";
}

function bulbOff(){
    document.getElementById('img').src="image/off.gif";
}

//show border
function showBorder(){
    document.getElementById('sb').style.border="2px solid green";
    document.getElementById('sb').style.marginTop="20px";
}

//show/hide the text
function textShow(){
    document.getElementById('tex').style.display="block"
}

function textHide(){
    document.getElementById('tex').style.display="none"
}

//script Tag
function javaScript(){
    document.getElementById("jst").innerHTML = "My First JavaScript";
}

//Using document.write,Exam result
function exmResult(){
    document.getElementById("se").innerHTML = 55 + 35;
}

//JavaScript Statements
function JsStatements(){
    let a, b, c;
    a = 33;
    b = 67;
    c = a + b;
    document.getElementById("st").innerHTML = c;
}

//JavaScript Syntax Literals
function syntaxLiterals(){
    document.getElementById("sl").innerHTML = 50.50;
}

//JavaScript Operators

function JsOperators(){
    let x, y;
    x = 5 + 6;
    y = x * 10;
    document.getElementById("op").innerHTML = y;
}

//JavaScript Expressions
function jsExpressions(){
    document.getElementById("exp").innerHTML = 5 * 10;
}

//JavaScript Keywords
function jsKeywords(){
    let x, y;
    x = 7 + 10;
    y = x * 7;
    document.getElementById("Keyword").innerHTML = y;
}

//JavaScript Comments
    let x;
    x = 5;
function JsExecuted(){
    
    document.getElementById("Executed").innerHTML = x;
}

//JavaScript is Case Sensitive
    let lastname, lastName;
    lastName = "Sahad";
    lastname = "Ahmed";
function JsSensitive(){
    document.getElementById("sensitive").innerHTML = lastName;
}

//Variables ver
    x = 20; y = 12;z = x + y;
function JsVar(){
    
    document.getElementById("jsv").innerHTML =
"The value of z is: " + z;
}

//JavaScript Variables let
{   let x = 5;
    let y = 6;
    let z = x + y;}
function VarLet(){
    document.getElementById("Jslet").innerHTML = "The value of z is: " + z;
}

//declaring a variable
function JsDeclaring(){
    let carName = "Volvo";
    document.getElementById("dec").innerHTML = carName;
}

//JavaScript Constant Arrays
function JsArrays(){
    const cars = ["Saab", "Volvo", "BMW"];
    cars[0] = "Toyota";
    cars.push("Audi");
    document.getElementById("arr").innerHTML = cars; 
}

//JavaScript Constant object
function JsObject(){
    const car = {type:"Fiat", model:"500", color:"white"};
    car.color = "red";
    car.owner = "Sahabia Sahad";

    document.getElementById("obj").innerHTML = "Car owner is " + car.owner; 
}

//Assignment Operator (=)
function JsOperator(){
    let x = 10;
    let y = 25;
    let z = x + y;
    document.getElementById("opr").innerHTML = "The sum of x + y is: " + z;
}

//Multiplication Operator (*) 
function Jsmultiplies(){
    let x = 10;
    let y = 7;
    let z = x * y;
    document.getElementById("mul").innerHTML = z;
}

//avaScript Functions Return
function JsReturns(){
    let x = myFunction(10, 4);
    document.getElementById("returns").innerHTML = x;

    function myFunction(a, b) {return a * b;}
}

//The () Operator
function JsInvokes(){
    function toCelsius(a) {
      return (5/10) * (a-10);}
      let value = toCelsius(60);
      document.getElementById("invokes").innerHTML = value;
}

//JavaScript many values
function JsManyvalues(){
    const car = {type:"Fiat", model:"500", color:"white"};
    document.getElementById("many").innerHTML = "The car type is " + car.type;
}

//JavaScript Object Definition
function JsDefinition(){
    const person = {
    firstName: "Sahad",
    lastName: "Doe",
    age: 24,};
    document.getElementById("def").innerHTML = person.firstName + " is " + person.age + " years old.";
}

//JavaScript Accessing Object Properties
function JsAccessing(){
    const person = {
        firstName: "Sahabia",
        lastName : "Sahad"};
    
      document.getElementById("acc").innerHTML =
      person["firstName"] + " " + person["lastName"];
}

//JavaScript HTML Events
function JsEvent(){ 
        document.getElementById("eve").innerHTML = Date();
      
}

//JavaScript Quotes
function JsQuotes(){
    let firstName1 = "Tom"; 
    let lastName2 = 'Cruise'; 

    document.getElementById("quo").innerHTML = firstName1 + " " + lastName2;
}

//JavaScript Template Strings
function JsString(){
    let text = `Success is not final, failure
    is not fatal: It is the courage to continue that counts.`;
document.getElementById("str").innerHTML = text;
}

//JavaScript String Length
function JsLength(){
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZSKJIHUXUHUSJFU";
    document.getElementById("len").innerHTML = text.length;
}

//JavaScript charAt() Method
function JsCharat(){
    var text = "HELLO WORLD";
    document.getElementById("charAt").innerHTML = text.charAt(6);
}

//JavaScript String charCodeAt
function JsCharcode(){
    let text = "HELLO WORLD";
    document.getElementById("charCode").innerHTML = text.charCodeAt(3);
}

//JavaScript Strings at()
function JsAt(){
    const name = "Sahabia Sahad";
    let letter = name.at(4);
    document.getElementById("at").innerHTML = letter;
}

//JavaScript String substring()
function JsSubstring(){
    let str = "Apple, Banana, Kiwi";
    document.getElementById("substring").innerHTML = str.substring(7,13);
}

//JavaScript String substr()
function JsSubstr(){
    let str = "Sahabia, Sahad, Saymun";
document.getElementById("sub").innerHTML = str.substr(-6);
}

//JavaScript String toLowerCase
function JsToLowerCase(){
    let text = document.getElementById("toLowerCase").innerHTML;
    document.getElementById("toLowerCase").innerHTML =
    text.toLowerCase();
}

//JavaScript String toUpperCase
function JsUppercase(){
    let text = document.getElementById("uppercase").innerHTML;
    document.getElementById("uppercase").innerHTML =
    text.toUpperCase();
}

//JavaScript String concat
function JsJoins(){
    let text1 = "Saymun";
    let text2 = "Ahmed";
    let text3 = text1.concat(" ",text2);
    document.getElementById("joins").innerHTML = text3;
}

//JavaScript String trim
function JsTrim(){
    let text1 = "     Sahabia Sahad     ";
    let text2 = text1.trim();

    document.getElementById("trim").innerHTML =
    "Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;
}

//JavaScript String indexOf
function JsIndexof(){
    let text = "Believe you can and you're halfway there.";
    let index = text.indexOf("halfway");
    document.getElementById("index").innerHTML = index; 
}

//JavaScript String lastIndexOf
function JsLastIndexOf(){
    let text = "Your time is limited";
    let index = text.lastIndexOf("time", 10);
    document.getElementById("LastIndex").innerHTML = index; 
}

//JavaScript String search
function JsSearch(){
    let text = "Dream big and dare to fail";
    let index = text.search(/dare/);
    document.getElementById("search").innerHTML = index;
}

//JavaScript String match
function JsMatch(){
    let text = "The only place where success comes before work is in the dictionary"; 
    const myArr = text.match(/success/gi);
    document.getElementById("match").innerHTML = myArr.length + " " + myArr;
}

//JavaScript Numbers
function JsNumbers(){
    let x = 22e7;
    let y = 123e+5;
    document.getElementById("numbers").innerHTML = x + "<br>" + y;
}

//JavaScript Floating Precision
function JsFloating(){
    let x = 1.5 + 2.1;
    document.getElementById("Floating").innerHTML = "1.5 + 2.1 = " + x;
}

//Adding Numbers and Strings
function JsAdd(){
    let x = 20;
    let y = 30;
    let z = "30";
    let result = x + y + z;
    document.getElementById("add").innerHTML = result;
}
//JavaScript BigInt Accuracy
function JsBigInt(){
    let x = 123456789012345678901234567890n;
    let y = BigInt("123456789012345678901234567890");
    document.getElementById("BigInt").innerHTML = x + "<br>" + y;

}

//JavaScript Array length
function JsArray(){
    const fruits = ["Sahad", "Saymun", "Tripti", "Sabbir" ];
    let size = fruits.length;
    document.getElementById("array").innerHTML = size;
}

//JavaScript Array toString
function JsTostring(){
    const fruits = ["Sahad", "Saymun", "Tripti", "Sabbir" ];
    document.getElementById("tostring").innerHTML = fruits.toString();
}

//JavaScript While Loop
function JsWhileloop(){
    let text = "";
    let i = 0;
    while (i < 10) {
    text += "<br>The number is " + i;
     i++;}
    document.getElementById("whileloop").innerHTML = text;
}
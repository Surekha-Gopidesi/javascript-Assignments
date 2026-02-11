var age=18;
// Simple If
if(age>=18){
    console.log("you are eligible for vote"); 
}
console.log("---------------------------");
//If else
    var temaprature=35;
if(temaprature>=30){
    console.log("hot");  
}
else{
    console.log("comfortable");   
}
console.log("---------------------------");
//else if ladder
var marks=75;
if(marks>80){
    console.log("Grade A"); 
}
else if(marks>60){
    console.log("grade B");  
}
else if(marks>45){
    console.log("Grade c");  
}
else{
     console.log("failed");  
}
console.log("---------------------------");
//Switch case
var option=2;
switch(option){
    case 1: console.log("withdraw Money");
    break;
    case 2: console .log("Deposit Money");
    break;
    case 3 : console.log("check balance");
    break;
    case 4: console.log("Exit");
    break;
    default :console.log("Invalid Option");
    }
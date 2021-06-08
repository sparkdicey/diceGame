
    document.querySelector("button").addEventListener("click",dice);

    function dice(){
    var numberCalculation1 = Math.floor(Math.random() * 6) + 1;
    var numberCalculation2 = Math.floor(Math.random() * 6) + 1;
    
    var newcal1 = "images/dice" + numberCalculation1 + ".png";
    var newcal2 = "images/dice" + numberCalculation2 + ".png";
    
    document.querySelector(".image1").setAttribute("src", newcal1);
    document.querySelector(".image2").setAttribute("src", newcal2);

    document.querySelector("button").innerHTML = "Try Again";

    if (numberCalculation1 > numberCalculation2){
        document.querySelector("h1").textContent ="player1 wins";
    }else if (numberCalculation2 > numberCalculation1){
        document.querySelector("h1").textContent ="player2 wins";
    }else{
        document.querySelector("h1").textContent ="draw";
    }
 }




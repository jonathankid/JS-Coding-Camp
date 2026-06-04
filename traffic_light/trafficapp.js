//get variable
const redlight = document.getElementById("red")
const yellowlight = document.getElementById("yellow")
const greenlight = document.getElementById("green")
const switchBtn =document.getElementById("switchBtn")



//initial value
let current = "red";
redlight.style.background = "red";

//reset light 
function resetLights() {
	red.style.background = "#444";
	yellow.style.background = "#444";
	green.style.background = "#444";
}

//switch light
function switchLight() {
	switchBtn.disabled = true;
	resetLights();

    //nyalain kuningdulu
    yellowlight.style.background = "yellow";

    setTimeout(() => { 
        if(current == "red") {
        current = "green";
        resetLights();
        greenlight.style.background = "green";
    } else { 
        current = "red";
        resetLights();
        redlight.style.background = "red";
       
    }
switchBtn.disabled = false;
    }, 1000); // kuning nyala selama 300ms
 
}
switchBtn.addEventListener("click", switchLight);

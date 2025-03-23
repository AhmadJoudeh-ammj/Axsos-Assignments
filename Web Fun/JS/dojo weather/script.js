function display(el){
    alert("loading weather for "+el.innerText);
}

function hide(){
    var element= document.querySelector(".bottom");
        element.remove();    
}


function celsiusToFahrenheit(celsius) {
    return Math.round((celsius * 9/5) + 32);
}

function fahrenheitToCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5/9);
}

function convert() {
    const tempSelect = document.getElementById("tempreature");
    const selectedUnit = tempSelect.value;
    
    const redTemps = document.querySelectorAll("#red");
    const blueTemps = document.querySelectorAll("#blue");
    
    redTemps.forEach(temp => {
        let value = parseInt(temp.textContent);
        if (selectedUnit === "f") {
            temp.textContent = `${celsiusToFahrenheit(value)}°`;
        } else {
            temp.textContent = `${fahrenheitToCelsius(value)}°`;
        }
    });
    
    blueTemps.forEach(temp => {
        let value = parseInt(temp.textContent);
        if (selectedUnit === "f") {
            temp.textContent = `${celsiusToFahrenheit(value)}°`;
        } else  {
            temp.textContent = `${fahrenheitToCelsius(value)}°`;
        }
    });
}
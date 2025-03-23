function press(num){

    var temp = document.getElementById ("display");
    if (temp.innerText==0){
        console.log ("hi");
        temp.innerText=num;
    }
    else {
        temp.innerText = temp.innerText+num ;
    }
    console.log (temp);

}


function operator(){

    document.getElementsByClassName("operator");

}


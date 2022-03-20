function showpara1(){
    document.getElementById("para1").innerHTML=inputs.join(". ")
}

var inputs = [];

for(var i = 1 ; i<=6 ; i++){
    inputs.push(document.getElementById("sentence_"+i).value);
}

function showpara2() {
    document.getElementById("para2").innerHTML = inputs.join(". ");
}

var inputs = [];

for (var i = 1; i <= 6; i++) {
    inputs.push(document.getElementById("Sentence_" + i).value);
}
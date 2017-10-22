(function(doc){
    
    var zahl1div = doc.getElementById("zahl1");
    var zahl2div = doc.getElementById("zahl2");
    var fertigButton = doc.getElementById("fertigKnopf");
    var eingegeben = doc.getElementById("ergebnis");
    
    zahl1div.innerText = getRandomInt(0, 8000);    
    zahl2div.innerText = -getRandomInt(0, 8000);

    fertigButton.addEventListener("click", function() {
        alert("Es wurde '" + eingegeben.value + "' eingegeben.");
    });

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})(document);
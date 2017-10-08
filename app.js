(function(doc){
    
    var zahl1 = doc.getElementById("zahl1");
    var zahl2 = doc.getElementById("zahl2");
    var fertigButton = doc.getElementById("fertigKnopf");
    var eingegeben = doc.getElementById("ergebnis");
    
    zahl1.innerText = getRandomInt(100, 8000);    
    zahl2.innerText = -getRandomInt(100, 8000);

    fertigButton.addEventListener("click", function() {
        alert("Es wurde '" + eingegeben.value + "' eingegeben.");
    });

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})(document);
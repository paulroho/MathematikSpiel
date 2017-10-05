(function(doc){

    var fertigButton = doc.getElementById("fertigKnopf");
    fertigButton.addEventListener("click", function() {
        var eingegeben = doc.getElementById("ergebnis");
        alert("Es wurde '" + eingegeben.value + "' eingegeben.");
   
    });

})(document);
auto = {
    "name": "Fhros mobile",
    "model": "Model U",
    "made": 2022,
    "company": "Fhros",
    "website": "https://github.com/fhros",
    "horsepower": function() {
        alert(this.name + " " + this.model + " has 1000 horse power")
    }
}

function tiedot(){
    var title = document.getElementById("title")
    title.innerText = auto.name + " " + auto.model + " was made in " + auto.made;
}

tiedot();
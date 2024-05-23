function avviaSimulazione() {
    var ndomande = $('#inputnumerodomande').children("option:selected").val();
    var tempo = $('#inputtempo').children("option:selected").val();
    var random = document.getElementById("checkboxrandom").checked;
    var mescola = document.getElementById("checkboxmescola").checked;
    var materia = $('#inputMateria').children("option:selected").val(); // es. 'psicologia'
    var string = "file=" + materia + ".json" + "&nrdomande=" + ndomande + "&tempo=" + tempo + "&random=" + random + "&mescola=" + mescola;
    location.href = 'questions.html?' + string;
}

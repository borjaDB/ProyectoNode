var express = require("express");
var app = express();
//Las peticiones entran por este metodo a modo controlador
app.get("/", function(req, res) {
  //1. Se pinta en consola la lista
  crearComAutonomas();
  //2. Se crea una respueta llamando al metodo crear cadena
  var crearCadena = crearCadenaFunction();
  //solo una respuesta por llamada
  res.send(crearCadena);
});
//1
function crearCadenaFunction() {
  var hr = "<hr>";
  return "<strong>Esto es una prueba de texto<strong>" + hr;
}
//2
function crearComAutonomas() {
  var myData = [];
  myData.push("Galicia", "Madrid", "Asturias");

  for (var item in myData) {
    console.log(myData[item]);
  }
}

app.listen(1337, function() {
  console.log("Example app listening on port 3000!");
});

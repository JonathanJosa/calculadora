function ejecutar(tipo) {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  let url = 'http://localhost:8080/' + tipo + '?n1=' + num1 + '&n2=' + num2;
  $.getJSON(url,
        function(json) {
          console.log(json.resultado);
            document.getElementById("resultado").value = json.resultado;
        }
    );
}

function operacion(tipo) {
  let num3 = document.getElementById('num3').value;
  let url = 'http://localhost:8080/' + tipo + '?n1=' + num3;
  $.getJSON(url,
        function(json) {
          console.log(json.resultado);
            document.getElementById("resultado").value = json.resultado;
        }
    );
}

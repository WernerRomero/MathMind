<script type="text/javascript" src="https://www.google.com/jsapi"></script>

<script>
	function suma () {
		var MA10 =parseFloat(document.getElementById('a10').value);
		var MA11 =parseFloat(document.getElementById('a11').value);
		var MA20 =parseFloat(document.getElementById('a20').value);
		var MA21 =parseFloat(document.getElementById('a21').value);

		var MB10 =parseFloat(document.getElementById('b10').value);
		var MB11 =parseFloat(document.getElementById('b11').value);
		var MB20 =parseFloat(document.getElementById('b20').value);
		var MB21 =parseFloat(document.getElementById('b21').value);

		var Escalar=parseFloat(document.getElementById('txtEscalar').value);




		var A10 =(MA10 + MB10);
		var A11 =(MA11 + MB11);
		var A20 =(MA20 + MB20);
		var A21 =(MA21 + MB21);

		var B10 =(MA10 - MB10);
		var B11 =(MA11 - MB11);
		var B20 =(MA20 - MB20);
		var B21 =(MA21 - MB21);

		var C10 =(MA10 * MB10)+(MA11*MB20);
		var C11 =(MA10 * MB11)+(MA11*MB21);

		var C20 =(MA20 * MB10)+(MA21*MB20);
		var C21 =(MA20 * MB11)+(MA21*MB21);
	

	$("#resp").html("<table align='center' class='table table-bordered'> <thead> <tr> <td colspan='2'>Suma de Matriz 2x2</td> <td colspan='2'>Resta de Matriz 2x2</td> <td colspan='2'>Multiplicacion de Matriz 2x2</td> </tr> </thead> <tbody> <tr align='center'> <td> <p>"+ A10 +"</p> </td> <td> <p>"+ A11 +"</p> </td> <td> <p>"+ B10 +"</p> </td> <td> <p>"+ B11 +"</p> </td> <td> <p>"+ C10 +"</p> </td> <td> <p>"+ C11 +"</p> </td>  </tr>  <tr align='center'>  <td> <p>"+ A20 +"</p> </td> <td> <p>"+ A21 +"</p> </td> <td> <p>"+ B20 +"</p> </td> <td> <p>"+ B21 +"</p> </td> <td> <p>"+ C20 +"</p> </td> <td> <p>"+ C21 +"</p> </td> </tr> </tbody> </table> ");

	drawBasic(MA10, MA11, MA20, MA21 );
	drawBasic2(MB10, MB11, MB20, MB21 );
	drawBasic3(C10, C11, C20, C21 );
	}

	function Escalar(){
		var MA10 =document.getElementById('a10').value;
		var MA11 =document.getElementById('a11').value;
		var MA20 =document.getElementById('a20').value;
		var MA21 =document.getElementById('a21').value;

		var MB10 =document.getElementById('b10').value;
		var MB11 =document.getElementById('b11').value;
		var MB20 =document.getElementById('b20').value;
		var MB21 =document.getElementById('b21').value;

		var Escalar=document.getElementById('txtEscalar').value;
		var optA = document.getElementById("opcA");
      	var optB = document.getElementById("opcB");

		var A10 =(MA10) *(Escalar);
		var A11 =(MA11) *(Escalar);
		var A20 =(MA20) *(Escalar);
		var A21 =(MA21) *(Escalar);

		var B10 =(MB10) *(Escalar);
		var B11 =(MB11) *(Escalar);
		var B20 =(MB20) *(Escalar);
		var B21 =(MB21) *(Escalar);

		if( MA10.length==0 || MA11.length==0 || MA20.length==0 || MA21.length==0 || MB10.length==0 || MA11.length==0 || MB20.length==0 || MA21.length==0  ){
			alert("Tienes que llenar todos los campos");
		}else{
			if(Escalar.length==0){
				alert("Llena el Escalar");
			}else{
				if(optA.checked==true){
					$("#c10").val(A10);
					$("#c11").val(A11);
					$("#c20").val(A20);
					$("#c21").val(A21);
				}else if(opcB.checked==true){
					$("#c10").val(B10);
					$("#c11").val(B11);
					$("#c20").val(B20);
					$("#c21").val(B21);
				}else{
					alert("Debes de seleccionar una opcion para el Escalar");
				}	
			}
		}
	}

	google.load('visualization', '1', {packages: ['corechart', 'bar']});
	function drawBasic(MA10, MA11, MA20, MA21) {
      var data = google.visualization.arrayToDataTable([
          ['Columna', '01', '02'],
          ['A', MA10, MA11 ],
          ['B', MA20, MA21 ]
        ]);

      var options = {
        title: 'Serie de Datos Grid A'
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }

    google.load('visualization', '1', {packages: ['corechart', 'bar']});
    function drawBasic2(MB10, MB11, MB20, MB21) {
      var data = google.visualization.arrayToDataTable([
          ['Columna', '01', '02'],
          ['A', MB10, MB11 ],
          ['B', MB20, MB21 ]
        ]);

      var options = {
        title: 'Serie de Datos Grid B'
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div2'));
      chart.draw(data, options);
    }

     google.load('visualization', '1', {packages: ['corechart', 'bar']});
    function drawBasic3(C10, C11, C20, C21) {
      var data = google.visualization.arrayToDataTable([
          ['Columna', '01', '02' ],
          ['A', C10, C11 ],
          ['B', C20, C21 ]
        ]);

      var options = {
        title: 'Serie de Datos Grid C'
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div3'));
      chart.draw(data, options);
    }
</script>
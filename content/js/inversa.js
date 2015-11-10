<script>
	function mostrar(form){$(form).show(500);};
	function cerrar(form){$(form).hide(500);};

	function inversa(MA00, MA01, MA02, MA10, MA11, MA12, MA20, MA21, MA22){
		var total=MA00*MA11*MA22 + MA10*MA21*MA02 +MA20*MA01*MA12;
      		total=total+(MA02*MA11*MA20)*-1 + (MA12*MA21*MA00)*-1 + (MA22*MA01*MA10)*-1;
		
		//si el total es 0 no tiene determinante
		if(total!=0){
			var num=MA11*MA22-MA21*MA12;

			var a00 = num;
			var a01 = (((MA01*MA22-MA21*MA02)*-1));
			var a02 = ((MA01*MA12-MA11*MA02));

			var a10 = (((MA10*MA22-MA20*MA12)*-1));
			var a11 = (((MA00*MA22-MA20*MA02)));
			var a12 = (((MA00*MA12-MA10*MA02)*-1));

			var a20 = (((MA10*MA21-MA20*MA11)));
			var a21 = (((MA00*MA21-MA20*MA01)*-1));
			var a22 = (( MA00* MA11- MA10* MA01));

			$('#resp').html(" <p>Determinante |A|: &nbsp;"+ total +"</p>    <br> <table align='center' class='table table-bordered'> <thead> <tr> <td colspan='3'>Resultado de Matriz Adj(A)</td> </tr> </thead> <tbody>  <tr align='enter'> <td> <p>"+ Math.round(a00*100)/100 +"</p> </td> <td> <p>"+ Math.round(a01*100)/100 +"</p> </td> <td> <p>"+ Math.round(a02*100)/100 +"</p> </td> </tr> <tr align='center'>  <td> <p>"+ Math.round(a10*100)/100 +"</p> </td> <td> <p>"+ Math.round(a11*100)/100 +"</p> </td> <td> <p>"+ Math.round(a12*100)/100 +"</p> </td> </tr> <tr align='center'>  <td> <p>"+ Math.round(a20*100)/100 +"</p> </td> <td> <p>"+ Math.round(a21*100)/100 +"</p> </td> <td> <p>"+ Math.round(a22*100)/100 +"</p> </td> </tr> </tbody> </table>  <br><br> <table align='center' class='table table-bordered'> <thead> <tr> <td colspan='3'>Resultado de Matriz Inversa </td> </tr> </thead> <tbody>  <tr align='enter'> <td> <p>"+ Math.round((a00/total)*100)/100 +"</p> </td> <td> <p>"+ Math.round((a01/total)*100)/100 +"</p> </td> <td> <p>"+ Math.round((a02/total)*100)/100 +"</p> </td> </tr> <tr align='center'>  <td> <p>"+ Math.round((a10/total)*100)/100 +"</p> </td> <td> <p>"+ Math.round((a11/total)*100)/100 +"</p> </td> <td> <p>"+ Math.round((a12/total)*100)/100 +"</p> </td> </tr> <tr align='center'>  <td> <p>"+ Math.round((a20/total)*100)/100 +"</p> </td> <td> <p>"+ Math.round((a21/total)*100)/100 +"</p> </td> <td> <p>"+ Math.round((a22/total)*100)/100 +"</p> </td> </tr> </tbody> </table> ");
		}else{
			$('#resp').html("<p class='error'>Error del determinante=> Resultado = 0</p>");
		}
	}

	function matrizinv(){
		var MA00 = parseFloat(document.getElementById('a11').value);
		var MA01 = parseFloat(document.getElementById('a12').value);
		var MA02 = parseFloat(document.getElementById('a13').value);

		var MA10 = parseFloat(document.getElementById('a21').value);
		var MA11 = parseFloat(document.getElementById('a22').value);
		var MA12 = parseFloat(document.getElementById('a23').value);

		var MA20 = parseFloat(document.getElementById('a31').value);
		var MA21 = parseFloat(document.getElementById('a32').value);
		var MA22 = parseFloat(document.getElementById('a33').value);

		inversa(MA00, MA01, MA02, MA10, MA11, MA12, MA20, MA21, MA22);
	}

	function matriz2x2(){
		var MA10 = parseFloat(document.getElementById('MA10').value);
		var MA11 = parseFloat(document.getElementById('MA11').value);
		var MA20 = parseFloat(document.getElementById('MA20').value);
		var MA21 = parseFloat(document.getElementById('MA21').value);
		
		inv2x2(MA10, MA11, MA20, MA21)
	}

	function inv2x2(a, b, c, d){
		var determinante = (a*d)-(b*c)

		//Si el total es 0 no tiene determinante
		if(determinante!=0){
			var invD = d/determinante;
			var invC = -c/determinante;
			var invB = -b/determinante;
			var invA = a/determinante;

			$('#resp').html(" <p>Determinante |A|: &nbsp;"+ determinante +"</p>    <br> <table align='center' class='table table-bordered'> <thead> <tr> <td colspan='2'>Resultado de Matriz Adj(A)</td> </tr> </thead> <tbody>  <tr align='enter'> <td> <p>"+ (d) +"</p> </td> <td> <p>"+ (-b) +"</p> </td> </tr> <tr align='center'>  <td> <p>"+ (-c) +"</p> </td>  <td> <p>"+ (a) +"</p> </td>  </tr>  </tbody>  </table>  <br><br> <table align='center' class='table table-bordered'>  <thead>  <tr> <td colspan='2'>Resultado de Matriz Inversa </td> </tr> </thead> <tbody>  <tr align='enter'> <td> <p>"+ Math.round((invD)*100)/100 +"</p> </td> <td> <p>"+ Math.round((invB)*100)/100 +"</p> </td> </tr> <tr align='center'>  <td> <p>"+ Math.round((invC)*100)/100 +"</p> </td> <td> <p>"+ Math.round((invA)*100)/100 +"</p> </td> </tr> </tbody> </table> ");
		}else{
			$('#resp').html("<p class='error'>Error del determinante=> Resultado = 0</p>");
		}
	}

</script>
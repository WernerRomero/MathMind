<script type="text/javascript" src="https://www.google.com/jsapi"></script>
<script>
	function ecuacion(){
		var a = document.getElementById('txtA').value;
		var b = document.getElementById('txtB').value;
		var c = document.getElementById('txtC').value;
		var selected = document.getElementById('cbo').value;
		var rango = document.getElementById('txtRango').value;
		var y;

		if((a.length==0)||(b.length==0)||(c.length==0)||(rango.length==0)){
			alert("Debes llenas los campos");
		}else{
			if((b==0)||(rango==0) ){
				alert("No permitido Cero en las variables");
			}else{
				if(rango.length==1){
					$("#tds").html('');
					if(selected=='mas'){
						for (var i = rango; i>=1; i--) {
							var xa=a*(i);
							y = ((c/b) + (xa/b) ) ;
							
							var table = document.getElementById("tds");
							var row = table.insertRow(0);
							var cell1 = row.insertCell(0);
							var cell2 = row.insertCell(1);

							cell1.innerHTML = i;
							cell2.innerHTML = y;
						};
						for (var i = 0; i >= -rango; i--) {
							var xa=a*(i);
							y = ((c/b) + (xa/b) );
							
							var table = document.getElementById("tds");
							var row = table.insertRow(0);
							var cell1 = row.insertCell(0);
							var cell2 = row.insertCell(1);

							cell1.innerHTML = i;
							cell2.innerHTML = y;
							
						};	
					}else{
						for (var i = rango; i>=1; i--) {
							y = ((c - (a*(i)))/b) ;	
							
							var table = document.getElementById("tds");
							var row = table.insertRow(0);
							var cell1 = row.insertCell(0);
							var cell2 = row.insertCell(1);

							cell1.innerHTML = i;
							cell2.innerHTML = y;
						};
						for (var i = 0; i >= -rango; i--) {
							y = ((c-(a*(i)))/b);
							
							var table = document.getElementById("tds");
							var row = table.insertRow(0);
							var cell1 = row.insertCell(0);
							var cell2 = row.insertCell(1);

							cell1.innerHTML = i;
							cell2.innerHTML = y;
							
						};	
					}
					

					//$("#contenido").html("<div id='curve_chart' style='width: 900px; height: 500px'></div> ");

				}	
				drawBasic();
			}
			
		}

		
	}

	google.load('visualization', '1', {packages: ['corechart', 'line']});
    //google.setOnLoadCallback(drawChart);

	function drawBasic() {
		var data = new google.visualization.DataTable();
		var rango = document.getElementById('txtRango').value;

		var control = (parseFloat(rango)*2)+1; 

		data.addColumn('number', 'X');
		data.addColumn('number', 'Datos');

		data.addRows([
			//[parseFloat(document.getElementById("tds").rows[0].cells[0].innerText), parseFloat(document.getElementById("tds").rows[0].cells[1].innerText)],   
        	//[parseFloat(document.getElementById("tds").rows[1].cells[0].innerText), parseFloat(document.getElementById("tds").rows[1].cells[1].innerText)],  
        	//[parseFloat(document.getElementById("tds").rows[2].cells[0].innerText), parseFloat(document.getElementById("tds").rows[2].cells[1].innerText)],  
        	//[parseFloat(document.getElementById("tds").rows[3].cells[0].innerText), parseFloat(document.getElementById("tds").rows[3].cells[1].innerText)], 
        	//[parseFloat(document.getElementById("tds").rows[4].cells[0].innerText), parseFloat(document.getElementById("tds").rows[4].cells[1].innerText)]
        	
        	<?php 
        		
	          for ($i=0; $i < 5 ; $i++) { 
	        ?>
	        [parseFloat(document.getElementById("tds").rows[<?php echo $i; ?>].cells[0].innerText), parseFloat(document.getElementById("tds").rows[<?php echo $i; ?>].cells[1].innerText)],    
	        <?php
	            }
	        ?>

      	]);

		var options = { title: 'Ecuaciones' };
		var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
		chart.draw(data, options);
	}
</script>
<script type="text/javascript" src="https://www.google.com/jsapi"></script>

<script type="text/javascript">
   
   function creadGrid(){
    var cadena = document.getElementById('txtCadena').value;
      $("#txtCadena").val('');
      $("#grida").html("");
      $("#gridb").html("");
      $("#vuelta").val('');
      $("#gridc").html("");
   	var sumaGA = 0, sumaGB = 0, promedioGA = 0, promedioGB=0, varianzaGA=0, varianzaGB=0;
   	
    if(cadena.length==0){
   		alert("Debes llenar la Cadena");
   	}else{
   		var datos = cadena.split(":");
   		if(datos.length==2){
   			var cadenaArrayA = datos[0].split(",");
   			var cadenaArrayB = datos[1].split(",");
   			var a,b;
   			if(cadenaArrayA.length == cadenaArrayB.length){
   				

   				for (var i = 0; i <= cadenaArrayA.length-1; i++) {
   					a= '<input type="text" class="form-control" id="gridA_'+ i +'" name="gridA_'+ i +'" value="'+cadenaArrayA[i].trim()+'" />';
   					$("#grida").append(a);

   					sumaGA += parseFloat(cadenaArrayA[i]);
                  varianzaGA += parseFloat(Math.pow(cadenaArrayA[i],2));

   					b= '<input type="text" class="form-control" id="gridB_'+ i +'" name="gridAB_'+ i +'" value="'+cadenaArrayB[i].trim()+'" />';
   					$("#gridb").append(b);

   					sumaGB += parseFloat(cadenaArrayB[i]);
            varianzaGB += parseFloat(Math.pow(cadenaArrayB[i],2));

   				};
               promedioGA = sumaGA/cadenaArrayA.length;
               promedioGB = sumaGB/cadenaArrayB.length;

               var varianzaGA2=((varianzaGA/cadenaArrayA.length)-(Math.pow(promedioGA,2)) );
               var varianzaGB2=((varianzaGB/cadenaArrayB.length)-(Math.pow(promedioGB,2)) );

   				$("#gridASuma").html('Suma: '+sumaGA);
   				$("#gridAPromedio").html('Promedio: '+promedioGA);
               $("#gridAVarianza").html('Varianza: '+   Math.round( varianzaGA2 *100)/100  );
               $("#gridADesviacion").html('Desviacion: '+ Math.round(Math.sqrt(varianzaGA2)*100)/100      );


   				$("#gridBSuma").html('Suma: '+sumaGB);
               $("#gridBPromedio").html('Promedio: '+promedioGB);
               $("#gridBVarianza").html('Varianza: '+   Math.round( varianzaGB2 *100)/100  );
               $("#gridBDesviacion").html('Desviacion: '+ Math.round(Math.sqrt(varianzaGB2)*100)/100      );

               $("#vuelta").val(cadenaArrayA.length);
   			}
   		}else{
   			alert("La cadena debe tener 2 sectores de datos, no mas");
   		}
   	}
   }

   function suma(){
      var vuelta = document.getElementById('vuelta').value;
      var gridAA = 0;
      var optAA = document.getElementById("opcAA");
      var optAB = document.getElementById("opcAB");
      var optBA = document.getElementById("opcBA");
      var optBB = document.getElementById("opcBB");
      var c ;
      var sumaGC=0.0, promedioGC=0.0, varianzaGC=0.0, varianzaGC2=0.0;

      $("#gridc").html("");


      if(vuelta.length==0){
          alert("Debes de introducir un valor");
      }else if(vuelta.length==1){

         if(opcAA.checked==true){
            for (var i = 0; i <= vuelta-1; i++) {
               gridAA = parseFloat(document.getElementById('gridA_'+i).value) + parseFloat(document.getElementById('gridA_'+i).value);
               c= '<input type="text" class="form-control" id="gridC_'+ i +'" name="gridC_'+ i +'" value="'+gridAA+'" />';
               gridAA = "";
               $("#gridc").append(c);

               sumaGC += parseFloat(document.getElementById('gridA_'+i).value) + parseFloat(document.getElementById('gridA_'+i).value);
               varianzaGC += parseFloat(Math.pow(parseFloat(document.getElementById('gridA_'+i).value) + parseFloat(document.getElementById('gridA_'+i).value),2));
            };

            
            promedioGC = sumaGC/vuelta;
            varianzaGC2=((varianzaGC/vuelta)-(Math.pow(promedioGC,2)) );
            $("#gridCSuma").html('Suma: '+sumaGC);
            $("#gridCPromedio").html('Promedio: '+promedioGC);
            $("#gridCVarianza").html('Varianza: '+   Math.round( varianzaGC2 *100)/100  );
            $("#gridCDesviacion").html('Desviacion: '+ Math.round(Math.sqrt(varianzaGC2)*100)/100      );
         }else if(opcAB.checked==true){
            for (var i = 0; i <= vuelta-1; i++) {
               gridAA = parseFloat(document.getElementById('gridA_'+i).value) + parseFloat(document.getElementById('gridB_'+i).value);
               c= '<input type="text" class="form-control" id="gridC_'+ i +'" name="gridC_'+ i +'" value="'+gridAA+'" />';
               gridAA = "";
               $("#gridc").append(c);

               sumaGC += parseFloat(document.getElementById('gridA_'+i).value) + parseFloat(document.getElementById('gridB_'+i).value);
               varianzaGC += parseFloat(Math.pow(parseFloat(document.getElementById('gridA_'+i).value) + parseFloat(document.getElementById('gridB_'+i).value),2));
            };

            promedioGC = sumaGC/vuelta;
            varianzaGC2=((varianzaGC/vuelta)-(Math.pow(promedioGC,2)) );
            $("#gridCSuma").html('Suma: '+sumaGC);
            $("#gridCPromedio").html('Promedio: '+promedioGC);
            $("#gridCVarianza").html('Varianza: '+   Math.round( varianzaGC2 *100)/100  );
            $("#gridCDesviacion").html('Desviacion: '+ Math.round(Math.sqrt(varianzaGC2)*100)/100      );
         }else if(optBA.checked==true){
            for (var i = 0; i <= vuelta-1; i++) {
               gridAA = parseFloat(document.getElementById('gridB_'+i).value) + parseFloat(document.getElementById('gridA_'+i).value);
               c= '<input type="text" class="form-control" id="gridC_'+ i +'" name="gridC_'+ i +'" value="'+gridAA+'" />';
               gridAA = "";
               $("#gridc").append(c);

               sumaGC += parseFloat(document.getElementById('gridB_'+i).value) + parseFloat(document.getElementById('gridA_'+i).value);
               varianzaGC += parseFloat(Math.pow(parseFloat(document.getElementById('gridB_'+i).value) + parseFloat(document.getElementById('gridA_'+i).value),2));
            };

            promedioGC = sumaGC/vuelta;
            varianzaGC2=((varianzaGC/vuelta)-(Math.pow(promedioGC,2)) );
            $("#gridCSuma").html('Suma: '+sumaGC);
            $("#gridCPromedio").html('Promedio: '+promedioGC);
            $("#gridCVarianza").html('Varianza: '+   Math.round( varianzaGC2 *100)/100  );
            $("#gridCDesviacion").html('Desviacion: '+ Math.round(Math.sqrt(varianzaGC2)*100)/100      );
         }else if(optBB.checked==true){
            for (var i = 0; i <= vuelta-1; i++) {
               gridAA = parseFloat(document.getElementById('gridB_'+i).value) + parseFloat(document.getElementById('gridB_'+i).value);
               c= '<input type="text" class="form-control" id="gridC_'+ i +'" name="gridC_'+ i +'" value="'+gridAA+'" />';
               gridAA = "";
               $("#gridc").append(c);

               sumaGC += parseFloat(document.getElementById('gridB_'+i).value) + parseFloat(document.getElementById('gridB_'+i).value);
               varianzaGC += parseFloat(Math.pow(parseFloat(document.getElementById('gridB_'+i).value) + parseFloat(document.getElementById('gridB_'+i).value),2));
            };

            promedioGC = sumaGC/vuelta;
            varianzaGC2=((varianzaGC/vuelta)-(Math.pow(promedioGC,2)) );
            $("#gridCSuma").html('Suma: '+sumaGC);
            $("#gridCPromedio").html('Promedio: '+promedioGC);
            $("#gridCVarianza").html('Varianza: '+   Math.round( varianzaGC2 *100)/100  );
            $("#gridCDesviacion").html('Desviacion: '+ Math.round(Math.sqrt(varianzaGC2)*100)/100      );
         }else{
            alert("Debes de seleccionar una opcion");
         }
   
            
         drawBasic();
         drawBasic2();
         drawBasic3();

      }else{
         alert('nose'); 
      }
   }

   function resta(){
      var vuelta = document.getElementById('vuelta').value;
      var gridAA = 0;
      var optAA = document.getElementById("opcAA");
      var optAB = document.getElementById("opcAB");
      var optBA = document.getElementById("opcBA");
      var optBB = document.getElementById("opcBB");
      var c ;
      var sumaGC=0.0, promedioGC=0.0, varianzaGC=0.0, varianzaGC2=0.0;

      $("#gridc").html("");


      if(vuelta.length==0){
          alert("Debes de introducir un valor");
      }else if(vuelta.length==1){

         if(opcAA.checked==true){
            for (var i = 0; i <= vuelta-1; i++) {
               gridAA = parseFloat(document.getElementById('gridA_'+i).value) - parseFloat(document.getElementById('gridA_'+i).value);
               c= '<input type="text" class="form-control" id="gridC_'+ i +'" name="gridC_'+ i +'" value="'+gridAA+'" />';
               gridAA = "";
               $("#gridc").append(c);

               sumaGC += parseFloat(document.getElementById('gridA_'+i).value) + parseFloat(document.getElementById('gridA_'+i).value);
               varianzaGC += parseFloat(Math.pow(parseFloat(document.getElementById('gridA_'+i).value) + parseFloat(document.getElementById('gridA_'+i).value),2));
            };

            
            promedioGC = sumaGC/vuelta;
            varianzaGC2=((varianzaGC/vuelta)-(Math.pow(promedioGC,2)) );
            $("#gridCSuma").html('Suma: '+sumaGC);
            $("#gridCPromedio").html('Promedio: '+promedioGC);
            $("#gridCVarianza").html('Varianza: '+   Math.round( varianzaGC2 *100)/100  );
            $("#gridCDesviacion").html('Desviacion: '+ Math.round(Math.sqrt(varianzaGC2)*100)/100      );
         }else if(opcAB.checked==true){
            for (var i = 0; i <= vuelta-1; i++) {
               gridAA = parseFloat(document.getElementById('gridA_'+i).value) - parseFloat(document.getElementById('gridB_'+i).value);
               c= '<input type="text" class="form-control" id="gridC_'+ i +'" name="gridC_'+ i +'" value="'+gridAA+'" />';
               gridAA = "";
               $("#gridc").append(c);

               sumaGC += parseFloat(document.getElementById('gridA_'+i).value) + parseFloat(document.getElementById('gridB_'+i).value);
               varianzaGC += parseFloat(Math.pow(parseFloat(document.getElementById('gridA_'+i).value) + parseFloat(document.getElementById('gridB_'+i).value),2));
            };

            promedioGC = sumaGC/vuelta;
            varianzaGC2=((varianzaGC/vuelta)-(Math.pow(promedioGC,2)) );
            $("#gridCSuma").html('Suma: '+sumaGC);
            $("#gridCPromedio").html('Promedio: '+promedioGC);
            $("#gridCVarianza").html('Varianza: '+   Math.round( varianzaGC2 *100)/100  );
            $("#gridCDesviacion").html('Desviacion: '+ Math.round(Math.sqrt(varianzaGC2)*100)/100      );
         }else if(optBA.checked==true){
            for (var i = 0; i <= vuelta-1; i++) {
               gridAA = parseFloat(document.getElementById('gridB_'+i).value) - parseFloat(document.getElementById('gridA_'+i).value);
               c= '<input type="text" class="form-control" id="gridC_'+ i +'" name="gridC_'+ i +'" value="'+gridAA+'" />';
               gridAA = "";
               $("#gridc").append(c);

               sumaGC += parseFloat(document.getElementById('gridB_'+i).value) + parseFloat(document.getElementById('gridA_'+i).value);
               varianzaGC += parseFloat(Math.pow(parseFloat(document.getElementById('gridB_'+i).value) + parseFloat(document.getElementById('gridA_'+i).value),2));
            };

            promedioGC = sumaGC/vuelta;
            varianzaGC2=((varianzaGC/vuelta)-(Math.pow(promedioGC,2)) );
            $("#gridCSuma").html('Suma: '+sumaGC);
            $("#gridCPromedio").html('Promedio: '+promedioGC);
            $("#gridCVarianza").html('Varianza: '+   Math.round( varianzaGC2 *100)/100  );
            $("#gridCDesviacion").html('Desviacion: '+ Math.round(Math.sqrt(varianzaGC2)*100)/100      );
         }else if(optBB.checked==true){
            for (var i = 0; i <= vuelta-1; i++) {
               gridAA = parseFloat(document.getElementById('gridB_'+i).value) - parseFloat(document.getElementById('gridB_'+i).value);
               c= '<input type="text" class="form-control" id="gridC_'+ i +'" name="gridC_'+ i +'" value="'+gridAA+'" />';
               gridAA = "";
               $("#gridc").append(c);

               sumaGC += parseFloat(document.getElementById('gridB_'+i).value) + parseFloat(document.getElementById('gridB_'+i).value);
               varianzaGC += parseFloat(Math.pow(parseFloat(document.getElementById('gridB_'+i).value) + parseFloat(document.getElementById('gridB_'+i).value),2));
            };

            promedioGC = sumaGC/vuelta;
            varianzaGC2=((varianzaGC/vuelta)-(Math.pow(promedioGC,2)) );
            $("#gridCSuma").html('Suma: '+sumaGC);
            $("#gridCPromedio").html('Promedio: '+promedioGC);
            $("#gridCVarianza").html('Varianza: '+   Math.round( varianzaGC2 *100)/100  );
            $("#gridCDesviacion").html('Desviacion: '+ Math.round(Math.sqrt(varianzaGC2)*100)/100      );
         }else{
            alert("Debes de seleccionar una opcion");
         }
   
            
         drawBasic();
         drawBasic2();
         drawBasic3();
            
      }else{
         alert('nose'); 
      }
   }

    function Escalar(){
      var vuelta = document.getElementById('vuelta').value;
      var gridDD = 0.0;
      var optA = document.getElementById("opcA");
      var optB = document.getElementById("opcB");
      var optC = document.getElementById("opcC");
      var txtEscalar = document.getElementById("txtEscalar").value;

      var sumaGD=0.0, promedioGD=0.0, varianzaGD=0.0, varianzaGD2=0.0;
      $("#gridd").html("");

      if(vuelta.length==0){
        alert("Debes introducir un valor");
      }else if(vuelta.length==1){
        if(optA.checked==true){
          for (var i = 0; i <= vuelta-1; i++) {
               gridDD = parseFloat(document.getElementById('gridA_'+i).value) * parseFloat(txtEscalar);
               d= '<input type="text" class="form-control" id="gridD_'+ i +'" name="gridD_'+ i +'" value="'+gridDD+'" />';
               gridDD = "";
               $("#gridd").append(d);

               sumaGD += parseFloat(document.getElementById('gridD_'+i).value) ;
               varianzaGD += parseFloat(Math.pow(document.getElementById('gridD_'+i).value,2));
            };

            promedioGD = sumaGD/vuelta;
            varianzaGD2=((varianzaGD/vuelta)-(Math.pow(promedioGD,2)) );
            $("#gridDSuma").html('Suma: '+sumaGD);
            $("#gridDPromedio").html('Promedio: '+promedioGD);
            $("#gridDVarianza").html('Varianza: '+   Math.round( varianzaGD2 *100)/100  );
            $("#gridDDesviacion").html('Desviacion: '+ Math.round(Math.sqrt(varianzaGD2)*100)/100  ); 
            drawBasic4();
        }else if(optB.checked==true){
          for (var i = 0; i <= vuelta-1; i++) {
               gridDD = parseFloat(document.getElementById('gridB_'+i).value) * parseFloat(txtEscalar);
               d= '<input type="text" class="form-control" id="gridD_'+ i +'" name="gridD_'+ i +'" value="'+gridDD+'" />';
               gridDD = "";
               $("#gridd").append(d);

               sumaGD += parseFloat(document.getElementById('gridD_'+i).value) ;
               varianzaGD += parseFloat(Math.pow(document.getElementById('gridD_'+i).value,2));
            };

            promedioGD = sumaGD/vuelta;
            varianzaGD2=((varianzaGD/vuelta)-(Math.pow(promedioGD,2)) );
            $("#gridDSuma").html('Suma: '+sumaGD);
            $("#gridDPromedio").html('Promedio: '+promedioGD);
            $("#gridDVarianza").html('Varianza: '+   Math.round( varianzaGD2 *100)/100  );
            $("#gridDDesviacion").html('Desviacion: '+ Math.round(Math.sqrt(varianzaGD2)*100)/100  ); 
            drawBasic4();
        }else if(optC.checked==true){
          for (var i = 0; i <= vuelta-1; i++) {
               gridDD = parseFloat(document.getElementById('gridC_'+i).value) * parseFloat(txtEscalar);
               d= '<input type="text" class="form-control" id="gridD_'+ i +'" name="gridD_'+ i +'" value="'+gridDD+'" />';
               gridDD = "";
               $("#gridd").append(d);

               sumaGD += parseFloat(document.getElementById('gridD_'+i).value) ;
               varianzaGD += parseFloat(Math.pow(document.getElementById('gridD_'+i).value,2));
            };

            promedioGD = sumaGD/vuelta;
            varianzaGD2=((varianzaGD/vuelta)-(Math.pow(promedioGD,2)) );
            $("#gridDSuma").html('Suma: '+sumaGD);
            $("#gridDPromedio").html('Promedio: '+promedioGD);
            $("#gridDVarianza").html('Varianza: '+   Math.round( varianzaGD2 *100)/100  );
            $("#gridDDesviacion").html('Desviacion: '+ Math.round(Math.sqrt(varianzaGD2)*100)/100  ); 
          
          drawBasic4();
        }
      }
    }

   google.load('visualization', '1', {packages: ['corechart', 'bar']});
   //google.setOnLoadCallback(drawBasic);  
    function drawBasic() {
      
      var data = google.visualization.arrayToDataTable([
        ['Serie', 'Escala', { role: 'style' } ],
        ['0', parseFloat(document.getElementById('gridA_0').value), 'opacity: 0.2'],
        ['1', parseFloat(document.getElementById('gridA_1').value), 'color: #76A7FA'],
        ['2', parseFloat(document.getElementById('gridA_2').value), 'opacity: 0.2'],
        ['3', parseFloat(document.getElementById('gridA_3').value), 'color: #76A7FA'],
        ['4', parseFloat(document.getElementById('gridA_4').value), 'opacity: 0.2']
      ]);

      var options = {
        title: 'Serie de Datos Grid A'
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }

    google.load('visualization', '1', {packages: ['corechart', 'bar']});
    function drawBasic2() {
      //var vuelta = document.getElementById('vuelta').value;
      var data;

      data = google.visualization.arrayToDataTable([
        ['Serie', 'Escala', { role: 'style' } ],
        ['0', parseFloat(document.getElementById('gridB_0').value), 'opacity: 0.2'],
        ['1', parseFloat(document.getElementById('gridB_1').value), 'color: #76A7FA'],
        ['2', parseFloat(document.getElementById('gridB_2').value), 'opacity: 0.2'],
        ['3', parseFloat(document.getElementById('gridB_3').value), 'color: #76A7FA'],
        ['4', parseFloat(document.getElementById('gridB_4').value), 'opacity: 0.2']
      ]);

      var options = {
        title: 'Serie de Datos Grid B'
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div2'));

      chart.draw(data, options);
    }

    google.load('visualization', '1', {packages: ['corechart', 'bar']});
    function drawBasic3() {
      //var vuelta = document.getElementById('vuelta').value;
      var data;

      data = google.visualization.arrayToDataTable([
        ['Serie', 'Escala', { role: 'style' } ],
        ['0', parseFloat(document.getElementById('gridC_0').value), 'opacity: 0.2'],
        ['1', parseFloat(document.getElementById('gridC_1').value), 'color: #76A7FA'],
        ['2', parseFloat(document.getElementById('gridC_2').value), 'opacity: 0.2'],
        ['3', parseFloat(document.getElementById('gridC_3').value), 'color: #76A7FA'],
        ['4', parseFloat(document.getElementById('gridC_4').value), 'opacity: 0.2']
      ]);

      var options = {
        title: 'Serie de Datos Grid C'
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div3'));

      chart.draw(data, options);
    }

    google.load('visualization', '1', {packages: ['corechart', 'bar']});
    function drawBasic4() {
      //var vuelta = document.getElementById('vuelta').value;
      var data;

      data = google.visualization.arrayToDataTable([
        ['Serie', 'Escala', { role: 'style' } ],
        ['0', parseFloat(document.getElementById('gridD_0').value), 'opacity: 0.2'],
        ['1', parseFloat(document.getElementById('gridD_1').value), 'color: #76A7FA'],
        ['2', parseFloat(document.getElementById('gridD_2').value), 'opacity: 0.2'],
        ['3', parseFloat(document.getElementById('gridD_3').value), 'color: #76A7FA'],
        ['4', parseFloat(document.getElementById('gridD_4').value), 'opacity: 0.2']
      ]);

      var options = {
        title: 'Serie de Datos Grid D'
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div4'));

      chart.draw(data, options);
    }

</script>
<script type="text/javascript" src="https://www.google.com/jsapi"></script>

<script>
	function suma() {
		var MA11 = parseFloat(document.getElementById('a11').value);
		var MA12 = parseFloat(document.getElementById('a12').value);
		var MA13 = parseFloat(document.getElementById('a13').value);

		var MA21 = parseFloat(document.getElementById('a21').value);
		var MA22 = parseFloat(document.getElementById('a22').value);
		var MA23 = parseFloat(document.getElementById('a23').value);

		var MA31 = parseFloat(document.getElementById('a31').value);
		var MA32 = parseFloat(document.getElementById('a32').value);
		var MA33 = parseFloat(document.getElementById('a33').value);


		var MB11 = parseFloat(document.getElementById('b11').value);
		var MB12 = parseFloat(document.getElementById('b12').value);
		var MB13 = parseFloat(document.getElementById('b13').value);

		var MB21 = parseFloat(document.getElementById('b21').value);
		var MB22 = parseFloat(document.getElementById('b22').value);
		var MB23 = parseFloat(document.getElementById('b23').value);

		var MB31 = parseFloat(document.getElementById('b31').value);
		var MB32 = parseFloat(document.getElementById('b32').value);
		var MB33 = parseFloat(document.getElementById('b33').value);


		$("#resp").html("<table align='center' class='table table-bordered'><thead><tr><td colspan='3'>Suma de Matriz 3x3</td><td></td><td colspan='3'>Resta de Matriz 3x3</td></tr></thead><tbody><tr align='center'><td><p>"+ (MA11+MB11) +"</p></td><td><p>"+ (MA12+MB12) +"</p></td><td><p>"+ (MA13+MB13) +"</p></td><td></td><td><p>"+ (MA11-MB11) +"</p></td><td><p>"+ (MA12-MB12) +"</p></td><td><p>"+ (MA13-MB13) +"</p></td></tr><tr align='center'><td><p>"+ (MA21+MB21) +"</p></td><td><p>"+ (MA22+MB22) +"</p></td><td><p>"+ (MA23+MB23) +"</p></td><td></td><td><p>"+ (MA21-MB21) +"</p></td><td><p>"+ (MA22-MB22) +"</p></td><td><p>"+ (MA23-MB23) +"</p></td></tr><tr align='center'><td><p>"+ (MA31+MB31) +"</p></td><td><p>"+ (MA32+MB32) +"</p></td><td><p>"+ (MA33+MB33) +"</p></td><td></td><td><p>"+ (MA31-MB31) +"</p></td><td><p>"+ (MA32-MB32) +"</p></td><td><p>"+ (MA33-MB33) +"</p></td></tr></tbody></table>");
	drawBasic(MA11, MA12, MA13, MA21, MA22, MA23, MA31, MA32, MA33);
	drawBasic2(MB11, MB12, MB13, MB21, MB22, MB23, MB31, MB32, MB33);
}

	google.load('visualization', '1', {packages: ['corechart', 'bar']});
	function drawBasic(MA11, MA12, MA13, MA21, MA22, MA23, MA31, MA32, MA33) {
      var data = google.visualization.arrayToDataTable([
          ['Columna', '01', '02', '03'],
          ['A', MA11, MA12, MA13],
          ['B', MA21, MA22, MA23],
          ['C', MA31, MA32, MA33]
        ]);

      var options = {
        title: 'Serie de Datos Grid A'
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }

    google.load('visualization', '1', {packages: ['corechart', 'bar']});
    function drawBasic2(MB11, MB12, MB13, MB21, MB22, MB23, MB31, MB32, MB33) {
      var data = google.visualization.arrayToDataTable([
          ['Columna', '01', '02', '03'],
          ['A', MB11, MB12, MB13],
          ['B', MB21, MB22, MB23],
          ['C', MB31, MB32, MB33]
        ]);

      var options = {
        title: 'Serie de Datos Grid B'
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div2'));
      chart.draw(data, options);
    }

</script>
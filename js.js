<script type="text/javascript" src="https://www.google.com/jsapi"></script>
    
    <script type="text/javascript">
      google.load('visualization', '1.1', {packages: ['corechart', 'bar']});
      google.setOnLoadCallback(drawChart);
      
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Años', 'Escalas', { role: 'style' } ],
          //['Años', 'Escalas', { role: 'style' } ],
          //['2014', 1000, 'opacity: 0.2']
          <?php 
          $x = 1;
            for ($i=0; $i <3 ; $i++) { 
              $x += 1;
          ?>
            [<?php echo $i; ?>, <?php echo $x*10 ?>, 'opacity: 0.2'],
          <?php
            }
          ?>
        ]);

        var options = {
          chart: { title: 'Char google Api Prueba' }
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
    </script>
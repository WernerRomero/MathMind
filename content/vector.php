<!DOCTYPE html>
<html lang="ES">
	<head>
		<meta charset="UTF-8">
		<title>MathMind</title>
		<?php include('inc/head_common.inc'); ?>
	</head>
	<body>
		<?php include('inc/header.inc'); ?>

		<div class="container content2 content3">
			<div class="row">
				<div class="col-xs-12">
					<h2>MathMind: Calculador</h2>
					<br>
				</div>
			</div>
			

			<div class="row">
				<div class="col-xs-12">
					<table align="center" class="table table-bordered">
						<thead>
							<tr>
								<td colspan="4" align="center"><h4>Suma y Resta de Vectores</h4></td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<br>
									Cadena de Datos:
								</td>
								<td>
									<br>
									<input type="text" class="form-control" name="txtCadena" id="txtCadena" placeholder="[3,2,1 : 9,8,7]" onKeypress="if (event.keyCode < 42 || event.keyCode > 59) event.returnValue = false;">
								</td>
								<td>
									<br>
									<a class="btn btn-default form-control" href="javascript: creadGrid();" role="button">Procesar</a>
								</td>
								<td>
									Multiplicacion por Escalar: 
									<input type="text" class="form-control" name="txtEscalar" id="txtEscalar" placeholder="5" onKeypress="if (event.keyCode < 42 || event.keyCode > 59) event.returnValue = false;">
								</td>
							</tr>

							<tr>
								<td>Grid A
									<div id="grida"></div>
								</td>
								<td>Grid B
									<div id="gridb"></div>
								</td>	
								<td>Grid C
									<div id="gridc"></div>
								</td>
								<td>Grid D
									<div id="gridd"></div>
								</td>
							</tr>

							<tr>
								<td>
									<div class="radio">
										<label>
							                <input type="radio" name="opcion" id="opcAA" value="AA" >
							                A & A
							            </label>
									</div>
									<br>
									<div class="radio">
										<label>
							                <input type="radio" name="opcion" id="opcAB" value="AB" >
							                A & B
							            </label>
									</div>
								</td>
								<td>
									
									<div class="radio">
									<label>
						                <input type="radio" name="opcion" id="opcBA" value="BA" >
						                B & A
						            </label>
									</div>
									<br>
									<div class="radio">
										<label>
							                <input type="radio" name="opcion" id="opcBB" value="BB" >
							                B & B
							            </label>
									</div>
								</td>

								<td>
									<a class="btn btn-default form-control" href="javascript: suma();" role="button">Suma</a>
									<br><br>
									<a class="btn btn-default form-control" href="javascript: resta();" role="button">Resta</a>
								</td>
								<td>
									<div class="radio">
										<label>
							                <input type="radio" name="opc" id="opcA" value="A" >
							                Grid A
							            </label>
									</div>
									<div class="radio">
										<label>
							                <input type="radio" name="opc" id="opcB" value="B" >
							                Grid B
							            </label>
									</div>
									<div class="radio">
										<label>
							                <input type="radio" name="opc" id="opcC" value="C" >
							                Grid C
							            </label>
									</div>
									<a class="btn btn-default form-control" href="javascript: Escalar();" role="button">Procesar</a>
								</td>
							</tr>

							<tr>
								<td>
									<label id="gridASuma">Suma: ???</label><br>
									<label id="gridAPromedio">Promedio: ???</label><br>
									<label id="gridAVarianza">Varianza: ???</label><br>
									<label id="gridADesviacion">Desviacion: ???</label><br>
								</td>



								<td>
									<label id="gridBSuma">Suma: ???</label><br>
									<label id="gridBPromedio">Promedio: ???</label><br>
									<label id="gridBVarianza">Varianza: ???</label><br>
									<label id="gridBDesviacion">Desviacion: ???</label><br>
								</td>



								<td>
									<label id="gridCSuma">Suma: ???</label><br>
									<label id="gridCPromedio">Promedio: ???</label><br>
									<label id="gridCVarianza">Varianza: ???</label><br>
									<label id="gridCDesviacion">Desviacion: ???</label><br>
								</td>


								<td>
									<label id="gridDSuma">Suma: ???</label><br>
									<label id="gridDPromedio">Promedio: ???</label><br>
									<label id="gridDVarianza">Varianza: ???</label><br>
									<label id="gridDDesviacion">Desviacion: ???</label><br>
								</td>
							</tr>

							<tr>
								<td>
									<h4>Grafico A</h4>

									<div align="center" id="chart_div"><div>
								</td>
								<td>
									<h4>Grafico B</h4>

									<div align="center" id="chart_div2"><div>
								</td>
								<td>
									<h4>Grafico C</h4>

									<div align="center" id="chart_div3"><div>
								</td>
								<td>
									<h4>Grafico D</h4>

									<div align="center" id="chart_div4"><div>
								</td>
							</tr>
														
						</tbody>			
					</table>
				</div>
			</div>
		
		<input type="text" class="hidden" id="vuelta" value="0">


		</div>
	
		<?php include('inc/footer2.inc'); include('inc/footer_common.inc'); include('js/grid.js'); ?>

	</body>
</html>
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
					<h2>MathMind: Excel</h2>
					<br>
				</div>
			</div>

			<div class="row">
				<div class="col-xs-12">
					<h3>y = (C - Ax) / B</h3>
				</div>
			</div>

			<br>

			<div class="row">
				<div class="col-xs-12">
					<table align="center" class="table table-bordered">
						<thead>
							<tr>
								<td colspan="2" align="center">Datos para las Variables</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>A: </td>
								<td><input type="text" class="form-control" name="txtA" id="txtA" placeholder="Datos para A" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
							</tr>

							<tr>
								<td> Mas(+), Menos(-)</td>
								<td>
									<select name="cbo" id="cbo" class="form-control">
										<option value="mas">Mas (+)</option>
										<option value="menos">Menos (-)</option>
									</select>
								</td>
							</tr>

							<tr>
								<td>B: </td>
								<td><input type="text" class="form-control" name="txtB" id="txtB" placeholder="Datos para B" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
							</tr>

							<tr>
								<td>C: </td>
								<td><input type="text" class="form-control" name="txtC" id="txtC" placeholder="Datos para C" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
							</tr>

							<tr>
								<td>Rango:</td>
								<td><input type="text" class="form-control" name="txtRango" id="txtRango" placeholder="2" ></td>
							</tr>
							
						</tbody>
						<tfoot>
							<tr align="center">
								<td colspan="2"><a href="javascript: ecuacion()" class="btn btn-default btn-lg">Procesar</a></td>
							</tr>
						</tfoot>
					</table>	
				</div>
			</div>

			<div class="row">
				<div class="col-xs-12">
					<table align="center" class="table table-bordered">
						<thead>
							<tr>
								<td colspan="2" align="center">Datos (X,Y)</td>
							</tr>
							<tr>
								<td>X</td>
								<td>Y</td>
							</tr>
						</thead>
						<tbody id="tds">
						</tbody>
					</table>	
				</div>
			</div>

			<div class="row">
				<div class="col-xs-12">
					<div id="chart_div" class="chart_Ecu"></div>		
				</div>
			</div>

			

		</div>
	
		<?php include('inc/footer2.inc'); include('inc/footer_common.inc'); include('js/ecuacion.js'); ?>
	</body>
</html>
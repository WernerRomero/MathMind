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
								<td colspan="5"><br>Suma y Resta de Matrices 2x2</td>
								<td colspan="2">
									Multiplicacion por Escalar
									<input type="text" class="form-control" name="txtEscalar" id="txtEscalar" size="5" placeholder="5" onKeypress="if (event.keyCode < 42 || event.keyCode > 59) event.returnValue = false;">
								</td>
							</tr>
						</thead>
						<tbody>
							<tr align="center">
								<td><input type="text" class="form-control" name="a10" id="a10" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;" ></td>
								<td><input type="text" class="form-control" name="a11" id="a11" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;" ></td>
								<td></td>
								<td><input type="text" class="form-control" name="b10" id="b10" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;" ></td>
								<td><input type="text" class="form-control" name="b11" id="b11" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;" ></td>

								<td><input type="text" class="form-control" name="c10" id="c10" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;" ></td>
								<td><input type="text" class="form-control" name="c11" id="c11" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;" ></td>
							</tr>

							<tr align="center">
								<td><input type="text" class="form-control" name="a20" id="a20" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;" ></td>
								<td><input type="text" class="form-control" name="a21" id="a21" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;" ></td>
								<td>+ & -</td>
								<td><input type="text" class="form-control" name="b20" id="b20" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;" ></td>
								<td><input type="text" class="form-control" name="b21" id="b21" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;" ></td>

								<td><input type="text" class="form-control" name="c20" id="c20" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;" ></td>
								<td><input type="text" class="form-control" name="c21" id="c21" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;" ></td>
							</tr>
						</tbody>

						<tfoot>
							<tr align="center">
								<td colspan="5">
									<a class="btn btn-default " href="javascript: suma();" role="button">Procesar</a>
								</td>
								<td colspan="2">
										<label>
							                <input type="radio" name="opc" id="opcA" value="A" >
							                Grid A
							            </label>
							            &nbsp; &nbsp;
										<label>
							                <input type="radio" name="opc" id="opcB" value="B" >
							                Grid B
							            </label>
							            &nbsp; &nbsp;
									<a class="btn btn-default " href="javascript: Escalar();" role="button">Procesar</a>
								</td>
							</tr>
						</tfoot>
					</table>
				</div>
			</div>

			<div class="row">
				<div class="col-xs-12">
					<div id="resp"></div>
				</div>
			</div>



			<div class="row">
				<div class="col-xs-4">
					<div align="center" id="chart_div"></div>
				</div>
				<div class="col-xs-4">
					<div align="center" id="chart_div2"></div>
				</div>
				<div class="col-xs-4">
					<div align="center" id="chart_div3"></div>
				</div>
			</div>
		
	




		</div>
	
		<?php include('inc/footer2.inc'); include('inc/footer_common.inc'); include('js/matriz2x2.js'); ?>
	</body>
</html>
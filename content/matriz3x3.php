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
								<td colspan="7">Suma y Resta de Matrices 3x3</td>
							</tr>
						</thead>
						<tbody>
							<tr align="center">
								<td><input type="text" class="form-control" name="a11" id="a11" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
								<td><input type="text" class="form-control" name="a12" id="a12" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
								<td><input type="text" class="form-control" name="a13" id="a13" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
								<td></td>
								<td><input type="text" class="form-control" name="b11" id="b11" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
								<td><input type="text" class="form-control" name="b12" id="b12" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
								<td><input type="text" class="form-control" name="b13" id="b13" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
							</tr>

							<tr align="center">
								<td><input type="text" class="form-control" name="a21" id="a21" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
								<td><input type="text" class="form-control" name="a22" id="a22" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
								<td><input type="text" class="form-control" name="a23" id="a23" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
								<td>+ & -</td>
								<td><input type="text" class="form-control" name="b21" id="b21" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
								<td><input type="text" class="form-control" name="b22" id="b22" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
								<td><input type="text" class="form-control" name="b23" id="b23" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
							</tr>

							<tr align="center">
								<td><input type="text" class="form-control" name="a31" id="a31" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
								<td><input type="text" class="form-control" name="a32" id="a32" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
								<td><input type="text" class="form-control" name="a33" id="a33" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
								<td></td>
								<td><input type="text" class="form-control" name="b31" id="b31" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
								<td><input type="text" class="form-control" name="b32" id="b32" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
								<td><input type="text" class="form-control" name="b33" id="b33" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
							</tr>
						</tbody>

						<tfoot>
							<tr align="center">
								<td colspan="7">
									<a class="btn btn-default " href="javascript: suma();" role="button">Procesar</a>
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
				<div class="col-xs-6">
					<div align="center" id="chart_div"></div>
				</div>
				<div class="col-xs-6">
					<div align="center" id="chart_div2"></div>
				</div>
			</div>






		</div>
	
		<?php include('inc/footer2.inc'); include('inc/footer_common.inc'); include('js/matriz3x3.js'); ?>
	</body>
</html>
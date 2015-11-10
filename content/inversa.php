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
					<h3>Inversa de Matrices</h3>
					<label>
		                <input type="radio" name="opc" id="opc2x2" value="2x2" onClick="javascript: mostrar('#div2x2'), cerrar('#div3x3')" > 
		                Matriz 2x2
		            </label>
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
		            <label>
		                <input type="radio" name="opc" id="opc3x3" value="3x3" onClick="javascript: mostrar('#div3x3'), cerrar('#div2x2')">
		                Matriz 3x3
		            </label>
				</div>
			</div>

			<div class="row">
				<div class="col-xs-12">
					<div id="div2x2" class="apps"><?php include('div2x2.php'); ?></div>
					<div id="div3x3" class="apps"><?php include('div3x3.php'); ?></div>
				</div>
			</div>

			<div class="row">
				<div class="col-xs-12">
					<div id="resp"></div>
				</div>
			</div>

		</div>
	
		<?php include('inc/footer2.inc'); include('inc/footer_common.inc'); include('js/inversa.js'); ?>
	</body>
</html>
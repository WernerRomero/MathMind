<!DOCTYPE html>
<html lang="ES">
	<head>
		<meta charset="UTF-8">
		<title>MathMind</title>
		<?php include('inc/head_common.inc'); ?>
	</head>
	<body>
		<h2 class="title">MathMind</h2>
		<div class="container">
			<div id="login-form">
				<h3>Iniciar Sesion</h3>
				<fieldset>
					<form action="javascript: login()" name="frmlogin" id="frmlogin" method="POST">
						<input type="text" name="txtusuario" id="txtusuario" required placeholder="Nombre de Usuario" >

						<!--input type="password" required value="Contraseña" onBlur="if(this.value=='')this.value='Contraseña'" onFocus="if(this.value=='Contraseña')this.value='' " -->

						<input class="btn btn-lg btn-primary" type="submit" value="Acceder">

						<footer class="clearfix">
			              <div id="Divlog"><p>MathMind Login</p></div>
			            </footer>
					</form>
				</fieldset>
			</div>
		</div>

	
	
		<?php include('inc/footer_common.inc'); ?>
	</body>
</html>
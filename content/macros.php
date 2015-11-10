<!DOCTYPE html>
<html lang="ES">
	<head>
		<meta charset="UTF-8">
		<title>MathMind</title>
		<?php include('inc/head_common.inc'); ?>
	</head>
	<body>
		<?php include('inc/header.inc'); ?>

		<div class="container content2">
			<div class="row">
				<div class="col-xs-12">
					<h2>MathMind: Excel</h2>
					<br>
				</div>
			</div>


			<div class="row">
				<h3>Macros en Excel</h3>
				<div class="col-xs-12 col-sm-6">
					<p>
						Bueno, En este apartado daremos inicio a la programacion en Visual Basic Excel(VBA), Comenzaremos con algo sencillo, como es pidiendo un valor numerico, pero no nos dedicaremos por el momento a VBA primero trabajaremos con Macros, que son pequeños modulos o bloques de codigo
					</p>
				</div>
				<div class="col-xs-12 col-sm-6">
					<p>
						Ok, Para iniciar, necesitamos configurar nuestro Excel, para convertirlo en un Excel para Desarrolladores. Bien El primer paso seria Dar clic en Archivo y luego en Opciones.
					</p>
				</div>
			</div>

			<div class="row">
				<div class="col-xs-12 col-sm-6">
					<img src="img/macroconf1.png" alt="Macro" class="img61">
				</div>
				<div class="col-xs-12 col-sm-6">
					<img src="img/macroconf2.png" alt="Macro" class="img6" class="img6">
					<p>
						Una ves seleccionada la opcion de Desarrollador, le damos Aceptar y ya abremos configurado Excel para Desarrollar app en VBA
						<br>
						ahora, bien, comencemos a desarrollar nuestra primera app sencilla
					</p>
				</div>
			</div>

			<br><br>

			<div class="row">
				<h3>Crear Nuestra primera Macro</h3>
				<div class="col-xs-12 col-sm-6">
					<p>
						Damos clic en "Desarrollador" en la pestaña del Menu, Luego observamos que dice "Macros" damos clic ahi y nos aparecera una nueva ventana, donde en el espacio de texto ponemos "pide_un_numero" que sera en nombre de nuestra primera app, luego daremos clic en Crear
					</p>
				</div>
				<div class="col-xs-12 col-sm-6">
					<img src="img/macro1.png" alt="Macro" class="img6">
				</div>
			</div>


			<div class="row">
				<h3>Crear Nuestra primera Macro</h3>
				<div class="col-xs-12 col-sm-6">
					<img src="img/macro2.png" alt="Macro" class="img6">
				</div>
				<div class="col-xs-12 col-sm-6">
					<p>
						ahora bien, ya tenemos creado nuestro Macro
						ahora procederemos a escribir nuestro pequeño codigo
						
						<br>
						<br>Dim num As Double
					    <br>num = InputBox("Por favor, ingresa un valor")
					    <br>Range("H13") = num

					    <br><br>

					    Donde declaramos una variable de tipo Double osea que permita numeros enteros y decimales, seguidamente con "InputBox" Creamos un mensage emergente donde estamos pidiendo un valor y lo estamos almacenando en la variable "num"; seguidamente queremos mostrar este dato que tiene esta variable y lo mostraremos en una Celda de la Malla de Excel, donde elegiremos la celda "H13"
					    y decimos Range("H13") que sea igual al valor que tiene la variable "num"
					</p>
				</div>
			</div>

			<br><br>

			<div class="row">
				<div class="col-xs-12 col-sm-6">
					<p>
						Si deseamos ejecutar la app, para ver lo que hace damos clic en la flechita de play
						<br>
						<img src="img/macro3.png" alt="Macro" class="img6">
						<br>
						Como podemos observar, se nos ejecuta nuestra aplicacion y nos aparece la ventana emergente pidiendonos que ingresemos un valor, si lo hacemos podemos darnos cuenta que efectivamente se agrega el valor que hemos ingresado en la celda correcta.
						<br><br>
						Pero tenemos un problema si queremos ejecutar este codigo nuevamente, nos temos que ir hacia la parte de VBA y eso es muy tedioso para nosotros y nuestros clientes, bueno para hacerlo mas facil agregaremos un boton, para cual programaremos para llamar el codigo que acavamos de crear.
					</p>
				</div>
				<div class="col-xs-12 col-sm-6">
					<img src="img/macro4.png" alt="Macro" class="img6">
				</div>
			</div>






		</div>

	
		<?php include('inc/footer2.inc'); include('inc/footer_common.inc'); ?>
	</body>
</html>
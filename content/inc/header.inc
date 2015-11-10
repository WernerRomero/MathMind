<?php
	session_start();
	if(!$_SESSION['usuario']){
		header("Location: ../"); 
	}
?>
<header id="main-header">
	<div class="container">
		<div class="row">
			<div class="col-xs-5 col-sm-3">
				<h1 id="main-logo">
					<a href="../content">
						<span>MathMind</span>
					</a>
				</h1>
			</div>
			<div class="col-xs-7 col-sm-9">
				<ul id="main-menu" class="nav nav-tabs navbar-right hidden-xs">
					
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown"> 
							<span class="glyphicon glyphicon-bell"></span> 
							<span class="caret"></span> 
						</a>
						<ul class="dropdown-menu" role="menu">
							<li> <a href="../content/creador.php"><span class="glyphicon glyphicon-cog"></span>&nbsp; Creadores</a> </li>
							<li> <a href="../content/code.php"><span class="glyphicon glyphicon-qrcode"></span>&nbsp; Cod Fuente</a> </li>
						</ul>
					</li>

					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown"> 
							<span class="glyphicon glyphicon-user"></span> <?php echo $_SESSION['usuario']; ?>
							<span class="caret"></span> 
						</a>
						<ul class="dropdown-menu" role="menu">
							<li> <a href="php/logout.php"><span class="glyphicon glyphicon-ban-circle"></span>&nbsp; Salir</a> </li>
						</ul>
					</li>
				</ul>
				<a href="#" id="mobile-menu-button" class="btn btn-default visible-xs">
					<span class="glyphicon glyphicon-th-list"></span> 
				</a>
			</div>
		</div>
	</div>


	<div class="visible-xs">
		<ul id="mobile-main-menu">
			<li><a href="../content/creador.php" class="btn btn-default"><span class="glyphicon glyphicon-cog"></span>&nbsp; Creadores</a></li>
			<li><a href="php/logout.php" class="btn btn-default"><span class="glyphicon glyphicon-ban-circle"></span>&nbsp; Salir</a></li>
		</ul>
	</div>


	<div class="line-menu"></div>
</header>

<header id="nav-left">
	<div class="container">
		<div class="row">
			<div class="col-xs-12 menu-nav-left">
				<ul class="nav nav-pills nav-stacked hidden-xs">
					<li role="presentation"><a href="../content"><span class="glyphicon glyphicon-home"></span>&nbsp; Inicio</a></li>
					
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							<span class="glyphicon glyphicon-list-alt"></span>
							&nbsp; Excel 
							<span class="caret"></span> 
						</a>
						<ul class="dropdown-menu" role="menu">
							<li><a href="../content/excel.php">Crear Graficos</a></li>
							<!--li role="presentation" class="divider"></li-->
							<li><a href="../content/exc_graficar.php">Tarea: Graficar</a></li>
							<li><a href="../content/exc_matriz.php">Ecua. de Matrices</a></li>
							<li><a href="../content/macros.php">Macros</a></li>
							<li><a href="../content/call_macros.php">Llamar Macro</a></li>
						</ul>
					</li>
					

					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							<span class="glyphicon glyphicon-list-alt"></span>&nbsp;
							VBasic 
							<span class="caret"></span> 
						</a>
						<ul class="dropdown-menu" role="menu">
							<li><a href="../content/vb.php">App Vb</a></li>
							<!--li role="presentation" class="divider"></li-->
						</ul>
					</li>




					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							<span class="glyphicon glyphicon-pencil"></span>
							&nbsp; Calculador 
							<span class="caret"></span> 
						</a>
						<ul class="dropdown-menu" role="menu">
							<li><a href="../content/vector.php"><span class="glyphicon glyphicon-pencil"></span>&nbsp; Vectores</a></li>
							<li role="presentation" class="divider"></li>

							<li><a href="../content/matriz2x2.php"><span class="glyphicon glyphicon-pencil"></span>&nbsp; Matriz 2x2</a></li>
							<li><a href="../content/matriz3x3.php"><span class="glyphicon glyphicon-pencil"></span>&nbsp; Matriz 3x3</a></li>
							<li role="presentation" class="divider"></li>
							
							<li><a href="../content/inversa.php"><span class="glyphicon glyphicon-pencil"></span>&nbsp; Inversa Matriz</a></li>
							<li role="presentation" class="divider"></li>
							
							<li><a href="../content/ecuacion.php"><span class="glyphicon glyphicon-pencil"></span>&nbsp; Ecuaciones</a></li>
							<!--li role="presentation" class="divider"></li-->
						</ul>
					</li>
				  	
				  	<li> <a href="../content/creador.php"><span class="glyphicon glyphicon-cog"></span>&nbsp; Creadores</a> </li>
				  	<li> <a href="php/logout.php"><span class="glyphicon glyphicon-ban-circle"></span>&nbsp; Salir</a> </li>
				</ul>
			</div>
		</div>
	</div>

	<div class="visible-xs">
		<ul id="mobile-main-menu2">
			<li><a href="../content" class="btn btn-default"><span class="glyphicon glyphicon-home"></span></a></li>
			
			<li class="dropdown">
				<a href="#" class="dropdown-toggle btn btn-default" data-toggle="dropdown" >
					<span class="glyphicon glyphicon-list-alt"></span>&nbsp; Excel 
					<span class="caret"></span> 
				</a>
				<ul class="dropdown-menu" role="menu">
					<li><a href="../content/excel.php">Crear Graficos</a></li>
					<!--li role="presentation" class="divider"></li-->
					<li><a href="../content/exc_graficar.php">Tarea: Graficar</a></li>
					<li><a href="../content/exc_matriz.php">Ecua. de Matrices</a></li>
					<li><a href="../content/macros.php">Macros</a></li>
					<li><a href="../content/call_macros.php">Llamar Macro</a></li>
				</ul>
			</li>


			<li class="dropdown">
				<a href="#" class="dropdown-toggle btn btn-default" data-toggle="dropdown">
					<span class="glyphicon glyphicon-list-alt"></span>&nbsp; VB 
					<span class="caret"></span> 
				</a>
				<ul class="dropdown-menu" role="menu">
					<li><a href="../content/vb.php">App Vb</a></li>
					<!--li role="presentation" class="divider"></li-->
				</ul>
			</li>


			<li class="dropdown calcu upted">
				<a href="#" class="dropdown-toggle btn btn-default" data-toggle="dropdown">
					<span class="glyphicon glyphicon-list-alt"></span>&nbsp; Calcu. 
					<span class="caret"></span> 
				</a>
				<ul class="dropdown-menu" role="menu">
					<li><a href="../content/vector.php"><span class="glyphicon glyphicon-pencil"></span>&nbsp; Vectores</a></li>
							<li role="presentation" class="divider hidden-xs"></li>

							<li><a href="../content/matriz2x2.php"><span class="glyphicon glyphicon-pencil"></span>&nbsp; Matriz 2x2</a></li>
							<li><a href="../content/matriz3x3.php"><span class="glyphicon glyphicon-pencil"></span>&nbsp; Matriz 3x3</a></li>
							<li role="presentation" class="divider hidden-xs"></li>
							
							<li><a href="../content/inversa.php"><span class="glyphicon glyphicon-pencil"></span>&nbsp; Inversa Matriz</a></li>
							<li role="presentation" class="divider hidden-xs"></li>
							
							<li><a href="../content/ecuacion.php"><span class="glyphicon glyphicon-pencil"></span>&nbsp; Ecuaciones</a></li>
					<!--li role="presentation" class="divider"></li-->
				</ul>
			</li>

		  	
		  	<li> <a href="../content/creador.php" class="btn btn-default"><span class="glyphicon glyphicon-cog"></span>&nbsp; Cread.</a> </li>
		  	<li> <a href="php/logout.php" class="btn btn-default"><span class="glyphicon glyphicon-ban-circle"></span>&nbsp; Salir</a> </li>
		</ul>
	</div>
	<div class="line-left"></div>
</header>
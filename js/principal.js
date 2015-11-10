//AJAX
function ajax_datos(url2, datos, elementoHTML){
	$.ajax({
		url 	: url2,
		data	: datos,
		type	: "POST",
		success	: function(respuesta){
			if(respuesta=="true"){
				$("#Divlog").html("<p class='accep'>Acceptar</p>");
				var redic = function(){
					document.location.href='content';	
				}

				setInterval(redic,500);
			}else if(respuesta=="false"){
				$("#Divlog").html("<p class='error'>Error! Nombre mayor a 3 digitos</p>");
			}else{
				$("#Divlog").html("<p class='error'>Error! Dato Vacio</p>");
			}

			//$(elementoHTML).html(respuesta);
		},
		error	: function(e){
			alert("Error...!"+e);
		}
	});
}

function login(){
	var data=$('#frmlogin').serialize();
	ajax_datos('php/verificar.php', data, '#Divlog');
	limpiar();
}

function limpiar(){
	$("#frmlogin input[type='text']").val('');
	$("#frmlogin input[type='password']").val('');
}


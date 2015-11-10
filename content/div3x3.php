<div>
	<table align="center" class="table table-bordered">
		<thead>
			<tr>
				<td colspan="7">Inversa de Matrices 3x3</td>
			</tr>
		</thead>
		<tbody>
			<tr align="center">
				<td><input type="text" class="form-control" name="a11" id="a11" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
				<td><input type="text" class="form-control" name="a12" id="a12" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
				<td><input type="text" class="form-control" name="a13" id="a13" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
			</tr>

			<tr align="center">
				<td><input type="text" class="form-control" name="a21" id="a21" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
				<td><input type="text" class="form-control" name="a22" id="a22" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
				<td><input type="text" class="form-control" name="a23" id="a23" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
			</tr>

			<tr align="center">
				<td><input type="text" class="form-control" name="a31" id="a31" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
				<td><input type="text" class="form-control" name="a32" id="a32" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
				<td><input type="text" class="form-control" name="a33" id="a33" size="3" placeholder="[0-9]" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></td>
			</tr>
		</tbody>

		<tfoot>
			<tr align="center">
				<td colspan="7">
					<a class="btn btn-default" href="javascript: matrizinv();" role="button">Procesar</a>
				</td>
			</tr>
		</tfoot>
	</table>
</div>
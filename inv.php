<html> 
  <head> 
  <title>Calculando matriz inversa 3x3 php</title> 
  </head> 
  <body>
 
  <?php
  //editando funcion para calcular ls determinantes
  function Calcular_MatrizInversa(
    $a00,$a01,$a02,
    $a10,$a11,$a12,
    $a20,$a21,$a22){
      $total=$a00*$a11*$a22 + $a10*$a21*$a02 +$a20*$a01*$a12;
      $total=$total+($a02*$a11*$a20)*-1 + ($a12*$a21*$a00)*-1 + ($a22*$a01*$a10)*-1;
 
//si el total es 0 no tiene determinante
    if($total!=0){
      $num1=$a11*$a22-$a21*$a12;
        echo "<br>Resultado matriz inversa 3x3 php<br>";
        echo " ".$num1/$total." ".((($a01*$a22-$a21*$a02)*-1)/$total)."  ".(($a01*$a12-$a11*$a02)/$total);
        echo "<br></br>";
        echo "".((($a10*$a22-$a20*$a12)*-1)/$total)."  ".((($a00*$a22-$a20*$a02))/$total)."  ".((($a00*$a12-$a10*$a02)*-1)/$total);
        echo "<br></br>";
        echo "".((($a10*$a21-$a20*$a11))/$total)."  ".((($a00*$a21-$a20*$a01)*-1)/$total)."  ".(($a00*$a11-$a10*$a01)/$total);    
    }
    else
    {
      echo "Error el det. da 0 ";  
    }
  }?>
<form action="inv.php" method="post">
  <br>Ingrese los valores<br>
    <input type="text"  name ="a00">         <input type="text"  name ="a01"> <input type="text"  name ="a02">
<br><input type="text"  name ="a10">         <input type="text"  name ="a11"> <input type="text"  name ="a12">
<br><input type="text"  name ="a20">         <input type="text"  name ="a21"> <input type="text"  name ="a22">  
<br><input type="submit" name="calcular" value="calcular" /><br>
 <?php 
 //en caso se presione el boton de calcular mandara 
  //Calcular_MatrizInversa:
 if ($_POST['calcular']) {
  Calcular_MatrizInversa(
    $_REQUEST[a00],
    $_REQUEST[a01],
    $_REQUEST[a02],
    $_REQUEST[a10],
    $_REQUEST[a11],
    $_REQUEST[a12],
    $_REQUEST[a20],
    $_REQUEST[a21],
    $_REQUEST[a22]);} 
 ?>
 </form>


  
  </body> 
</html>
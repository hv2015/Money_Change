var cantidad = prompt("Dime un numero");

vueltas(cantidad);

/*
 * Función que da las vueltas con la menor cantidad de monedas.
 * Voraz.
 */
function vueltas(cantidad){
  
  var euros = new Array(500, 200, 100, 50, 20, 10, 5, 2, 1);
  var centimos = new Array(50, 20, 10, 5, 2, 1);
  
  var dev_euros = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
  var dev_centimos = new Array(0, 0, 0, 0, 0, 0);
  
  var cantidad_uso = cantidad;
  
  /*
   * El for recorrerá cada nuevo valor.
   * El do recorre las veces que se puede emplear cada valor
   * Si el valor es de 500 puede operar con un valor de 500, 
   * si es de 499 deberá usar un valor menor.
   */
  
  for (var i=0; i<euros.length; i++){
    
    
    if (cantidad_uso >= euros[i]){
      
      do{
        
        cantidad_uso = cantidad_uso - euros[i]
        dev_euros[i]++;
      } while ( cantidad_uso >= euros[i] );
    }
    
  }
  
  alert( dev_euros.toString() );
  
  return 0;
}
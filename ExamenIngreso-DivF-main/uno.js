/*
	1) Declarar variables
	2) Realizar la carga de 5 productos de desinfeccion, pedir nombre, tipo validar que sean alcohol/iac o quat
	pedir precio y validar el precio entre 100 y 300, pedir cant de unidades y validar cantidad de unidades (cantUni>0 && cantUni<=1000)
	pedir categoria y validar si desinfectante/bactericida/detergente, pedir fabricante
	3) mostrar el promedio de cantidad por tipo de producto (contTIPO)
	4) la categoria con mayor cantidad de unidades del total de la compra
	5) total de unidades de detergente con precios <= 200 
	6) fabricante y categoria del mas caro de los productos


*/
function mostrar(){ 

	let nombre;
	let tipo;
	let contAlcohol = 0;
	let acumAlcohol = 0;
	let promedioAlcohol = 0;
	let contIac = 0;
	let acumIac = 0;
	let promedioIac = 0;
	let contQuat = 0;
	let acumQuat = 0;
	let promedioQuat = 0;
	let precio = 0;
	let precioMaxDesinfectante = 0;
	let precioMaxBactericida = 0;
	let precioMaxDetergente = 0;
	let cantUni = 0;
	let acumUnidades = 0;
	let categoria;
	let catMax;
	let contDesinfectante = 0;
	let acumDesinfectante = 0;
	let contBactericida = 0;
	let acumBactericida = 0;
	let contDetergente = 0;
	let acumDetergente = 0;
	let acumDetergenteBarato = 0;
	let flagDesinfectante = 1;
	let flagBactericida = 1;
	let flagDetergente = 1;
	let fabricante;
	let fabricanteMax;

	for(i=0; i < 5; i++){

		nombre = prompt('Ingrese el nombre de un producto de limpieza: ');
		
		tipo = prompt('Ingrese el tipo ALCOHOL/IAC/QUAT: ');
		
		while(tipo != 'ALCOHOL' && tipo != 'IAC' && tipo != 'QUAT'){
			alert('El tipo de producto es invalido, vuelva a intentar');
			tipo = prompt('Ingrese un producto de limpieza valido:');
		}
	
		precio = parseInt(prompt('Ingrese el precio del producto entre 100 y 300'));
		
		while(precio < 100 || precio > 300){
			alert('Error el precio ingresado es invalido, vuelva a intentar');
			precio = parseInt(prompt('Ingrese el precio del producto entre 100 y 300'));
		}
		
		cantUni = parseInt(prompt('Ingrese la cantidad de unidades del producto que sea mayor a 0 y menor a 1001'));
		
		while(cantUni < 1 || cantUni > 1000){
			alert('Error la cantidad de unidades es invalidad, vuelva a intentar');
			cantUni = parseInt(prompt('Ingrese la cantidad de unidades del producto'));
		}
		
		categoria = prompt('Ingrese la categoria del producto desinfectante/batericida/detergente: ');

		while(categoria != 'desinfectante' && categoria != 'bactericida' && categoria != 'detergente'){
			alert('La categoria de producto es invalida, vuelva a intentar');
			categoria = prompt('Ingrese una categoria valida desinfectante/bactericida/detergente: ');
		}

		fabricante = prompt('Ingrese el fabricante del producto: ');

		if(tipo == 'ALCOHOL'){
			acumAlcohol += cantUni;
			contAlcohol++;
		}
		if(tipo == 'IAC'){
			acumIac += cantUni;
			contIac++;
		}
		if(tipo == 'QUAT'){
			acumQuat += cantUni;
			contQuat++;
		}
		if(categoria == 'desinfectante'){
			acumDesinfectante += cantUni;
			contDesinfectante++;
		}
		if(categoria == 'bactericida'){
			acumBactericida += cantUni;
			contBactericida++;
		}
		if(categoria == 'detergente'){
			acumDetergente += cantUni;
			contDetergente++;
		}
		if(categoria == 'detergente' && precio <= 200){
			acumDetergenteBarato += cantUni;
		}
		if(categoria == 'desinfectante' && (flagDesinfectante = 1 || precio > precioMax)){
			precioMaxDesinfectante = precio;
			fabricanteMax = fabricante;
			catMax = categoria;
			flagDesinfectante = 0;
		}
		if(categoria == 'bactericida' && (flagBactericida = 1 || precio > precioMax)){
			precioMaxBactericida = precio;
			fabricanteMax = fabricante;
			catMax = categoria;
			flagBactericida = 0;
		}
		if(categoria == 'detergente' && (flagDetergente = 1 || precio > precioMax)){
			precioMaxDetergente = precio;
			fabricanteMax = fabricante;
			catMax = categoria;
			flagDetergente = 0;
		}
		
	}
	if(contAlcohol>0){ 
	promedioAlcohol = acumAlcohol / contAlcohol;
	}
	if(contIac>0){ 
	promedioIac = acumIac / contIac;
	}
	if(contQuat>0){ 
	promedioQuat = acumQuat / contQuat;
	}
	console.log('El promedio de unidades de Alcoholes es: ' +promedioAlcohol+ ' El promedio de unidades de Iacs es: ' +promedioIac+ ' El promedio de unidades de Quats es: '+promedioQuat);
	
	if(acumDesinfectante > acumBactericida && acumDesinfectante > acumDetergente){
		console.log('La categoria con la mayor cantidad de unidades del total es Desinfectante');
	}
	else if(acumBactericida > acumDesinfectante && acumBactericida > acumDetergente){
		console.log('La categoria con la mayor cantidad de unidades del total es Bactericida');
	}
	else{
		console.log('La categoria con la mayor cantidad de unidades del total es Detergente');
	}

	console.log('Hay ' +acumDetergenteBarato+ ' detergentes con valor menor o inclusive a 200');

	if(precioMaxDesinfectante > precioMaxBactericida && precioMaxDesinfectante > precioMaxDetergente){
		console.log('El fabricante y categoria del producto mas caro es: ' +fabricanteMax+' '+catMax);
	}
	else if(precioMaxBactericida > precioMaxDesinfectante && precioMaxBactericida > precioMaxDetergente){
		console.log('El fabricante y categoria del producto mas caro es: ' +fabricanteMax+' '+catMax);
	}
	else{
		console.log('El fabricante y categoria del producto mas caro es: ' +fabricanteMax+' '+catMax);
	}

}


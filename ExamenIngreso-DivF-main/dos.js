/*
  1) declarar variables
  2) pedir datos de alumnos hasta que el usuario quiera
  3) pedir nombre, situacion laboral (validar entre buscando/trabajando/solo estudiante)
  pedir cantidad de materias (validar mas de 0 menos de 8)
  pedir sexo (validar masculino/femenino/no binario)
  pedir nota promedio (validar entre 0 y 10 inclusive)
  pedir edad (validar con isNaN)
  4) nombre del mejor promedio solo estudiante
  5) nombre del estudiante mas viejo que 'solo estudiante'
  6) promedio de nota de cada situacion laboral
  7) edad y nombre del alumno que cursa la menor cantidad de materias y esta buscando trabajo
*/
function mostrar(){

  let seguir = 's';
  let nombre;
  let nombreMax;
  let sitLab;
  let acumEstudiante = 0;
  let contEstudiante = 0;
  let acumTrabaja = 0;
  let contTrabaja = 0;
  let acumBusca = 0;
  let contBusca = 0;
  let materias = 0;
  let sexo;
  let nota = 0;
  let flagNota =1;
  let mejorNota = 0;
  let edad = 0;
  let maxEdad = 0;
  let flagEdad = 1;
  let nombreJovato;

  do{
    nombre = prompt('Ingrese el nombre del alumno: ');
		while(!(isNaN(nombre))){
			alert('El nombre ingresado es invalido');
			nombre = prompt('Ingrese el nombre del alumno: ');
		  }

      sitLab = prompt('Ingrese la situacion laboral del alumno solo estudiante/trabajando/buscando: ');
		while(sitLab != 'solo estudiante' && sitLab != 'trabajando' && sitLab != 'buscando'){
			alert('La situacion laboral ingresada es invalida!');
			sitLab = prompt('Ingrese la situacion laboral del alumno solo estudiante/trabajando/buscando: ');
		}

    materias = prompt('Ingrese la cantidad de materias entre 1 y 7 inclusive: ');
    while(materias <= 0 || materia >= 8 ){
      alert('Cantidad de materias invalidad, intente otra vez!');
      materias = prompt('Ingrese la cantidad de materias entre 1 y 7 inclusive: ')
    }

    sexo = prompt('Ingrese el sexo del alumno masculino/femenino/no binario: ');
		while(sexo != 'femenino' && sexo != 'masculino' && sexo != 'no binario'){
			alert('El sexo ingresado es invalido!');
			sexo = prompt('Ingrese el sexo del alumno masculino/femenino/no binario: ');
		  }

    nota = parseInt(prompt('Ingrese su nota promedio: '));
    while(nota < 0 || nota > 10){
      alert('La nota ingresada es invalida, tiene que ser entre 0 y 10!');
      nota = parseInt(prompt('Ingrese su nota promedio: '));
    }

		edad = parseInt(prompt('Ingrese la edad del alumno: '));
		while(isNaN(edad)){
			alert('La edad ingresada es invalida!');
			nombre = parseInt(prompt('Ingrese la edad del alumno: '));
		}
    if(sitLab == 'solo estudiante' && (flagNota = 1 || nota > mejorNota)){
      mejorNota = nota;
      nombreMax = nombre;
    }
    if(sitLab == 'solo estudiante' && (flagEdad = 1 || edad > maxEdad)){
      maxEdad = edad;
      nombreJovato = nombre;
    }
    if(sitLab == 'solo estudiante'){
			acumEstudiante += nota;
			contEstudiante++;
		}
		if(sitLab == 'trabajando'){
			acumTrabaja += nota;
			contTrabaja++;
		}
		if(sitLab == 'buscando'){
			acumBusca += nota;
			contBusca ++;
		}
	

  }
  while(seguir == 's');

  console.log('El nombre del (solo estudiante) con mejor promedio es: ' +nombreMax);
  console.log('El nombre del (solo estudiante) mas viejo es: ' +nombreJovato);

  if(contEstudiante == 0){
    console.log('No existe promedio de alumnos que solo estudian porque no se ingreso ninguno');
  }
  else{ 
  console.log('El promedio de nota de alumnos que solo estudian es: ' +acumEstudiante/contEstudiante);
  }
  if(contTrabaja == 0){
    console.log('No existe promedio de alumnos trabajando porque no se ingreso ninguno');
  }
  else{
  console.log('El promedio de nota de alumnos que trabajan es: ' +acumTrabaja/contTrabaja);
  }
  if(contBusca == 0){
    console.log('No existe promedio de alumnos buscando trabajo porque no se ingreso ninguno');
  }
  else{
    console.log('El promedio de nota de alumnos buscan trabajo es: ' +acumBusca/contBusca)
  }
  


}

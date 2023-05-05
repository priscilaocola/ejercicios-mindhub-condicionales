// //ejercicio 1

//  function esMayor(num1, num2) {
//      if (num1 > num2){
//          console.log(`El número ${num1} es mayor que ${num2}`)
//      }else{
//          console.log(`El número ${num1} no es mayor que ${num2}`)
//      }
//  }
//  esMayor(2, 5);

//  //ejercicio 2

//  function sonIguales(num1, num2) {
//      if (num1 === num2){
//          console.log(`El número ${num1} es igual que ${num2}`)
//      }else{
//          console.log(`El número ${num1} es diferente que ${num2}`)
//      }
//  }
// sonIguales(5, 5);

// // //ejercicio 3

//  function masGrande(numero1, numero2) {
//      if (numero1 > numero2){
//          console.log(`${numero1} es más grande que ${numero2}`)
//      }if (numero1 < numero2) {
//          console.log(`${numero2} es más grande que ${numero1}`)
//      }if (numero1 === numero2) {
//          console.log(`${numero1} es igual que ${numero2}`)
//      }
// }
//  masGrande(4, 4);

// // //ejercicio 4

//  function masChicos(number1, number2, number3) {
//      if (number1 < number2 && number1 < number3) {
//          console.log(`${number1} es el más pequeño de los tres números`)
//      }if (number2 < number1 && number2 < number3) {
//          console.log(`${number2} es el más pequeño de los tres números`)
//      }if (number3 < number1 && number3 < number2) {
//          console.log(`${number3} es el más pequeño de los tres números`)
//      }
//  }
//  masChicos(10, 3, 11);

// // //ejercicio 5

//  const personas = {
//      persona1: {
//          name: `Dorian`,
//          edad: 33,
//         altura: 177
//     },
//      persona2: {
//         name: `Enzo`,
//          edad: 6,
//          altura: 119
//      }
//  }

//  function masAlta(altu1, altu2) {
//      if (altu1 > altu2) {
//          console.log (`${personas.persona1.name} es más alto que ${personas.persona2.name}`)
//      }if (altu2 > altu1) {
//          console.log (`${personas.persona2.name} es más alto que ${personas.persona1.name}`)
//      }if (altu1 === altu2) {
//          console.log (`${personas.persona1.name} mide lo mismo que ${personas.persona2.name}`)
//      }
//  }

// masAlta(personas.persona1.altura, personas.persona2.altura)

//  function masEdad(edad1, edad2) {
//      if (edad1 > edad2) {
//          console.log (`${personas.persona1.name} es mayor que ${personas.persona2.name}`)
//      }if (edad2 > edad1) {
//          console.log (`${personas.persona2.name} es más mayor que ${personas.persona1.name}`)
//      }if (edad1 === edad2) {
//          console.log (`${personas.persona1.name} tiene la misma edad que ${personas.persona2.name}`)
//      }
// }
// masEdad(personas.persona1.edad, personas.persona2.edad)

// // ejercicio 6

// let nombre = prompt(`Ingresa tu nombre:`);
// let edad = Number(prompt(`Ingresa tu edad:`));
// let altura = Number(prompt(`Ingresa tu altura en cm: ejemplo: 167`));
// let vision = Number(prompt(`Ingresa tu vision del 1 al 10, siendo 10 la mejor:`));

// if (edad >= 18 && altura > 150 && vision >= 8) {
//     console.log(`${nombre} está habilitado para conducir`);
// }else {console.log(`${nombre} no está habilitado para conducir`)};

//ejercicio 7

// vip.1 (vamos empezar)


// // ejercicio 8

// alert(`Adivina el número incógnito del 1 al 10! Tienes 3 intentos`);
// let numeroIncongnita = 10;
// let primerNum = Number(prompt(`Primer intento: ingresa un número:`));
// if (primerNum == 10) {
//     alert(`Felicidades! Haz encontrado el número correcto!`);
// }else if (primerNum != 10){
//     alert(`Incorrecto! Prueba otra vez!`)
//     let segundoNum = Number(prompt(`Segundo intento: ingresa un número:`))
//     if (segundoNum == 10) {
//         alert(`Felicidades! Haz encontrado el número correcto!`);
//     }else if (segundoNum != 10) {
//         alert(`Incorrecto! último intento! prueba otra vez!`)
//         let tercerNum = Number(prompt(`Tercer intento: ingresa un número:`))
//         if (tercerNum == 10) {
//             alert(`Felicidades! Haz encontrado el número correcto!`);
//         }else if (tercerNum != 10){
//             alert(`Incorrecto!  haz perdido`)
//         }
//     }
// }

// // // ejercicio 9

// let edadd = Number(prompt(`Ingresa tu edad:`));

// if (edadd >= 0 && edadd <= 12) {
//     console.log(`Eres un infante!`)
// }else if(edadd >=13 && edadd <= 18){
//     console.log(`Eres un adolescente!`)
// }else if (edadd >= 19 && edadd <= 45) {
//     console.log(`Eres un mayor jóven!`)
// }else if (edadd >= 46 && edadd <= 100) {
//     console.log(`Eres un anciano!`)
// }else if (edadd > 100){
//     console.log(`Uauuu sos eterno !?`)
// }

// // // ejercicio 10

// let concursoPPT = alert(`Compite en piedra, papel o tijera!`)
// let primerJug = prompt(`Jugador 1 ingresa tu Nombre:`)
// let segundoJug = prompt(`Jugador 2 ingresa tu Nombre:`)

// let jugadaPrimerJug = prompt(`${primerJug} ingresa PIEDRA, PAPEL o TIJERA:`)
// let jugadaSegundoJug = prompt(`${segundoJug} ingresa PIEDRA, PAPEL o TIJERA:`)

// if (jugadaPrimerJug.toLowerCase() == `piedra` && jugadaSegundoJug.toLowerCase() == `piedra`) {
//     alert(`Dos PIEDRAS: Empate!`)
// }else if (jugadaPrimerJug.toLowerCase() == `piedra` && jugadaSegundoJug.toLowerCase() == `papel`) {
//     alert(`${segundoJug} ha ganado!`)
// }else if (jugadaPrimerJug.toLowerCase() == `piedra` && jugadaSegundoJug.toLowerCase() == `tijera`) {
//     alert(`${primerJug} ha ganado!`)
// }else if (jugadaPrimerJug.toLowerCase() == `papel` && jugadaSegundoJug.toLowerCase() == `papel`) {
//     alert(`Doble PAPEL: Empate!`)
// }else if (jugadaPrimerJug.toLowerCase() == `papel` && jugadaSegundoJug.toLowerCase() == `piedra`) {
//     alert(`${primerJug} ha ganado!`)
// }else if (jugadaPrimerJug.toLowerCase() == `papel` && jugadaSegundoJug.toLowerCase() == `tijera`) {
//     alert(`${segundoJug} ha ganado!`)
// }else if (jugadaPrimerJug.toLowerCase() == `tijera` && jugadaSegundoJug.toLowerCase() == `tijera`) {
//     alert(`Doble Tijera: Empate!`)
// }else if (jugadaPrimerJug.toLowerCase() == `tijera` && jugadaSegundoJug.toLowerCase() == `piedra`) {
//     alert(`${segundoJug} ha ganado!`)
// }else if (jugadaPrimerJug.toLowerCase() == `tijera` && jugadaSegundoJug.toLowerCase() == `papel`) {
//     alert(`${primerJug} ha ganado!`)
// }else {
//     alert(`has hecho trampa! Fin del Juego!`)
// };

// // // ejercicio 11

// let color = prompt(`Ingresa un color:`)
// switch (color) {
//     case `Blanco`.toLowerCase():
//         alert(`Falta de color`)
//         break;
//     case `Negro`.toLowerCase():
//         alert(`Falta de color`)
//         break;
//     case `Verde`.toLowerCase():
//         alert(`El color de la naturaleza`)
//         break;
//     case `Azul`.toLowerCase():
//         alert(`El color del agua`)
//         break;
//     case `Amarillo`.toLowerCase():
//         alert(`El color del sol`)
//         break;
//     case `Rojo`.toLowerCase():
//         alert(`El color del fuego`)
//         break;
//     case `Marrón`.toLowerCase():
//         alert(`El color de la tierra`)
//         break;
//     default: 
//         alert(`que buena elección.`)
//         break;
// }

// // ejercicio 12

// let operacion = prompt( "Ingrese operacion: suma, resta, multiplicacion, division" )
// let numeroUno = Number( prompt( 'Ingrese el primer numero' ) )
// let numeroDos = Number( prompt( 'Ingrese el segundo numero' ) )

// switch ( operacion ) {
//     case "suma":
//         console.log( `El resultado de sumar ${numeroUno} y ${numeroDos} es ${numeroUno + numeroDos}` )
//         break;
//     case "resta":
//         console.log( `El resultado de restar ${numeroUno} y ${numeroDos} es ${numeroUno - numeroDos}` )
//         break;
//     case "multiplicacion":
//         console.log( `El resultado de multiplicar ${numeroUno} y ${numeroDos} es ${numeroUno * numeroDos}` )
//         break;
//     case "division":
//         console.log( `El resultado de dividir ${numeroUno} y ${numeroDos} es ${numeroUno / numeroDos}` )
//         break;
//     default:
//         console.log('operacion no valida')
//         break
// }

// // ejercicio 13

// let nome = prompt(`Ingresa tu nombre:`)
// let apellid = prompt(`Ingresa tu apellido:`)
// let cumple = prompt(`Ingresa tu fecha de nacimiento:`)
// let dniNum = prompt(`Ingresa tu número de DNI:`)
// let sexo = prompt(`Ingresa tu sexo:`)
// alert(`Revisa tu datos:` + ' ' + nome + ' ' + apellid + ' ' + cumple + ' ' + dniNum + ' ' + sexo)

// let confirma = prompt(`Son los datos correctos?: Escribe Si o No`)

// if (confirma.toLowerCase == `si`) {
//     const dataDni = {
//         nombre: nome,
//         apellido: apellid,
//         nacimiento: cumple,
//         dni: dniNum,
//         sexo: sexo
//         }
// }
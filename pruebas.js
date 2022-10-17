/* operadores de asignacion 
let numero1=10;
let numero2=5;
resultado=numero1 + numero2;
alert(resultado)
*/

/* operadores de concatenacion */
saludo = "Hola";
pregunta = "¿como estas?";
frase= saludo + pregunta;
document.write(frase)

nombre="Joana Almiron"; 
// frase= "soy " + nombre + " y estoy caminando"
frase1= `soy ${nombre} y estoy corriendo`;
document.write(frase1)

/* let numero1=10;
let numero2=15;

resultado= (numero1<numero2) || (numero1==numero2);
document.write(resultado)

if(10<15) {  
alert("hola");
}

if(nombre == "ALMIROOON") { 
    alert("este es mi apellido");
}
else if (nombre == "Joana Sabrina Almiron") { 
    alert("este es mi nombre , segundos nombre y apellido");
}
else {
    alert("este es mi nombre y apellido " + nombre);
} */



// ejercicio Cofla , soy Dalto , capitulo 1 js

 dineroCofla=prompt("cuanto dinero tiene Cofla?")
 dineroRoberto=prompt("cuanto dinero tiene Roberto?")
 dineroCofla= parseInt(dineroCofla);


 if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla comprate un palito de helado de agua");
    alert("y te sobran " + (dineroCofla - 0.6));
 }
 else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Cofla comprate un palito de helado de crema");
    alert("y te sobran " + (dineroCofla - 1));
 }
 else if(dineroCofla >= 1.6 && dineroCofla < 1.7) { 
    alert("Cofla comprate un Bombon helado marca heladix");
    alert("y te sobran " + (dineroCofla - 1.6));
 }
 if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Cofla comprate un bombon helado de heladovich");
    alert("y te sobran " + (dineroCofla - 1.7));
 }
 else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cofla comprate un bombon helado de helardo");
    alert("y te sobran " + (dineroCofla - 1.8));
 }
 else if(dineroCofla >= 2.9) { 
    alert("Cofla comprate un potecito de helado con confites o 1/4kg");
    alert("y te sobran " + (dineroCofla - 2.9));
 } else {
    alert("Cofla sos pobre , no te podes comprar helado");
 }


 if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto comprate un palito de helado de agua");
 }
 else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto comprate un palito de helado de crema");
 }
 else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7) { 
    alert("Roberto comprate un Bombon helado marca heladix")
 }
 if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Roberto comprate un bombon helado de heladovich");
 }
 else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Roberto comprate un bombon helado de helardo");
 }
 else if(dineroRoberto >= 2.9) { 
    alert("Roberto comprate un potecito de helado con confites o 1/4kg");
 } else {
    alert("Roberto sos pobre , no te podes comprar helado");
 }



Ejercicio original

var num2 = 0;

function suma(num1) {
    return function(){
        return num1 +num2;
    }
}

var suma2 = suma(2);

console.log(suma2(5));

1.- Eliminar num2  como variable global

2.- se agrega parametro a la funcion hija el parametro num2,
 para que pueda ser leido


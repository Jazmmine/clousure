function suma(num1) {
    return function(num2){
        return num1 +num2;
    }
}

var suma2 = suma(2);
document.write(suma2(5));

document.write("<br>");

var suma12 = suma(12);
document.write(suma12(76));
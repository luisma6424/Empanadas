//recibiendo datos por teclado
let saborEmpanada=prompt("escribe el sabor de tu empanada aqui")
let cantidadEmpanada=prompt("escribe la cantidad aqui")
let valorEmpanada=cantidadEmpanada*3000;
alert("su precio es de: $"+valorEmpanada)
let saborGaseosa=prompt("pon el sabor de la gaseosa aqui")
let cantidadGaseosa=prompt("escribe la cantidad aqui")
let valorGaseosa=cantidadGaseosa*4000
alert("su precio es de: $"+valorGaseosa)
let saborPostre=prompt("pon el sabor de postre aqui")
let cantidadPostre=prompt("escribe la cantidad aqui")
let valorPostre=cantidadPostre*8000
alert("su precio es de: $"+valorPostre)
let valorTotal=valorEmpanada+valorGaseosa+valorPostre
alert("su precio total es de: $"+valorTotal)

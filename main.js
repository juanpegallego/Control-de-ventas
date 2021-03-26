window.onload = listenerCliente();
const divDatos = document.createElement('div');
const divVentas = document.createElement('div');
const divPuntos = document.createElement('div');
const listaDatos =  document.createElement('ul');
const sumaTotalPuntos = [];

function listenerCliente(){
    document.getElementById('agregarCliente').addEventListener('click', (e) => 
    {   e.preventDefault();

        const nombreCliente = document.getElementById('nombreCliente').value;
        const cobisCliente = document.getElementById('cobisCliente').value;
        const fechaVenta = document.getElementById('fechaVenta').value;

        divDatos.innerHTML = `
        Nombre Cliente:  ${nombreCliente} <br>
        Fecha de Venta:  ${fechaVenta}<br>
        Cobis Cliente:   ${cobisCliente}
        <hr>
        
        `;


        clienteCarrito()
        
        
    } )}

function crearTarjeta(x){ 
    divVentas.appendChild(x);
    
    }

function clienteCarrito(){
    
    despliegueInput();    
    
    document.getElementById('carrito').appendChild(divDatos);
    document.getElementById('carrito').appendChild(divVentas)
    const btnCarrito = document.createElement('button')
    document.getElementById('carrito').appendChild(btnCarrito);
    btnCarrito.className = 'btn btn-success';
    btnCarrito.id = 'btnCarrito';
    btnCarrito.innerHTML = 'CONFIRMAR VENTA';
    divDatos.appendChild(listaDatos);
    divDatos.className = 'carrito-datos';      
    confirmarVenta();
    
    }


function agregarPaquete(){
  const paquete = document.getElementById('selectPaquete').value; 
  puntosPaquete(paquete); 
  const paqueteLista = document.createElement('li');
  paqueteLista.innerHTML = `
    ${paquete} Puntos: ${puntosPaquete(paquete)} ;  
    <hr>
  `
    crearTarjeta(paqueteLista);
  sumaTotalPuntos.push(puntosPaquete(paquete))
  
};

function confirmarVenta(){
        document.getElementById('btnCarrito').addEventListener('click', (e) => {
        e.preventDefault();
        let venta = [];
        venta.push(divDatos.innerText, divVentas.innerText);
        imprimirSales(venta);
        
        
        
})
}

function imprimirSales(n){
    divPuntos.innerHTML = (sumaTotalPuntos.reduce(totalPuntos));
    document.getElementById('card-header').innerHTML = n[0];
    document.getElementById('card-title').innerHTML = n[1];
    document.getElementById('card-points').innerHTML = `
    Total Puntos:  ${divPuntos.innerText}
    `;
    alert("Total Puntos= " + parseInt(divPuntos.innerText));
    document.getElementById('containerCarrito').className = 'container-carrito-effect';
}

function agregarTarjeta(){
    const tarjeta = document.getElementById('selectTarjetas').value;
    const categoria = document.getElementById('selectCategoryTc').value;
    const tarjetaElegida = tarjeta + " " + categoria;
    const tarjetaLi = document.createElement('li');
    tarjetaLi.innerHTML =`
    ${tarjetaElegida}  Puntos:  ${puntosTarjeta(categoria)}
    <hr>
    `;
    crearTarjeta(tarjetaLi);    
    sumaTotalPuntos.push(puntosTarjeta(categoria));
    

  };

  

function puntosTarjeta(a){
    if (a == 'Internacional'){
        return 50
    }
    else if ( a == 'Gold' ){
        return 100
    }
    else if (a == 'Platinum'){
        return 150
    }
    else if (a == 'Signature'){
        return 200
    }
    
}


function agregarSeguro(){
    
    const arrayCheckBox = [
    document.getElementById('boxAtm'),
    document.getElementById('boxAtmPlus'),
    document.getElementById('boxHogar'),
    document.getElementById('boxAp'),
    document.getElementById('boxMp')
                          ];

    arrayCheckBox.forEach(element => {
        if(element.checked){
            const seguroLi = document.createElement('li');
            seguroLi.innerHTML = `
            ${element.value} Puntos: + ${puntosSeguro(element.value)}
            <hr>
            `;
            crearTarjeta(seguroLi);            
            sumaTotalPuntos.push(puntosSeguro(element.value)); 
            
        }    
    });
    
}

function puntosSeguro(x){
    if (x == "Opcion Seguros ATM"){
        return 2
    }
    else  if (x == "Opcion Seguros ATM Plus"){
        return 10
    }
    else  if (x == "Metlife Hogar"){
        return 30
    }
    else  if (x == "Metlife Accidentes Personales"){
        return 20
    }
    else  if (x == "Metlife Macro Proteccion"){
        return 10
    }
}


function agregarPrestamo(){
    const prestamo = document.getElementById('tipoPrestamo').value;
    const monto = document.getElementById('montoPrestamo').value;    
    const prestamoElegido = prestamo + " " + "$" + monto + ".-";
    const prestamoLista = document.createElement('li');
    prestamoLista.innerHTML = `
    ${prestamoElegido}  Puntos: ${puntosPrestamo(prestamo, monto)}
    <hr>
    `
    crearTarjeta(prestamoLista)
    sumaTotalPuntos.push(puntosPrestamo(prestamo, monto)); 
    
}
//calcula puntos por prestamo
 function puntosPrestamo(a,b){
    
    if (a == 'Prestamo nuevo'){
        let r = parseInt((b * 170) / 80000) ;
        return  r
    }

    else if (a == 'Renovacion' || a == 'Reestructuracion / Refinanciacion'){
        let r = parseInt((b * 140) / 80000) ;
        return r;
    }
    
}
 
 function puntosPaquete(a){
    if (a.includes('PS')){
        return 150
    }
    else {
        return 200
    }
}

function totalPuntos(total,num){
    return total + num
}

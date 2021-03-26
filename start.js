// Despliega los input dependiendo producto elegido //
function despliegueInput(){
    document.getElementById('addPaquete').addEventListener('click', () =>{
        document.getElementById('containerPaquete').style.display = 'block';
    }); 
    
    document.getElementById('addTarjeta').addEventListener('click', () =>{
        document.getElementById('containerTarjeta').style.display = 'block';
    }); 
    
    document.getElementById('addSeguro').addEventListener('click', () =>{
        document.getElementById('containerSeguro').style.display = 'block';
    }); 
    
    document.getElementById('addPrestamo').addEventListener('click', () =>{
        document.getElementById('containerPrestamo').style.display = 'block';
    }); 
    document.getElementById('agregarOtraTC').addEventListener('click', () =>{
        document.getElementById('container2daTarjeta').style.display = 'block';
    }); 
    
}

function ocultarProducto(a){
    a.style.display = "none";
}

function showSales(){
    document.getElementById('salesContainer').style.display = 'block';
    document.getElementById('containerCarrito').style.display = 'none';
    document.getElementById('containerDatos').style.display = 'none';
    document.getElementById('containerProductos').style.display = 'none';
    document.getElementById('containerTarjeta').style.display = 'none';
    document.getElementById('containerPaquete').style.display = 'none';
    document.getElementById('containerPrestamo').style.display = 'none';
    document.getElementById('containerSeguro').style.display = 'none';

}


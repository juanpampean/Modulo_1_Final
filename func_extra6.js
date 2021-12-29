let autos = require("./autos");
let persona={
    nombre: 'Juan',
    capacidadDePagoEnCuotas:12500,
    capacidadDePagoTotal: 10000000
}

let concesionaria = {
    autos:autos,
    buscarAuto: function (patente) {
        let autos=this.autos;
        let autosFiltrados = autos.filter(function (auto) {
            return auto.patente === patente;
        });
        if (autosFiltrados.length===0)
        {return null}
        else  
        {return autosFiltrados[0]}
        },
        venderAuto: function (patente){
        let auto=this.buscarAuto(patente);
        if (auto===null){return console.log("no está en stock")}
        else {return auto.vendido=true}  
        },
        autosParaLaVenta: function(){
            autosParaLaVenta=autos.filter(function(auto){
                return auto.vendido===false})
                return autosParaLaVenta
            },
        autosNuevos:function(){
            let autosParaLaVenta=this.autosParaLaVenta();
            autosNuevos=autosParaLaVenta.filter(function(auto){
                return auto.km<100})
                return autosNuevos
            },
        listaDeVentas:function(){
            let autos=this.autos;
            let listaDeVentas=[]
            let listaDeVenta=autos.filter(function(auto){
                if (auto.vendido===true){
                return listaDeVentas.push(auto.precio)}
                else {return listaDeVentas.push() }}
            )
            return listaDeVentas
                },
        totalDeVentas : function(patente){
            let venderAuto=this.venderAuto(patente)
            let listaventas=this.listaDeVentas();
            function reducer(acum,num){return acum+num};
            if (listaventas.length!==0){return listaventas.reduce(reducer)}
            else { return 0}
        },
        puedeComprar: function(autos,persona) {
        //    let autofiltrados=this.buscarAuto(patente);

         if ( persona.capacidadDePagoTotal>=autos.precio && 
    persona.capacidadDePagoEnCuotas>=(autos.precio/autos.cuotas))
      {return true}
        else {return false}
        },
        autosQuePuedeComprar:function(persona){
            let cars=this.autosParaLaVenta();
            let autosQuePuedeComprar=[];
            let puedeComprar=this.puedeComprar;
            let autosquepuede=cars.filter(function(car){
                if (puedeComprar(car,persona)===true){
                return autosQuePuedeComprar.push(car)}
                else {return autosQuePuedeComprar.push()}
            })
            return autosQuePuedeComprar
        }

        }


        
//  console.log(concesionaria.venderAuto("JJK116"))
//  console.log(concesionaria.listaDeVentas())
console.log(concesionaria.autosQuePuedeComprar(persona))
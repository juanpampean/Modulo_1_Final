    let autos = require("./autos");
    let persona={
        nombre: 'Juan',
        capacidadDePagoEnCuotas:25000,
        capacidadDePagoTotal: 150000
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
            }

            }


            
 //  console.log(concesionaria.venderAuto("JJK116"))
 //  console.log(concesionaria.listaDeVentas())
    console.log(concesionaria.puedeComprar(autos[0],persona))
let autos = require("./autos");
//let patente="JJK116"

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
            }
        }
console.log(concesionaria.venderAuto("JJK116"))  
console.log(concesionaria.autosNuevos())
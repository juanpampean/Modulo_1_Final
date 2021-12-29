let autos = require("./autos");
//let patente="APL123"
let persona={
  nombre: 'Juan',
  capacidadDePagoEnCuotas:200001,
  capacidadDePagoTotal: 10000000
}

let concesionaria = {
      autos:autos,
      buscarAuto: function (patente) {
      //  for(let i=0;i<=autos.length;i++){
      //      if(autos[i].patente===patente){
      //          return autos[i]
      //      }
      //  }
      //   return null
        
    //}
      let auto=this.autos.find(function(auto){
          return auto.patente===patente
      })
      if (auto){return auto}
      else {return null}
},
    venderAuto:function(patente){
      let auto=this.buscarAuto(patente)
      if(auto){
        auto.vendido=true}
        return auto
    },
    autosParaLaVenta:function(){
      let autosParaLaVenta=this.autos.filter(function(auto){
        return auto.vendido===false
      })
      return autosParaLaVenta
    },
    autosNuevos:function(){
      let autosPventa=this.autosParaLaVenta();
      let autoss  = autosPventa.filter(function(auto){
        return auto.km<100;
      })
      return autoss;
    },
    listaDeVentas: function(){
      let listado=[]
      this.autos.forEach(function(auto){
        if(auto.vendido==true){
        listado.push(auto.precio)}
      })
      return listado
    },
    totalVentas:function(){
      let listado=this.listaDeVentas();
      if(listado.length!==0){
      let total = listado.reduce(function(acum,num){
          return acum+num},0)
          return total}
        return 0
    },
    puedeComprar:function(persona,autos){
    
      return ((persona.capacidadDePagoTotal >= autos.precio) && (persona.capacidadDePagoEnCuotas >= (autos.precio/autos.cuotas)))
    },
    autosQuePuedeComprar:function(persona){
      let autosParaVender = this.autosParaLaVenta();
      let autosFiltrados = autosParaVender.filter(function(auto){
        return concesionaria.puedeComprar(persona,auto)

      })
      return autosFiltrados
    }
}

//console.log(concesionaria.venderAuto(patente))
console.log(concesionaria.autosQuePuedeComprar(persona))
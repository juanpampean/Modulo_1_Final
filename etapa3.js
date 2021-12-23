let autos = require("./autos");
let patente=process.argv[2]


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
       }
}

console.log(concesionaria.venderAuto(patente))

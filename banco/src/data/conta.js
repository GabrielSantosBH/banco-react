export default function conta (name,Cpf ){

    const incristos  =  [ ]
    const nome = name
    const cpf = Cpf
    let saldo = 500

    const infoConta =  {nome, cpf, saldo }


    function increver (func ) {
    
       
        incristos.push( func )
        console.log("foi inscrito com susseso ")


    }



    function  notificar (){

        incristos.forEach(func => func(saldo))
        console.log("foi notificado ")
    }



    function desescrever ( func ){

        incristos.filter( f =>  f  !== func )
        console.log("foi desencrevido ")
    
    }


    function sacar ( valor ){

        if(valor < saldo  && valor > 0 ){
            console.log(saldo)
            
            saldo = saldo - valor

            notificar()
            

        }
       else{
           return
       }

    }


    function depositar (valor) { 
        if(valor >  0 ){
            saldo = Number(saldo)  + Number(valor) 
        
            notificar()
        } 

        else{
            return; 
        }
        


    }




    return{increver ,  desescrever  , infoConta , sacar , depositar  }
}
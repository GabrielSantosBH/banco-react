import React, { useState } from 'react'
import "./style.css"


function Operações(props) {


    const [valor,setValor] = useState(0)

     function  hendleValor (e){
         setValor(e)
     }

    return(
        
        <div className="operações">
        <label  className="operações__label"> {props.texto}  <input type="number"   onChange={e=>{
            hendleValor(e.target.value)
        }} value={valor}  className="operações__input" placeholder='100' />  </label>
        <button className='operações__button'
        
            onClick={e=>{
                props.operação(valor)
            }}


        > 
        
        
        {props.texto}  
        
        
        
        
        </button>    
        </div> 
    )
}

export default Operações
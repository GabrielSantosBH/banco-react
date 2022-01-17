import React from 'react'
import "./style.css"


function Operações(props) {
    return(
        
        <div className="operações">
        <label  className="operações__label"> Sacar  <input type="number"   className="operações__input" placeholder='100' />  </label>
        <button className='operações__button'> Sacar  </button>    
        </div> 
    )
}

export default Operações
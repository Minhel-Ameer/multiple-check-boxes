import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Checkboxes = () => {

  // const initialValues = {A:'',B:'',C:'',D:''}
  const [radioValues, setRadioValues]=useState([])

  
  const handleChange = (e) =>{
    const{name,value} = e.target;

    if(name==='selectAll')
    {

    }else{
      if(e.target.checked){
        //console.log(value,'value')
        setRadioValues([...radioValues,value])
        }else{
          const index = (radioValues.lastIndexOf(value))
          radioValues.splice(index,1)
          setRadioValues(radioValues)
          //console.log(radioValues,'after removing')
        }
    }

    
  }

  useEffect(()=>{
    console.log("radioValues: ",radioValues)
  },[radioValues])
  return (
    <div>
      <h1>Check Boxes</h1>
        <ul>
          <li>
            <input type='checkbox'  name='A' value={'A'} onChange={handleChange} /> A
          </li>
          <li>
            <input type='checkbox'  name='B' value={'B'} onChange={handleChange} /> B
          </li>
          <li>
            <input type='checkbox'  name='C' value={'C'} onChange={handleChange} /> C
          </li>
          <li>
            <input type='checkbox'  name='D' value={'D'} onChange={handleChange} /> D
          </li>
          </ul>
        </div>
    
  )
}

export default Checkboxes

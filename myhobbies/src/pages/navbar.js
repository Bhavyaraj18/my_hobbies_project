import React from 'react'

const navbar = (props) => {
  return (
   <div>
        <button className='btn btn-primary' onClick={()=>props.ulink('Home')}> Home</button> <button className='btn btn-primary' onClick={()=>props.ulink('Add')}>Add hobby</button> <button className='btn btn-primary' onClick={()=>{props.ulink('Fav')}}>Favourite hobby</button>
      </div>
  )
}

export default navbar

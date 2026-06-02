import React from 'react'
import Hobby from './Hobby'
const Home = (props) => {
  return (
    <div className='row row-cols-auto' style={{display:'flex',flexDirection:'row',margin:'20px'}}>
    {props.hobbies.map((item,index)=>(<Hobby delHobby={props.delHobby} key={index} item={item}/>))}
</div>
  )
}

export default Home

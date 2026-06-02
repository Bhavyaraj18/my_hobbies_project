import React, { useState } from 'react'
import './Hobby.css';
import { MdOutlineDelete, MdOutlineEdit,  } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import HobbyEdit from './HobbyEdit';

const Hobby = (props) => {
  const [hobbyid,updateHobby] = useState(0);
  return (

    <div className="card" style={{width: '250px'}}>
  
  <div className="card-body p-3">
    <p className="card-text"> {props.item.hobby}  <span title="delete" onClick={()=>{props.delHobby(props.item.id)}}><MdOutlineDelete/></span> <span onClick={()=>{updateHobby(props.item.id)}}><MdOutlineEdit/></span> <span><FcLike /></span></p>
    <img src={props.item.img} className="card-img-top" alt="..." style={{borderRadius:50,height:'200px'}}/>
  </div>
  <HobbyEdit hobbyid={hobbyid} hobby={props.item}/>
</div>
  )
}

export default Hobby
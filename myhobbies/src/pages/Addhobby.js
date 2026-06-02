import { useState } from "react";
const Addhobby = (props) => {
    const [hobbytext, updateText] = useState('');
    const [img,updateImg] = useState('');
const handleHobby = (e)=>{
updateText(e.target.value);
}
const handleImage = (e)=>{
updateImg(e.target.value);
}

const addToHobby = ()=>{
    let newhobby = {id:Math.random(),hobby:hobbytext,fav:false,img:img}
    props.addHobby(newhobby);
    
}

  return (
    <div>
      <label>Hobby</label><input type="text" onChange={handleHobby}/><br/>
      <label>Image url</label><input type="text" onChange={handleImage}/><br/>
      <button onClick={addToHobby} className="btn btn-secondary">Add</button>
    </div>
  )
}

export default Addhobby

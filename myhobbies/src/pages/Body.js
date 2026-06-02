import React from 'react';
import Home from './Home';
import Addhobby from './Addhobby';
import Favourites from './Favourites';
import Hobby from './Hobby';
const Body = (props) => {
  return (
    <>
<div>
   
      {props.lnk==='Home'?
      <Home hobbies={props.hobbies} delHobby={props.delHobby}/>
      :props.lnk==='Add'?
      <Addhobby addHobby={props.addHobby}/>
      :
      <Favourites/>
      }
      </div>
    </>
  )
}

export default Body

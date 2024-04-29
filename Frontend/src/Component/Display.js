import React, { useState } from "react";
import 'animate.css';
import axios from "axios";
import image1 from '../Image/edit.png';
import image2 from '../Image/delete.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Display.css';




export default function Display({id,task,setupdate})
{
const  [pensil,setpensil] = React.useState("true");
const  [input,setinput] = useState("");

function clicked() {
    setpensil(prevstate=>!prevstate)
   
   
   }


   const  Edit = async() => {
    console.log("yes");
 await axios.put(`https://todo-backend-ltge.onrender.com/update/${id}`,{input})
 .then((response) =>{console.log("connect")
 setpensil("true")
})
 .catch((error) => {console.log(error)});
   }

 const Removetask = async() => {
console.log("call ho rha hein");
  await axios.delete(`https://todo-backend-ltge.onrender.com/remove/${id}`)
    .then((res)=>{console.log("connected")
    setupdate((prevdata)=>!prevdata);
    setpensil("true")

    })
    .catch((err)=>{console.log("kya yaar")});

 } 

    return(
        
        <div  id="anim">
<div className="task">

<h5>{task}</h5>
</div>
            <div className="d-flex" id="action_button_box">
          
 {       pensil ?   <>    <button className="edit-button" onClick={clicked}>
              Edit
            </button> </>
 
 :
 
 <div >   
    < div  className="edit_box">
    <button className="cross-button" onClick={clicked}>
              x
            </button> 
     <input 
      type="text"
      className="update_input"
      placeholder="Update Your Task"
      value={input}
      onChange = {(e)=> setinput(e.target.value)}
      
      
      />
      <button type="submit"
       className="glow-on-hover"
       onClick={Edit}
       id="update_submit"
       > 
       update
       </button>
    
      </div>
      
         

      </div>
   
}

   
         <button className="" id="delete_button"  onClick={Removetask} > Delete </button>
            </div>

        </div>
    );
}

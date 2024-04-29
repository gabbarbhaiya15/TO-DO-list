import React from "react";
import axios from "axios";
import { useState , useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Taskbar.css'; 
import  fontimage from '../Image/fontimage.jpg';
import Display from "./Display";

export  default function Taskbar(){
const [task,settask] = useState([]);
const [input,setinput] = useState("");
const [update,setupdate] = useState(false)
const [Updatemode,setUpdatemode] = useState(null)
useEffect( ()=> {
    axios.get('https://todo-backend-ltge.onrender.com/task1')
    .then((res)=>{console.log(res);
     settask(res.data);
    })
},[update]);
const storedata = async (e) =>{
    axios.post('https://todo-backend-ltge.onrender.com/task',{input})
    .then((res)=>{console.log(res.data);
    setinput("");
    setupdate(prevstate => !prevstate)
    });
}



    return(
        <div className="box">

            
              <h2 className="" id="heading"> Task Manager </h2>
            <div className="add_todo_box">
              
                
                    <div className="container">
           <input 
            type="text"
            className="input"
            placeholder="Write You Task"
            value={input}
            onChange = {(e)=> setinput(e.target.value)}
            
            
            />
          
            </div>
            <button type="submit"
             className="glow-on-hover"
             onClick={storedata}
             id="submit_task"
             > 
            Ok, Got It
             </button>
                

            </div>
        <div className="display_task_container">
            <ul className="list-group">
                {task.map((task) => (
                <Display
                key={task.id}
                id={task._id}
               task= {task.input} 
               setupdate={setupdate}
               />))}
            </ul>
            </div>
        </div>
    )
}
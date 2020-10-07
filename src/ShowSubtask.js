import React ,{useState,useEffect}from 'react'
import {getSubtasks} from './task'
import Subtasks from './Subtasks';
const ShowSubtask = ({handleSubTask})=>{
    
    const [open,setOpen] = useState(false);
    const [subTasks,setSubTasks] = useState([]);
    const setSubTaskStatus = (e)=>{
            e.preventDefault();
            setOpen(!open);
            
    }
    useEffect(()=>{
        if(open){
            (async function fetchSubtask (){
                const subTask = await getSubtasks();
                setSubTasks(subTask);
            }())
            
        }
        if(!open){
             setSubTasks([]);
        }
    },[open])
    return(<>
            <div className={ open ?'subtaskArrowOpen':'subtaskArrowClose'}>
                <a onClick={setSubTaskStatus} href="">Show subtasks</a>
            </div>
            { <Subtasks handleSubTask= {handleSubTask} subtasks={subTasks}/> }
    </>)
    
}

export default ShowSubtask;
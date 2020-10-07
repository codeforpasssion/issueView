import React from 'react'

const Subtasks = ({handleSubTask,subtasks})=>{
    return (<div>
        <ul className="listSubTask">
        { subtasks.map((task,index)=>{
           return  <li key={index} className="task"> <a onClick={(e)=>{
               e.preventDefault();
               handleSubTask(task)
               }} href="">{task.title}</a></li>
        })}
        </ul>
    </div>);
};

export default Subtasks;
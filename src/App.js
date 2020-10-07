import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { getIssue } from './task';
import Title from './Title';
import Loading from './Loading';
import StatusDropDown from './StatusDropDown';
import ShowSubtask from './ShowSubtask'
function App() {
    const [data, setData] = useState();

  const handleSubTask = (task)=>{
      task && setData(task);
  }  

  useEffect(() => {
     (async function fetchData(){
      const result = await getIssue();
      setData(result);
      console.log(result);
    }())
  },[])
  return (
    <div className="container">
      {data ? <div className="issueContainer">
                    <div className="header">
                        <Title title={data.title} />
                        <StatusDropDown status={data.status}/>
                    </div>
                    <ShowSubtask handleSubTask={handleSubTask}/>
        </div> : <Loading/>}
    </div>
  );
}

export default App;

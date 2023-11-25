import './App.css';
import {useState} from 'react';
import {Task} from './Task'
function App() {
   
   const [toDoList,setTaskList] = useState([]);
   const [newTask, setNewTask] = useState("");

   const getTaskInput = (event) =>{
      setNewTask(event.target.value);
   }

   const addTask = () =>{
      const task = 
         {
            id:toDoList.length+1,
            taskName:newTask,
            isComplete:false
         };

      console.log(typeof task);
      setTaskList([...toDoList, task]);
   }

   const deleteTask = (taskId) =>{
      setTaskList(toDoList.filter((x) => {
         return x.id !== taskId;
      }));
   }

   const completeTask= (id)=>{

      toDoList.forEach((x)=>{
         if(x.id===id){
            x.isComplete = true;
            document.getElementById(`${x.id}`).style.color="green";
         }
      })

      toDoList.forEach((x)=>{
         console.log(x.id);
         console.log(x.taskName);
         console.log(x.isComplete);
      })
     
   }

   return (
      <div className="App">
         <div className='addTask'>
            <input onChange={getTaskInput} type='text'></input>
            <button onClick={addTask}>Add</button> 
         </div>

         <div className='list'>
            {toDoList.map((task)=>{
               return ( <Task completeTask={completeTask} isComplete={task.isComplete} deleteTask={deleteTask} id={task.id} taskName={task.taskName}/>
               )
            })}
         </div>
      </div>)
   }

export default App;

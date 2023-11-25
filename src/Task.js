export const Task= (props)=>{
    return(
        <div class='task-delete'>
            <h1 id={props.id}>{props.taskName}</h1>  
            <button onClick={()=> props.completeTask(props.id)}>Complete</button>
            <button className="delete-button" onClick={ ()=>props.deleteTask(props.id)}>X</button>
     </div>
    )
}
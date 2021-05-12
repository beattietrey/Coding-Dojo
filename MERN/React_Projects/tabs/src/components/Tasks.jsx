import React, { useState } from 'react'

function Tasks() {

    const [tasks, setTasks]= useState([])
    const [tempTask, setTemp] =useState("")
    
    const addTask = () => {
        let newTask = tasks
        newTask.push({taskName: tempTask, completed: false})
        setTasks(newTask)
        console.log(tasks)
    }
    
    const handler = e => {
        console.log("submit")
        e.preventDefault();
        console.log("add")
        addTask();
    }
    const inputHandler = e => {
        setTemp(e.target.value)
        console.log(tempTask)
    }

    const completeTask = e => {
        setTasks(...tasks, tasks[e.target.i] = {taskName:e.target.name, completed:true})
    }  

    const deleteTask = e => {

    }

    return (
        <div>
            <h1>Tasks</h1>
            <form id = "form" onSubmit={ handler }>
                <div>
                    <label htmlFor="taskName"> Task: </label>
                    <input type="text" name="taskName" onChange={inputHandler}/>
                </div>
                <button type="submit">Add</button>
            </form>
            <ul>{
                    tasks.map((item, i) => { 
                        return  <div key={i} style={{display:"flex"}}>
                                    { (item.completed === true) ? 
                                        <li htmlFor={item} style={{textDecoration:"line-through"}}>{item.taskName}</li>
                                        : <li htmlFor={item}>{item.taskName}</li>
                                    }
                                    <input type="checkbox" checked={item.completed} name={item.taskName} onChange={completeTask} /> 
                                    <button onClick={deleteTask} name={item.taskName}>Delete</button>
                                </div>
                })
            }</ul>
        </div>
    )
}

export default Tasks


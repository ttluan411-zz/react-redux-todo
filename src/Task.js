import React, { Component } from 'react';

export default function Task(props) {
    return (
    <div>
        <ul>
            {props.list.map ((el,i)=>{
                return (
                    <li>
                    <p style={{textDecoration: el.completed ? 'line-through':'none'}}>{el.task}</p> 
                    <button disabled={el.completed} onClick={()=> props.completeTask(i)}>Completed</button>
                    <button onClick={()=> props.deleteTask(i)}>Delete</button>
                    </li> 
                )
            })}
        </ul>
    </div>
    )
}
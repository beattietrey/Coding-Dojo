import React, { useState } from 'react'



const BoxDisplay = () => {
    const [app, setApp] = useState({
        boxes: [],
        color: "",
        int: "",
    })
    
    const addBox = (color,int) => {
        let box = app.boxes
        box.push([color,int])
        setApp({...app, boxes: box})
    }

    const handler = e => {
        document.getElementById("form").reset()
        e.preventDefault();
        console.log("This worked")
        addBox(app.color, app.int);
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
          );
    }

    const inputHandler = e => { 
        setApp({...app, [e.target.name]: e.target.value})
        console.log(app)
    }
    return (
        <div>
            <form id = "form" onReset={ handler }>
                <div>
                    <label htmlFor="color">Color: </label>
                    <input type="text" name="color" onChange={inputHandler}/>
                </div>
                <div>
                    <label htmlFor="int">Height/Width: </label>
                    <input type="text" name="int" onChange={inputHandler}/>
                </div>
                <button type="reset">Add</button>
            </form>
            <div style={{display: "flex"}}>{
                app.boxes.map((item, i) =>
                    <div key = { i } style={{width: item[1]+"px", height: item[1]+"px", backgroundColor: item[0] }}/>
                )
            }</div>
        </div>
    )
}

export default BoxDisplay

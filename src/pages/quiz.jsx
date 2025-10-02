import { useState } from "react"
import "./quiz.css"


export function Quiz(){
    const [index, setindex] = useState(0)
    const [score, setscore] = useState(0)
    
    function right() {
        setindex(prevIndex => prevIndex + 1)
        setscore(prevScore=> prevScore + 20)
    }
    function wrong() {
        setindex(prevIndex => prevIndex + 1)
    }
function Q1(){
    return(<>
    <div id="q1">
        <h2>
            Q1: What type of farming is best?
        </h2>
    </div>
    <div id="ques">
        
        <img src="./farmer wave.png" alt="farmer" />
        <div id="opt">
            <h4 onClick={right}>Option A</h4>
            <h4 onClick={wrong}>Option B</h4>
        </div>
        <div id="opt">
            <h4 onClick={wrong}>Option C</h4>
            <h4 onClick={wrong}>Option D</h4>
        </div>
    </div>
    </>)
}

function Q2(){
    return(<>
    <div id="q1">
        <h2>
            Q2: What type of farming is best?
        </h2>
    </div>
    <div id="ques">
        <img src="./farmer wave.png" alt="farmer" />
        <div id="opt">
            <h4 onClick={right}>Option A</h4>
            <h4 onClick={wrong}>Option B</h4>
        </div>
        <div id="opt">
            <h4 onClick={wrong}>Option C</h4>
            <h4 onClick={wrong}>Option D</h4>
        </div>
    </div>
    </>)
}

function Q3(){
    return(<>
    <div id="q1">
        <h2>
            Q3: What type of farming is best?
        </h2>
    </div>
    <div id="ques">
        <img src="./farmer wave.png" alt="farmer" />
        <div id="opt">
            <h4 onClick={right}>Option A</h4>
            <h4 onClick={wrong}>Option B</h4>
        </div>
        <div id="opt">
            <h4 onClick={wrong}>Option C</h4>
            <h4 onClick={wrong}>Option D</h4>
        </div>
    </div>
    </>)
}



function questions(){
    if (index == 0) {
       return( <Q1/>)
    }
    else if(index == 1){
        return(<Q2/>)
    }
    else if(index == 2){
        return(<Q3/>)
    }
    if(index<=3 &&score <= 20){
        return(<>
        <div id="ques">
            <h2>Nice try, You will do better next time!</h2>
        </div>
        </>)
    }
}

    return(<>
    <div id="main2">
    <div id="Qhead">
        <h1>Help the farmer ^~^!</h1>
        <p>Score:{score}</p>
        <br />
        
    </div>
    
    {questions()}
    
    </div>
    </>)
}




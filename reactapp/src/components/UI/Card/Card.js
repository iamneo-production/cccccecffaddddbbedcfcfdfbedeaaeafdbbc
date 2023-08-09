import Button from "../Button/Button"
import { useState } from "react";
let score=0;
let count=0;
const Card=({question,options,answer,setResult})=>{
    const values=Object.values(options)

    const[disable,setDisable]=useState(false)
    const answerCheck=(e)=>{
        if(e.target.textContent===answer){
            score++;
        }
        
        setDisable(true)
        count++;
        if(count===5){
            setResult({result:true,score:score})
            count=0;
            score=0;
        }
        
    }
return <>

    <div className="item">
        <h4>{question}</h4>
        
            {values.map((value,index)=>{
               return <button className="answer-btn" onClick={answerCheck} disabled={disable} key={index}>
                <Button>{value}</Button>
               </button>
               
            })

            }
    </div>

</>
}
export default Card
import { useContext, useEffect, useState } from "react";
import QuestionsData from "../data/QuestionsData"
import { DataContext } from "../App";


const Quiz = () => {
    console.log(QuestionsData);

    const [current, setcurrent] = useState(0)
    const [selectchoices, setselectchoices] = useState("")
    const {score, setscore, setappstate} = useContext(DataContext)

    useEffect(() =>{
        checkAnswer()
        // eslint-disable-next-line
    }, [selectchoices])

    const checkAnswer = () => {
        if (selectchoices !== "") {
            if (selectchoices === QuestionsData[current].answer) {
                console.log("Correct answer");
                setscore(score + 1)
                nextQuesTion()
            }else{
                console.log("Wrong answer T-T");
                nextQuesTion()
                
            }
        }
    }

    const nextQuesTion = () => {
        setselectchoices('')
        if (current === QuestionsData.length - 1) {
            setappstate('Score')
        }else{
           setcurrent(current + 1) 
        }
        
    }
    return(
        <div className="Quiz">
            <h1>{QuestionsData[current].question}</h1>
            <div className="choices">
                <button onClick={() => setselectchoices("A")}>{QuestionsData[current].A}</button>
                <button onClick={() => setselectchoices("B")}>{QuestionsData[current].B}</button>
                <button onClick={() => setselectchoices("C")}>{QuestionsData[current].C}</button>
                <button onClick={() => setselectchoices("D")}>{QuestionsData[current].D}</button>
            </div>
            <p>{`${current + 1} / ${QuestionsData.length}`}</p>
        </div>
    )
}

export default Quiz
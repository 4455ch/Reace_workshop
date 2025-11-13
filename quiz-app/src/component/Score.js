import { useContext } from "react"
import { DataContext } from "../App"
import QuestionsData from "../data/QuestionsData"

const Score = () => {
    const {score, setappstate, setscore} = useContext(DataContext)

    const restartapp = () => {
        setscore(0)
        setappstate('Menu')
    }
    return(
        <div className="Score">
            <h1>Summry Test point</h1>
            <h2>{`${score} / ${QuestionsData.length}`}</h2>
            <button onClick={restartapp}>Try again</button>
        </div>
    )
}

export default Score
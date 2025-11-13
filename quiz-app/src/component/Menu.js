import { useContext } from "react"
import { DataContext } from "../App"

const Menu = () => {
    const {setappstate} = useContext(DataContext)

    return(
        <div className="menu">
            <h1>Menu Conponent</h1>
            <button onClick={() => setappstate("Quiz")}>เริ่มทำแบบทดสอบ</button>

        </div>
    )
}

export default Menu
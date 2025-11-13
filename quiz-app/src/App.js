import { createContext, useState } from "react";
import Menu from "./component/Menu";
import Quiz from "./component/Quiz";
import Score from "./component/Score";

import './App.css'

export const DataContext = createContext()

function App() {

  const [appstate, setappstate] = useState('Menu')
  const [score, setscore] = useState(0)
  return (
    <DataContext.Provider value={{appstate, setappstate, score, setscore}}>
      <div className="App">
        <h1>Web Development quiz</h1>
        {appstate === "Menu" && <Menu />}
        {appstate === "Quiz" && <Quiz />}
        {appstate === "Score" && <Score />}
      </div>
    </DataContext.Provider>
  );
}

export default App;

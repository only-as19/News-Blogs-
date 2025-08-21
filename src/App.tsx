import type React from "react"
import { News } from "./components"
const App:React.FC  = ()=> {
  return (
    <div className="main-bg w-full h-screen grid place-items-center text-white">
      <div className=" w-[95vw] h-[95vmin] bg-main-bg rounded-md shadows">
        <News/>
      </div>
    </div>
  )
}

export default App

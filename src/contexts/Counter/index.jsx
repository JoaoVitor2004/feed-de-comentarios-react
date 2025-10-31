import { useState } from "react"
import counterContext from "./counterContext"

const Counter = ({ children }) => {

    const [count, setCount] = useState(0)

    const incrementar = () => setCount(prev => prev+=1)

    return (
        <counterContext.Provider value={{ count, incrementar }}>
            {children}
        </counterContext.Provider>
    )   
}

export default Counter
import { useState } from "react"

export const useToggle = (flag)=>{
    const [isToggle , setIsToggle] = useState(flag)

    return [isToggle , setIsToggle]
}
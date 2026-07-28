import { useEffect } from "react"

function useTitlePage(count){
    useEffect(()=>{
      document.title = `count-${count}`
    },[count])
}
export default useTitlePage
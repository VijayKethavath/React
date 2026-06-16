import { createContext } from "react"

export const GiftContext = createContext()


function GiftProvider({children}){
  return(
    <GiftContext.Provider value ={ { gift:"Iphone" }}>
      {children}
    </GiftContext.Provider>
    
  )
}
export default  GiftProvider
import { createContext, useContext, useState } from "react";

const  SortContext=createContext();
export function SortProvider({children}){
    const [sort,setSort]=useState("Relevance");
    return(
        <SortContext.Provider value={{sort,setSort}}>
            {children}
        </SortContext.Provider>
    )
}
export function useSort(){
    return useContext(SortContext)
}
import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext=React.createContext();

const AppProvider=({children})=>{
    const [isSidebarOpen,setIsSidebarOpen]= useState(false)
    const [isSubmenuOpen,setIsSubmenuOpen]= useState(false)
    const [location,setLocation]=useState({})
    const [page,setPage]= useState({page:'',links:[]})
    const closeSideBar=()=>{
        setIsSidebarOpen(false)
    }
    const openSideBar=()=>{
        setIsSidebarOpen(true)
    }
    const closeSubmenu=()=>{
        setIsSubmenuOpen(false)
    }
    const openSubmenu=(text,coordinates)=>{
        const page = sublinks.find((link)=>link.page===text)
        setPage(page)
        setLocation(coordinates)
        setIsSubmenuOpen(true)
    }
    return <AppContext.Provider value={{isSidebarOpen,isSubmenuOpen,closeSideBar,closeSubmenu,openSideBar,openSubmenu,location,page}}>{children}</AppContext.Provider>
}

export{AppProvider,AppContext}
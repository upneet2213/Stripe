import React, { useState, useRef, useEffect,useContext } from 'react'
import { AppContext } from './context'
const Submenu = () => {
  const {isSubmenuOpen,location,page:{page,links}}=useContext(AppContext)
  const container= useRef(null)
  useEffect(()=>{
    const submenu= container.current;
    const {center,bottom}= location;
    submenu.style.left=`${center}px`
    submenu.style.top=`${bottom}px`
  },[location])
  return <aside ref={container} className={`${isSubmenuOpen?'submenu show':'submenu'}`}>
    <h4>{page}</h4>
    <div className={`submenu-center col-${links.length}`}>
    {links.map((link,index)=>{
      const {label,icon,url}=link;
      return <a href={url} key={index}>{icon}{label}</a>
})}
    </div>
    
  </aside>
}

export default Submenu

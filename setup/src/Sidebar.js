import React, {useContext} from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { AppContext } from './context'
const Sidebar = () => {
  const {isSidebarOpen,closeSideBar} = useContext(AppContext)
  
  return <aside className={`sidebar-wrapper ${isSidebarOpen?'show':null}`}>
    <div className="sidebar">
      <button className="close-btn" onClick={closeSideBar}><FaTimes/></button>
      <div className="sidebar-links">
      {sublinks.map((sublink,id)=>{
        return <article key={id}>
          <h4>{sublink.page}</h4>
          <ul className="sidebar-sublinks">
            {sublink.links.map((link,index)=>{
              return <li key={index}><a href={link.url}>{link.icon}{link.label}</a></li>
            })}
          </ul>
        </article>
      })}
      </div>
      
    </div>
  </aside>
}

export default Sidebar

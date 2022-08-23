import React from 'react'
import SidebarRow from './SidebarRow'
import "./Sidebar.css"
import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@mui/icons-material'

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow 
        src="https://avatars.githubusercontent.com/u/51360924?s=96&v=4" 
        title="Georgi Nedaylkov"
        alt="Georgi Nedyalkov"
        />
        <SidebarRow 
          Icon={LocalHospital}
          title="COVID-19 Information Center"
        />
        <SidebarRow Icon={EmojiFlags} title="Pages"/>
        <SidebarRow Icon={People} title="Friends"/>
        <SidebarRow Icon={Chat} title="Messenger" />
        <SidebarRow Icon={Storefront} title="Marketplace"/>
        <SidebarRow Icon={VideoLibrary} title="Videos"/>
        <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>
    </div>
  )
}

export default Sidebar
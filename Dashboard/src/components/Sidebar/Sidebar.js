import React from 'react'
import { SidebarData } from './SidebarData';
import { Profile, 
SidebarLi, 
SidebarLink, 
SidebarsItems, 
Sidebar, 
SidebarMenu, 
LogoText, 
FooterText,
ClosedIcon,
Divider,
ToggleIcon} from './SideBarStyles';
import Heading from '../Heading/Heading';



const SideBar = ({sidebarOpen, sidebartoggle}) => {
    
    return (
          <Sidebar className='Sidebar' isOpen={sidebarOpen}>
              <SidebarMenu isOpen={sidebarOpen}> 
                  <LogoText >
                      Medical
                      <LogoText isOpen={sidebarOpen}>Lab</LogoText>
                 </LogoText>
                 <Divider />
                 <LogoText >
                      Admin
                      <LogoText isOpen={sidebarOpen}>Portal</LogoText>
                 </LogoText>
              <SidebarsItems>
                  {SidebarData.map((item, index) => {
                      return(<>
                          <SidebarLi key={index} isOpen={sidebarOpen} >
                              <SidebarLink to={item.path} activeClassName="active" isOpen={sidebarOpen} >
                              {item.icon}
                                   {item.title}
                              </SidebarLink>
                          </SidebarLi>
                          <ClosedIcon key={index} isOpen={sidebarOpen}>
                          <SidebarLink to={item.path} activeClassName="active" isOpen={sidebarOpen} >
                          {item.icon}
                          </SidebarLink>
                      </ClosedIcon>
                      </>
                          
                      );
                  }) }
                  <Divider />
              </SidebarsItems>
              </SidebarMenu>
              <FooterText isOpen={sidebarOpen} onClick={sidebartoggle}>
                      <ToggleIcon />
                      <Heading level={3} isOpen={sidebarOpen}> Toggle sidebar</Heading>
              </FooterText>
          </Sidebar>
    )
}

export default SideBar

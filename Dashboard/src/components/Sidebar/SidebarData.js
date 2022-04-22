import React from 'react'
import {MdOutlineLeaderboard} from 'react-icons/md'
import {FaUserCircle} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {SiMicrodotblog} from 'react-icons/si'
import {RiContactsBookLine} from 'react-icons/ri'
import {FiPhoneCall} from 'react-icons/fi'

export const SidebarData = [
    {
        title: 'Doctors',
        path: '/',
        icon: <i class="fa fa-user-md" aria-hidden="true"></i>,
    },
    {
        title: 'Patients',
        path: '/contacts',
        icon: <i class="fa fa-wheelchair"></i>,
    },
    {
        title: 'Laboratory',
        path: '/leads',
        icon: <i class="fa fa-flask" aria-hidden="true"></i>,
    },
    // {
    //     title: 'Subscribers',
    //     path: '/subscribers',
    //     icon: <FaUsers/>,
    // },
    // {
    //     title: 'Schedule',
    //     path: '/schedule',
    //     icon: <FiPhoneCall/>,
    // },
    // {
    //     title: 'Blogs',
    //     path: '/blogs',
    //     icon: <SiMicrodotblog />,
    // },

]
